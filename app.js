const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => res.sendFile(path.join(__dirname + "/index.html")));

app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname + "/about.html"))
);

app.get("/contact-me", (req, res) =>
  res.sendFile(path.join(__dirname + "/contact-me.html"))
);

app.use((req, res) =>
  res.status(404).sendFile(path.join(__dirname + "/404.html"))
);

app.listen(process.env.port || 3000);

console.log("Running at port 3000");
