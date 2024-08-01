function BuscarentreTodolist({ value, onChange }) {
  return (
    <div>
      <input type="text" placeholder="Buscar tarea" value={value} onChange={onChange} />
    </div>
  );
}

export default BuscarentreTodolist;
