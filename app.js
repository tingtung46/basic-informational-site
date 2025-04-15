const express = require("express");
const path = require("path");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.use((req, res) =>
  res.status(404).sendFile(path.join(__dirname + "/404.html"))
);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`My first Express app - listening to port ${PORT}!`);
});
