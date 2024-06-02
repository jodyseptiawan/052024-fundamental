const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;

app.engine("handlebars", hbs.engine());
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

// endpoint
app.get("/", (req, res) => {
  const data = {
    title: "Todo App",
  };

  res.render("home", data);
});

app.get("/create", (req, res) => {
  const data = {
    title: "Ini halaman Create Data test lagi",
  };

  res.render("create", data);
});

app.get("/login", (req, res) => {
  const data = {
    title: "Ini halaman Login",
  };

  res.render("login", data);
});

app.listen(port, () => {
  console.log(`Server Anda berjalan pada port ${port}`);
});
