import { createContext, useState } from "react";

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      title: "learn react",
      isChecked: false
    },
  ],
});

export const TodoContextProvider = (props) => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "learn react",
      isChecked: false,
    },
    
  ]);

  const add = (newTodo) => {
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  };
  const remove = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const contextValue = {
    todo,
    add,
    remove,
    setTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};
