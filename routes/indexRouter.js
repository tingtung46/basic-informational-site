const { Router } = require("express");
const path = require("path");

const indexRouter = Router();

indexRouter.get("/", (req, res) =>
  res.sendFile(path.join(__dirname + "/index.html"))
);
indexRouter.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname + "/about.html"))
);
indexRouter.get("/contact", (req, res) =>
  res.sendFile(path.join(__dirname + "/contact-me.html"))
);

indexRouter.post("/contact", (req, res) =>
  res.send("Thanks for feedback. We will reply soon!")
);

module.exports = indexRouter;
