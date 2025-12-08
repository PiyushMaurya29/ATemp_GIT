const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello From Home Page");
});

app.get("/about", (req, res) => {
  return res.send("Hello From About Page");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

let data = fs.readFileSync("data.txt", "utf-8");
console.log("File Data:", data);