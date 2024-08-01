import { useState } from "react";
import Formulario from "./Formulario";
import BuscarentreTodolist from "../molecules/BuscarentreTodolist";
import Lista from "../atoms/Lista";
import Items from "../molecules/Items";
import Createbotton from "../molecules/Createbotton";

const defaultTodos = [];

function Todolist() {
  const [todos, setTodos] = useState(defaultTodos);
  const [newTodoText, setNewTodoText] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const completeTodo = (text) => {
    const newTodos = todos.map((todo) =>
      todo.text === text ? { ...todo, completed: true } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  return (
    <div className="max-w-xl p-6 mx-auto bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4 text-center">
        <p className="text-2xl font-bold">TODO LIST</p>
      </div>
      <BuscarentreTodolist
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />
      <Lista>
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(newTodoText.toLowerCase())
          )
          .map((todo) => (
            <Items
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
      </Lista>
      <div className="flex justify-center mt-4">
        <Createbotton onClick={() => setIsFormVisible(true)} className="px-4 py-2 font-bold text-white transition-all duration-300 bg-green-600 rounded-full hover:bg-green-700"/>
      </div>
      {isFormVisible && (
        <div className="mt-4">
          <Formulario onAdd={addTodo} onClose={() => setIsFormVisible(false)} />
        </div>
      )}
    </div>
  );
}

export default Todolist;
