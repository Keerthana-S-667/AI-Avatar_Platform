const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

// Script generation route
app.post("/generate-script", (req, res) => {

  const topic = req.body.topic;

  const script = `This is a demo Tamil script about ${topic}`;

  res.json({ script });

});

app.get("/generate-script", (req, res) => {
  res.send("generate-script API is working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});