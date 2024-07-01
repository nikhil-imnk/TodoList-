import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todo = useSelector((state) => state.todos);
  //console.log(todo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    //console.log("deleted");
  };

  const handleDone = (id) => {
    dispatch(markAsDone(id));
    console.log("done", id);
    let styles = {
      textDecoration: "line-through",
    };
  };
  return (
    <div>
      <AddForm />
      <br></br>
      <hr></hr>
      <h1>Todo List</h1>
      <ul>
        {todo.map((todo) => (
          <li
            key={todo.id}
            style={
              todo.isDone
                ? { textDecoration: "line-through", marginBottom: "1rem" }
                : { marginBottom: "1rem" }
            }
          >
            {todo.task}
            <button
              onClick={() => handleDelete(todo.id)}
              style={{ marginLeft: "5rem" }}
            >
              Delete
            </button>
            <button onClick={() => handleDone(todo.id)}>Mark as done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
