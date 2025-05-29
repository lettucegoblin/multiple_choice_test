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
    // Turn the folder-name & file-name into a human-friendly title:
    const quizName = test
      .replace(/[-_]/g, " ")                // hyphens/underscores → spaces
      .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize each word

    // Now pass it into the EJS template
    res.render("quiz", {
      questions,
      quizName  //title generated above, connects with the EJS template
    });
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
          content: `Question: "${question}"\n\nTextbook Answer: "${modelAnswer}"\n\nStudent Answer: "${userAnswer}"\n\nPlease evaluate the student's answer compared to the textbook answer. Provide specific feedback on what was correct and what could be improved. Be educational and constructive.`
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
// Endpoint to explain the concept with streaming support
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

    // Set headers for streaming
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Create a flag to track if any content has been sent
    let contentSent = false;

    // Make the API call with streaming enabled
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
      ],
      stream: true,
      options: {}
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`
      },
      responseType: 'stream'
    });

    // Process and forward the stream
    response.data.on('data', (chunk) => {
      try {
        const lines = chunk.toString().split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ') && line !== 'data: [DONE]') {
            // Extract the content from the stream
            const jsonData = JSON.parse(line.substring(6));
            if (jsonData.choices && jsonData.choices[0].delta && jsonData.choices[0].delta.content) {
              const content = jsonData.choices[0].delta.content;
              contentSent = true;

              // Send the chunk to the client
              res.write(`data: ${JSON.stringify({ chunk: content })}\n\n`);
            }
          }
        }
      } catch (error) {
        console.error('Error processing stream chunk:', error);
      }
    });

    response.data.on('end', () => {
      // If no content was sent, send an empty success message
      if (!contentSent) {
        res.write(`data: ${JSON.stringify({ chunk: '' })}\n\n`);
      }
      res.write('data: [DONE]\n\n');
      res.end();
    });

    response.data.on('error', (err) => {
      console.error('Stream error:', err);
      res.end();
    });

  } catch (error) {
    console.error('Error setting up explanation stream:', error);
    // Return a standard JSON error if streaming setup fails
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({
      success: false,
      explanation: "There was an error generating the explanation. Please try again later."
    });
  }
});

app.get('/explain-concept-stream', async (req, res) => {
  try {
    const { question, options } = req.query;
    let parsedOptions = [];

    // Parse options if provided
    if (options) {
      try {
        parsedOptions = JSON.parse(options);
      } catch (e) {
        console.error('Error parsing options:', e);
      }
    }

    // Build content based on whether options are provided (multiple choice) or not
    let content = `I need an explanation of the following concept from my class:\n\n${question}`;

    // If options are provided (for multiple choice), include them
    if (parsedOptions && parsedOptions.length > 0) {
      content += "\n\nThe question includes these options:";
      parsedOptions.forEach(option => {
        content += `\n${option.letter}) ${option.text}`;
      });
    }

    content += "\n\nPlease explain this concept in detail, including key points, examples, and any relevant background information. Format your response with appropriate headings and structure for clarity.";

    // Set headers for server-sent events
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });

    // Make the API call with streaming enabled
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
      ],
      stream: true,
      options: {}
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`
      },
      responseType: 'stream'
    });

    // Process the streaming response
    response.data.on('data', (chunk) => {
      try {
        const lines = chunk.toString().split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ') && line !== 'data: [DONE]') {
            try {
              // Extract the content from the stream
              const jsonData = JSON.parse(line.substring(6));
              if (jsonData.choices && jsonData.choices[0].delta && jsonData.choices[0].delta.content) {
                const content = jsonData.choices[0].delta.content;

                // Send the chunk to the client
                res.write(`data: ${JSON.stringify({ chunk: content })}\n\n`);
              }
            } catch (parseError) {
              console.error('Error parsing JSON:', parseError);
            }
          } else if (line === 'data: [DONE]') {
            res.write('data: [DONE]\n\n');
          }
        }
      } catch (error) {
        console.error('Error processing stream chunk:', error);
      }
    });

    response.data.on('end', () => {
      res.write('data: [DONE]\n\n');
      res.end();
    });

    response.data.on('error', (err) => {
      console.error('Stream error:', err);
      res.write(`data: ${JSON.stringify({ error: 'Stream error occurred' })}\n\n`);
      res.end();
    });

    // Handle client disconnect
    req.on('close', () => {
      try {
        response.data.destroy();
      } catch (e) {
        console.error('Error closing stream:', e);
      }
    });

  } catch (error) {
    console.error('Error in explain-concept-stream:', error);
    res.write(`data: ${JSON.stringify({ error: 'Failed to generate explanation' })}\n\n`);
    res.end();
  }
});

// Add this route to your app.js for streaming answer evaluation
app.get('/evaluate-answer-stream', async (req, res) => {
  try {
    const { question, modelAnswer, userAnswer } = req.query;

    // Set headers for server-sent events
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });

    // Make the API call with streaming enabled
    const response = await axios.post(process.env.ENDPOINT, {
      model: process.env.MODEL,
      messages: [
        {
          role: "system",
          content: "You are an educational assessment AI. Your job is to evaluate student answers to questions and provide helpful feedback. Be constructive and encouraging."
        },
        {
          role: "user",
          content: `Question: "${question}"\n\nTextbook Answer: "${modelAnswer}"\n\nStudent Answer: "${userAnswer}"\n\nPlease evaluate the student's answer compared to the textbook answer. Provide specific feedback on what was correct and what could be improved. Be educational and constructive.`
        }
      ],
      stream: true,
      options: {}
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`
      },
      responseType: 'stream'
    });

    // Process the streaming response
    response.data.on('data', (chunk) => {
      try {
        const lines = chunk.toString().split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ') && line !== 'data: [DONE]') {
            try {
              // Extract the content from the stream
              const jsonData = JSON.parse(line.substring(6));
              if (jsonData.choices && jsonData.choices[0].delta && jsonData.choices[0].delta.content) {
                const content = jsonData.choices[0].delta.content;

                // Send the chunk to the client
                res.write(`data: ${JSON.stringify({ chunk: content })}\n\n`);
              }
            } catch (parseError) {
              console.error('Error parsing JSON:', parseError);
            }
          } else if (line === 'data: [DONE]') {
            res.write('data: [DONE]\n\n');
          }
        }
      } catch (error) {
        console.error('Error processing stream chunk:', error);
      }
    });

    response.data.on('end', () => {
      res.write('data: [DONE]\n\n');
      res.end();
    });

    response.data.on('error', (err) => {
      console.error('Stream error:', err);
      res.write(`data: ${JSON.stringify({ error: 'Stream error occurred' })}\n\n`);
      res.end();
    });

    // Handle client disconnect
    req.on('close', () => {
      try {
        response.data.destroy();
      } catch (e) {
        console.error('Error closing stream:', e);
      }
    });

  } catch (error) {
    console.error('Error in evaluate-answer-stream:', error);
    res.write(`data: ${JSON.stringify({ error: 'Failed to evaluate answer' })}\n\n`);
    res.end();
  }
});

// Add this route to your app.js for succinct explanations
app.get('/explain-succinct-stream', async (req, res) => {
  try {
    const { question, options } = req.query;
    let parsedOptions = [];

    // Parse options if provided
    if (options) {
      try {
        parsedOptions = JSON.parse(options);
      } catch (e) {
        console.error('Error parsing options:', e);
      }
    }

    // Build content based on whether options are provided (multiple choice) or not
    let content = `I need a brief, succinct explanation of this concept:\n\n${question}`;

    // If options are provided (for multiple choice), include them
    if (parsedOptions && parsedOptions.length > 0) {
      content += "\n\nThe question includes these options:";
      parsedOptions.forEach(option => {
        content += `\n${option.letter}) ${option.text}`;
      });
    }

    content += "\n\nProvide a concise explanation of this concept using no more than 3-4 sentences. Focus only on the core principles.";

    // Set headers for server-sent events
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });

    // Make the API call with streaming enabled
    const response = await axios.post(process.env.ENDPOINT, {
      model: process.env.MODEL,
      messages: [
        {
          role: "system",
          content: "You are an educational AI tutor. Your task is to explain concepts clearly but extremely succinctly. Keep explanations short and to the point."
        },
        {
          role: "user",
          content: content
        }
      ],
      stream: true,
      options: {}
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`
      },
      responseType: 'stream'
    });

    // Process the streaming response
    response.data.on('data', (chunk) => {
      try {
        const lines = chunk.toString().split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ') && line !== 'data: [DONE]') {
            try {
              // Extract the content from the stream
              const jsonData = JSON.parse(line.substring(6));
              if (jsonData.choices && jsonData.choices[0].delta && jsonData.choices[0].delta.content) {
                const content = jsonData.choices[0].delta.content;

                // Send the chunk to the client
                res.write(`data: ${JSON.stringify({ chunk: content })}\n\n`);
              }
            } catch (parseError) {
              console.error('Error parsing JSON:', parseError);
            }
          } else if (line === 'data: [DONE]') {
            res.write('data: [DONE]\n\n');
          }
        }
      } catch (error) {
        console.error('Error processing stream chunk:', error);
      }
    });

    response.data.on('end', () => {
      res.write('data: [DONE]\n\n');
      res.end();
    });

    response.data.on('error', (err) => {
      console.error('Stream error:', err);
      res.write(`data: ${JSON.stringify({ error: 'Stream error occurred' })}\n\n`);
      res.end();
    });

    // Handle client disconnect
    req.on('close', () => {
      try {
        response.data.destroy();
      } catch (e) {
        console.error('Error closing stream:', e);
      }
    });

  } catch (error) {
    console.error('Error in explain-succinct-stream:', error);
    res.write(`data: ${JSON.stringify({ error: 'Failed to generate succinct explanation' })}\n\n`);
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});