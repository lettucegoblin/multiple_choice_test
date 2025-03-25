const express = require("express");
const fs = require("fs");
const path = require("path");
const MarkdownIt = require("markdown-it");
const md = new MarkdownIt();
const axios = require("axios");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Homepage route to list all modules and tests
app.get("/", (req, res) => {
  const testsDir = path.join(__dirname, "tests");
  const modules = {};

  // Read each module folder
  fs.readdir(testsDir, (err, moduleFolders) => {
    if (err) return res.status(500).send("Error reading modules");

    moduleFolders.forEach((module) => {
      const modulePath = path.join(testsDir, module);
      if (fs.statSync(modulePath).isDirectory()) {
        // Get all markdown files in each module
        const tests = fs
          .readdirSync(modulePath)
          .filter((file) => file.endsWith(".md"))
          .map((file) => file.replace(".md", ""));

        if (tests.length > 0) {
          modules[module] = tests;
        }
      }
    });

    res.render("index", { modules });
  });
});

app.get("/quiz/:module/:test", (req, res) => {
  const { module, test } = req.params;
  const filePath = path.join(__dirname, "tests", module, `${test}.md`);

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) return res.status(404).send("Test not found");

    var content = data.split("---");
    content.sort(() => Math.random() - 0.5);

    // Split content into individual questions using "---"
    const questions = content.map((section, index) => {
      // Check if this is a short answer question
      const isShortAnswer = section.includes("**SHORT ANSWER:**");
      
      if (isShortAnswer) {
        // Extract short answer question and model answer
        const questionMatch = section.match(/\*\*Q:\s(.+?)\*\*/);
        const shortAnswerMatch = section.match(/\*\*SHORT ANSWER:\*\*\s([\s\S]+?)(?=\n\n|$)/);
        
        return {
          number: index + 1,
          question: questionMatch ? questionMatch[1] : "",
          type: "short",
          modelAnswer: shortAnswerMatch ? shortAnswerMatch[1].trim() : "",
        };
      } else {
        // Extract the question and answers for multiple choice
        const questionMatch = section.match(/\*\*Q:\s(.+?)\*\*/);
        const optionsMatch = Array.from(section.matchAll(/- ([A-D])\) (.+)/g));
        const answerMatch = section.match(/\*\*Answer:\*\*\s([A-D])/);

        const options = optionsMatch.map(([_, letter, text]) => ({
          letter,
          text,
        }));
        const correctAnswer = answerMatch ? answerMatch[1] : null;

        // Shuffle the options
        for (let i = options.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [options[i], options[j]] = [options[j], options[i]];
        }

        const indexOfCorrectAnswer = options.findIndex(
          (option) => option.letter === correctAnswer
        );

        // Change the options to be A, B, C, D again
        options.forEach((option, index) => {
          option.letter = String.fromCharCode(65 + index);
        });

        // Find the new correct answer letter with the index of the correct answer
        const newCorrectAnswer = indexOfCorrectAnswer >= 0 
          ? options[indexOfCorrectAnswer].letter 
          : null;

        return {
          number: index + 1,
          question: questionMatch ? questionMatch[1] : "",
          type: "multiple",
          options: options,
          correctAnswer: newCorrectAnswer,
        };
      }
    });
    res.render("quiz", { questions });
  });
});

// Endpoint to handle short answer submission and evaluation
app.post("/evaluate-answer", async (req, res) => {
  try {
    const { question, modelAnswer, userAnswer } = req.body;
    
    // Call the Open WebUI API endpoint with the correct path for your instance
    const response = await axios.post(process.env.ENDPOINT, {
      model: process.env.MODEL,
      messages: [
        {
          role: "system", 
          content: "You are an educational assessment AI. Keep your answer succinct. Your job is to evaluate student answers to questions and provide helpful feedback. Be constructive and encouraging."
        },
        {
          role: "user",
          content: `Question: ${question}\n\nTextbook Answer: ${modelAnswer}\n\nStudent Answer: ${userAnswer}\n\nPlease evaluate the student's answer compared to the textbook answer. Provide specific feedback on what was correct and what could be improved. Be educational and constructive.`
        }
      ]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`
      }
    });
    
    // Extract the feedback from the response
    const feedback = response.data.choices[0].message.content;
    
    res.json({ 
      success: true,
      feedback: feedback
    });
  } catch (error) {
    console.error('Error evaluating answer:', error);
    res.status(500).json({ 
      success: false, 
      feedback: "There was an error evaluating your answer. Please try again later." 
    });
  }
});

// Endpoint to explain the concept
app.post("/explain-concept", async (req, res) => {
  try {
    const { question, options } = req.body;
    
    // Build content based on whether options are provided (multiple choice) or not
    let content = `I need an explanation of the following concept from my class:\n\n${question}`;
    
    // If options are provided (for multiple choice), include them
    if (options && options.length > 0) {
      content += "\n\nThe question includes these options:";
      options.forEach(option => {
        content += `\n${option.letter}) ${option.text}`;
      });
    }
    
    content += "\n\nPlease explain this concept in detail, including key points, examples, and any relevant background information. Format your response with appropriate headings and structure for clarity.";
    
    // Call the Open WebUI API endpoint for explanation
    const response = await axios.post(process.env.ENDPOINT, {
      model: process.env.MODEL,
      messages: [
        {
          role: "system", 
          content: "You are an educational AI tutor. Provide clear, concise explanations of concepts. Use examples where helpful. Format your response in markdown for readability."
        },
        {
          role: "user",
          content: content
        }
      ]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`
      }
    });
    
    // Extract the explanation from the response
    const explanation = response.data.choices[0].message.content;
    
    res.json({ 
      success: true,
      explanation: explanation
    });
  } catch (error) {
    console.error('Error getting explanation:', error);
    res.status(500).json({ 
      success: false, 
      explanation: "There was an error generating the explanation. Please try again later." 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});