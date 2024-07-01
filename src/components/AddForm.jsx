import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  let [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  let handleChange = (event) => {
    setTodo(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    //console.log(todo);
    dispatch(addTodo(todo));
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter a task todo : </label>&nbsp;&nbsp;
        <input
          placeholder="Enter Task"
          value={todo}
          onChange={handleChange}
          style={{ height: "2.5rem" }}
        ></input>
        <br></br>
        <br></br>
        <button>Add Task</button>
      </form>
    </div>
  );
}
