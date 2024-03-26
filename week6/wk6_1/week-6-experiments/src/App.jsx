/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* 

import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="shoaib" />
    </div>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState(["title"]);

  function updateTitle() {
    setTitle(Math.random());
  }
  return (
    <div>
      <Header title={title} />
      <button onClick={updateTitle}>update title</button>
    </div>
  );
}
function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default App;
*/
/* keys
import { useState } from "react";

function App() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [todo, setTodo] = useState([]);
  return (
    <div>
      <Todo />
      <Todos todo={todo} />
    </div>
  );
  function Todo() {
    return (
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={function (e) {
            setTitle(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="description"
          onChange={function (e) {
            setDescription(e.target.value);
          }}
        ></input>
        <br></br>
        <button onClick={Addtodo}>add todo</button>
      </div>
    );
  }
  function Addtodo() {
    setTodo([...todo, { title, description }]);
  }
}

function Todos({ todo }) {
  return (
    <div>
      {todo.map(function (todo, index) {
        return (
          <div key={index}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
*/

import { useEffect } from "react";
import { useState } from "react";

/* cardwrappers
function App() {
  return (
    <div>
      <CardWrapper>
        <div>hii there</div>
      </CardWrapper>
      <CardWrapper>
        <div>hii</div>
      </CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  return <div style={{ border: "2px black solid" }}>{children}</div>;
}
export default App;
*/

/* useEffect*/

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 10000);
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}
function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}
export default App;
