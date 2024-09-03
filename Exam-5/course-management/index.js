const express = require("express");
const cors = require("cors");
const path = require("path");
const validate = require("./middleware");
const app = express();
app.use(express.urlencoded());

app.use(cors());
app.use(express.json());

const InitialCourse = [
  {
    name: "Initial Course",
    category: "Programming",
    instructor: "Jane Doe",
    duration: "15",
    id: 1,
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to the Online Course Management API.");
});

app.get("/courses", (req, res) => {
  res.send(InitialCourse);
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "addCourse.html"));
});

app.post("/courses/add", validate, (req, res) => {
  const { name, category, instructor, duration } = req.body;
  let course = {
    name,
    category,
    instructor,
    duration,
    id: InitialCourse.length
      ? InitialCourse[InitialCourse.length - 1].id + 1
      : 1,
  };
  InitialCourse.push(course);
  res.send(InitialCourse);
});

app.patch("/courses/update/:id", (req, res) => {
  let { id } = req.params;
  let Index = InitialCourse.findIndex((e) => e.id == id);
  if (Index != -1) {
    InitialCourse[Index] = { ...InitialCourse[Index], ...req.body };
    res.send(InitialCourse);
  } else {
    res.send("Course Not Found!!!");
  }
});

app.delete("/courses/delete/:id", (req, res) => {
  let { id } = req.params;
  InitialCourse = InitialCourse.filter((e) => e.id == id);
  res.send(InitialCourse);
});

app.get("/courses/filter", (req, res) => {
  let { category, instructor, duration } = req.query;
  let FilteredCourse = InitialCourse;

  if (category) {
    FilteredCourse = FilteredCourse.filter(
      (e) => e.category.toLowerCase() == category.toLowerCase()
    );
  }

  if (instructor) {
    FilteredCourse = FilteredCourse.filter(
      (e) => e.instructor.toLowerCase() == instructor.toLowerCase()
    );
  }

  if (duration) {
    FilteredCourse = FilteredCourse.filter((e) => e.duration == duration);
  }

  res.send(FilteredCourse);
});

app.get("/courses/:id", (req, res) => {
  let { id } = req.params;
  let course = InitialCourse.find((e) => e.id == id);
  console.log(course);
  if (course) {
    return res.send(course);
  } else {
    res.status(404).send("Course Not Found !!!");
  }
});

app.listen(3000, () => {
  console.log("Listening...");
});
