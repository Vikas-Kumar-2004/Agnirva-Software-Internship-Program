const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Greet by Name
app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}! Welcome to our server.`);
});

// Return JSON Responses
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello, World!", status: "success" });
});


const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
