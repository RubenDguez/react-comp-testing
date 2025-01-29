const TodoTable = ({categoryTodos}: { categoryTodos: ITodoCategory }) => {
  if (categoryTodos === null || categoryTodos === undefined) return;

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
        <tr>
          <th className="w-50" scope="col">Title</th>
          <th className="w-25" scope="col">Due-Date</th>
          <th className="auto" scope="col">Completed</th>
          <th className="text-center w-25" scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {
          categoryTodos.todo.map((todo, index) => (
            <tr key={todo.title + index.toString()}>
              <td scope="row"><p>{todo.title}</p></td>
              <td>{todo.due.toLocaleDateString()}</td>
              <td className="text-center"><p>{todo.completed ? '✅' : '🤷'}</p></td>
              <td className="d-flex flex-row gap-2">
                <button className="btn btn-sm btn-success w-100">Complete</button>
                <button className="btn btn-sm btn-danger w-100">Delete</button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

export default TodoTable;
