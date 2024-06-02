const express = require("express");
const expHbs = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;

// Connect to Database
const { Client } = require("pg");
const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "MyDatabase",
  password: "admin",
  port: 5432,
});

db.connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
  })
  .catch(() => {
    console.log("Error Connecting to PostgreSQL");
  });

const hbs = expHbs.create({
  helpers: {
    increment: (value) => {
      return value + 1;
    },
    isEqual: (value1, value2, options) => {
      const isEqual =
        value1 === value2 ? options.fn(this) : options.inverse(this);

      return isEqual;
    },
  },
});

app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  const query = `SELECT * FROM public."Todos";`;

  const result = await db.query(query);

  const data = {
    title: "Todo App",
    todos: result.rows,
  };

  res.render("home", data);
});

app.get("/create-todo", (req, res) => {
  const data = {
    title: "Create | Todo App",
  };

  res.render("create", data);
});

app.post("/todos", async (req, res) => {
  const title = req.body.title;
  const note = req.body.note;

  const query = `INSERT INTO public."Todos"(title, note, status)
                   VALUES ('${title}', '${note}', 'Todo');`;

  await db.query(query);

  res.redirect("/");
});

app.get("/delete-todo/:id", async (req, res) => {
  const id = req.params.id;

  const query = `DELETE FROM public."Todos" WHERE id=${id};`;

  await db.query(query);

  res.redirect("/");
});

app.get("/update-todo/:id", async (req, res) => {
  const id = req.params.id;

  const query = `SELECT * FROM public."Todos" WHERE id=${id};`;

  const result = await db.query(query);

  const data = {
    title: "Update | Todo App",
    todo: result.rows[0],
  };

  res.render("update", data);
});

app.post("/todos/update/:id", async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const note = req.body.note;
  const status = req.body.status;

  const query = `UPDATE public."Todos"
	                SET title='${title}', note='${note}', status='${status}'
	                WHERE id=${id};`;

  await db.query(query);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server Anda berjalan pada port ${port}`);
});
