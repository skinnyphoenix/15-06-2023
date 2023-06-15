import Card from "./components/Card";
import { todos } from "./mock/mock";
import "./App.css";
import ProductList from "./components/productList";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState(todos);
  const filterTodos = (numChar) => {
    setTodoList(todoList.filter((todo) => todo.title.length <= numChar));
  };

  return (
    <>
      <div className="btnWrapper">
        <button className="btnFilter" onClick={() => filterTodos(8)}>
          8
        </button>
        <button className="btnFilter" onClick={() => filterTodos(16)}>
          16
        </button>
        <button className="btnFilter" onClick={() => filterTodos(32)}>
          32
        </button>
        <button className="btnFilter" onClick={() => setTodoList(todos)}>
          Clear
        </button>
      </div>

      <ProductList data={todoList} nomeColonna={"allTodos"} />
      <ProductList data={todoList} nomeColonna={"completedTodos"} />
      <ProductList data={todoList} nomeColonna={"notCompletedTodos"} />
    </>
  );
}

export default App;
