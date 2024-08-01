
import Buttons from "../atoms/Buttons"
function Items({ text, completed, onComplete, onDelete }) {
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow-md">
      <li className="flex items-center justify-between">
        <span className={completed ? 'text-green-500' : 'text-red-500'}>
          {completed ? 'COMPLETADO' : 'NO COMPLETADO'}
        </span>
        <p className="ml-4">{text}</p>
        <div className="flex space-x-2">
          <Buttons onClick={onComplete} className="px-4 py-2 text-white bg-blue-500 rounded">Completar</Buttons>
          <Buttons onClick={onDelete} className="px-4 py-2 text-white bg-red-500 rounded">Eliminar</Buttons>
        </div>
      </li>
    </div>
  )
}

export default Items
