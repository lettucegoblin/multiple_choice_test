const express = require("express");
const fs = require("fs");
const path = require("path");
const MarkdownIt = require("markdown-it");
const md = new MarkdownIt();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

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
      // Extract the question and answers
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
      const newCorrectAnswer = options.find(
        (option) => option.letter === options[indexOfCorrectAnswer].letter
      ).letter;

      return {
        number: index + 1,
        question: questionMatch ? questionMatch[1] : "",
        options: options,
        correctAnswer: newCorrectAnswer,
      };
    });
    res.render("quiz", { questions });
  });
});

// Route to display a quiz
app.get("/quiz/:module/:test", (req, res) => {
  const { module, test } = req.params;
  const filePath = path.join(__dirname, "tests", module, `${test}.md`);

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) return res.status(404).send("Test not found");

    // Convert markdown to HTML
    const htmlContent = md.render(data);
    res.render("quiz", { content: htmlContent });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
