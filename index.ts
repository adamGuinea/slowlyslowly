import * as express from "express";
import * as cors from "cors"
import { postTodo, getTodos, getTodo, updateTodo, deleteTodo } from './handlers';
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
