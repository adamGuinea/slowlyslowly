const express = require("express");
const cors = require("cors");
const { postTodo, getTodos, getTodo, updateTodo, deleteTodo } = require('./handlers')
const app = express();

app.use(cors());
app.use(express.json());

app.post("/todos", postTodo);

app.get("/todos", getTodos);

app.get("/todos/:id", getTodo);

app.put("/todos/:id", updateTodo);

app.delete("/todos/:id", deleteTodo);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
