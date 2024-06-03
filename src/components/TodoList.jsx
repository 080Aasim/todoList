import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoList() {
  const { todo, add, remove, setTodo } = useContext(TodoContext);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todo.length + 1,
      title: input,
    };
    add(newTodo);
    setInput("");
  };

  const handleChecked = (id) => {
    const updatedTodos = todo.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setTodo(updatedTodos);
  };

  return (
    <div className="bg-gray-500 box-content">
      <div className="p-4 flex items-center">
        <input
          type="text"
          className="border-2 border-black mr-2 w-80 text-3xl"
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleAdd} className="bg-black text-white p-2 mr-4">
          Add Task
        </button>
      </div>
      <div>
        {todo.map((item) => (
          <div className="flex  mt-2 px-4 py-2">
            <div className="mr-2">
              <h3
                key={item.id}
                className={` uppercase font-medium text-3xl bg-white w-full box-border break-all px-2  ${
                  item.isChecked ? "bg-red-500 line-through" : "bg-white"
                }`}
              >
                {item.title}
              </h3>
            </div>
            <button
              onClick={() => remove(item.id)}
              className="bg-black text-white px-2"
            >
              Remove Task
            </button>
            <input
              type="checkbox"
              className="w-8 ml-4"
              checked={item.isChecked}
              onChange={() => handleChecked(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
