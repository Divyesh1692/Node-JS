const express = require("express");
const cors = require("cors");
const validate = require("./middleware");
const path = require("path");
const app = express();
app.use(express.urlencoded());
app.use(cors());
app.use(express.json());

let initialRecipe = [
  {
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish.",
    preparationTime: "15 minutes",
    cookingTime: "15",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    country: "India",
    veg: true,
    id: 1,
  },
];

app.get("/", (req, res) => {
  res.send("welcome to the recipe api.");
});

app.get("/recipe/all", (req, res) => {
  res.send(initialRecipe);
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log("Recipe Data Send...");
});

app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "recipe.html"));
});

app.post("/recipe/add", validate, (req, res) => {
  const {
    name,
    description,
    preparationTime,
    cookingTime,
    imageUrl,
    country,
    veg,
  } = req.body;
  let Recipe = {
    name,
    description,
    preparationTime,
    cookingTime,
    imageUrl,
    country,
    veg,
    id: initialRecipe.length
      ? initialRecipe[initialRecipe.length - 1].id + 1
      : 1,
  };

  initialRecipe.push(Recipe);
  res.send(initialRecipe);
});

app.patch("/recipe/update/:id", (req, res) => {
  let { id } = req.params;
  let {
    name,
    description,
    preparationTime,
    cookingTime,
    imageUrl,
    country,
    veg,
  } = req.body;
  let Index = initialRecipe.findIndex((e) => e.id == id);
  if (Index != -1) {
    initialRecipe[Index] = { ...initialRecipe[Index], ...req.body };
    res.send(initialRecipe);
  } else {
    res.send("Recipe Not Found!!!");
  }
});

app.delete("/recipe/delete/:id", (req, res) => {
  let { id } = req.params;
  initialRecipe = initialRecipe.filter((e) => e.id != id);
  res.send(initialRecipe);
});

app.get("/recipe/filter", (req, res) => {
  let { veg, country, sort } = req.query;
  let filteredRecipes = initialRecipe;

  if (veg) {
    filteredRecipes = filteredRecipes.filter((recipe) => recipe.veg === veg);
  }

  if (country) {
    filteredRecipes = filteredRecipes.filter(
      (recipe) => recipe.country.toLowerCase() === country.toLowerCase()
    );
  }

  if (sort) {
    filteredRecipes.sort((a, b) => {
      return sort === "lth"
        ? parseInt(a.cookingTime) - parseInt(b.cookingTime)
        : parseInt(b.cookingTime) - parseInt(a.cookingTime);
    });
  }

  res.json(filteredRecipes);
});

app.listen("8090", () => {
  console.log("Listening...");
});
