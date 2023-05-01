const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const categories = require("./data/categories.json");
const allNews = require("./data/news.json");
app.get("/", (req, res) => {
  res.send("Hello World! I am here");
});
app.get("/categories", (req, res) => {
  // res.send('Hello World! I am here')
  res.send(categories);
  //   res.json(categories);
});
app.get("/allNews", (req, res) => {
  res.send(allNews);
});
app.get("/allNews/:id", (req, res) => {
  // res.send(news);
  const news = allNews.find((news) => news.category_id === req.params.id);
  console.log(news);
  res.send(news);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
