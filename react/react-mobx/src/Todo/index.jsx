import React from "react";
import "./index.css";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";

const Todo = () => {
  const { todoStore } = useStore();
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
          onKeyUp={(e) => {
            if (e.key === "Enter") todoStore.addItem(e.target.value);
          }}
        />
      </header>

      <section className="main">
        {/* 全选 */}
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={todoStore.isAllChecked}
          onChange={(e) => todoStore.toggleAll(e.target.checked)}
        />
        <label htmlFor="toggle-all"></label>

        <ul className="todo-list">
          {todoStore.list.map((item) => (
            <li key={item.id} className={item.isDone ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.isDone}
                  onChange={() => todoStore.showItem(item.id)}
                />
                <label>{item.name}</label>
                <button
                  className="destroy"
                  onClick={() => {
                    todoStore.handleDele(item.id);
                  }}
                ></button>
              </div>
              <input
                className="edit"
                defaultValue={item.name}
                onBlur={(e) => todoStore.editItem(item.id, e.target.value)}
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default observer(Todo);
