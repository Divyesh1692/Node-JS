const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let news = [
  { title: "Heavy Rain", content: "Heavy Rain in Surat", id: 1 },
  {
    title: "New Smartphone",
    content: "Samsung Launched New Smartphone",
    id: 2,
  },
];

app.get("/get", (req, res) => {
  res.send(news);
});

app.post("/post", (req, res) => {
  let { title, content } = req.body;
  let addNews = {
    title,
    content,
    id: news.length ? news[news.length - 1].id + 1 : 1,
  };
  news.push(addNews);
  res.send(news);
});

app.patch("/update/:id", (req, res) => {
  let { id } = req.params;
  let { title, content } = req.body;
  let News = news.find((e) => e.id == id);
  if (News) {
    if (title != null) News.title = title;
    if (content != null) News.content = content;
    res.send(News);
  } else {
    res.status(404).send("News not found");
  }
});

app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;
  let News = news.filter((e) => e.id != id);
  news = News;
  res.send(news);
});

app.listen(8090, () => {
  console.log("Listening...");
});
