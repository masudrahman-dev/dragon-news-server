const express = require("express");
const app = express();
const port = 3000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");
app.get("/categories", (req, res) => {
  // res.send('Hello World! I am here')
  res.send(categories);
  //   res.json(categories);
});
app.get("/news", (req, res) => {
  res.send(news);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
