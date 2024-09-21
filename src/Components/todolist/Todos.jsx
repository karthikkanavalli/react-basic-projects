import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [ input, setInput ] = useState("");

  const TodoHandler = () => {
    setTodos(
      [
        ...todos,
        {
          text: input,
          id: Math.floor(Math.random() * 1000),
        },
      ]
    );
    setInput("");
  };

  return (
    // <div className="flex items-center justify-center w-screen h-screen">
    //   <div className="flex flex-col align-middle bg-blue-400 h-80 rounded-m w-96 h-70 top-14 gap-14 text-slate-200">
    //     <div>
    //       <input
    //         type="text"
    //         value={input}
    //         placeholder="Add Todo"
    //         onChange={(e) => setInput(e.target.value)}
    //       />
    //       <button
    //         onClick={() => TodoHandler()}
    //         className="p-5 m-3 border-4 rounded-full shadow-xl hover:shadow-inner shadow-blue-500/50 border-slate-200"
    //       >
    //         Add Todo
    //       </button>
    //     </div>
    //     <ul className="flex flex-col align-middle ">
    //       {todos?.map(({ text, id }) => {
    //           return (<li key={id} className="p-5 text-slate-200"><h4>{text}</h4>
    //           <button className="m-3 border-4 rounded-full shadow-xl -5 hover:shadow-inner shadow-blue-500/50 border-slate-200" onClick={() => setTodos(todos.filter((todo) => todo.id !== id))}>X</button></li>);
    //       })}
    //     </ul>
    //   </div>
    // </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="flex flex-col items-center justify-between gap-8 p-6 bg-blue-500 shadow-lg w-96 rounded-xl text-slate-200">
        {/* Input and Button Section */}
        <div className="flex w-full gap-4">
          <input
            type="text"
            value={input}
            placeholder="Add Todo"
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-3 text-gray-700 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 bg-slate-50"
          />
          <button
            onClick={() => TodoHandler()}
            className="p-3 text-white transition-all duration-300 ease-in-out bg-blue-600 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700"
          >
            Add Todo
          </button>
        </div>

        {/* Todo List Section */}
        <ul className="flex flex-col w-full gap-4">
          {todos?.map(({ text, id }) => (
            <li
              key={id}
              className="flex items-center justify-between p-4 text-white bg-blue-600 rounded-md shadow-lg"
            >
              <h4 >{text}</h4>
              <button
                className="w-10 h-10 px-3 text-lg font-bold transition-all duration-300 ease-in-out bg-red-500 rounded-3xl hover:bg-red-600"
                onClick={() => setTodos(todos.filter((todo) => todo.id !== id))}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
