const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.get("*", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/dashboard.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.removeAllListeners(9000, function () {
  console.log("Application is running on https://localhost:9000");
});
