import { useState } from "react";
import InputLabel from "../molecules/InputLabel";
import ButtonIcon from "../molecules/ButtonIcon";

function Formulario({ onAdd, onClose }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task) {
      onAdd(task);
      setTask("");
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-green-500">
      <h2 className="mb-4 text-xl font-bold text-white">Agregar Nuevo Pendiente</h2>
      <InputLabel 
        text="Agrega un pendiente" 
        type="text" 
        placeholder="Hacer comida" 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />
      <div className="flex justify-between mt-4">
        <div className="flex items-center space-x-2">
          <ButtonIcon imge="add-list.png" onClick={handleAdd} className="px-4 py-2 font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700"/>
          <span className="text-white">Agregar</span>
        </div>
        <div className="flex items-center space-x-2">
          <ButtonIcon imge="Eliminar.png" onClick={onClose} className="px-4 py-2 font-bold text-white transition-all duration-300 bg-red-600 rounded-full hover:bg-red-700"/>
          <span className="text-white">Eliminar</span>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
