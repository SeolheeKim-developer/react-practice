import { useState } from "react";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  const deleteBtn = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1>My To Do List ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
          <input
            className="task-input"
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="Write the lists to do..."
          ></input>
          <button className="button-add">Add</button>
        </form>
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>
              {item}
              <button
                className="button-delete"
                onClick={() => deleteBtn(index)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
