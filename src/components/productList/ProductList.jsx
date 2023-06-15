import { useState } from "react";
import Card from "../Card";
import { todos } from "../../mock/mock";
import "./index.css";

const ProductList = ({ data, nomeColonna }) => {
  return (
    <>
      <div className="todoList">
        <h3>{nomeColonna}</h3>
        <p>{todos.length}</p>
        {data.map((todo) => {
          if (nomeColonna === "allTodos") return <Card data={todo} />;
          if (nomeColonna === "completedTodos") {
            if (todo.completed === true) return <Card data={todo} />;
          }
          if (nomeColonna === "notCompletedTodos") {
            if (todo.completed === false) return <Card data={todo} />;
          }
        })}
      </div>
    </>
  );
};

export default ProductList;
