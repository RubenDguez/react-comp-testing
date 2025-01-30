import { useCallback, useContext } from 'react';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { GiGearHammer } from 'react-icons/gi';
import { TodoContext } from '../../context/TodoContext';

const TodoTable = ({ categoryTodos }: { categoryTodos: ITodoCategory }) => {
  const todo = useContext(TodoContext)!;

  const toggleTodoCompletion = useCallback(
    (id: string, completed: boolean) => {
      const completeTodo = (prev: Array<ITodoCategory>): Array<ITodoCategory> => {
        const newTodoCat: Array<ITodoCategory> = [];

        for (const t of prev) {
          if (t.id === todo.currentCategory) {
            for (const td of t.todo) {
              if (td.id === id) {
                td.completed = !completed;
              }
            }
            newTodoCat.push(t);
            continue;
          }
          newTodoCat.push(t);
        }

        return newTodoCat;
      };

      todo.setCategories(completeTodo);
    },
    [todo],
  );

  const handleRemoveTodo = useCallback(
    (id: string) => {
      const removeTodo = (prev: Array<ITodoCategory>): Array<ITodoCategory> => {
        const newTodoCat: Array<ITodoCategory> = [];

        for (const t of prev) {
          if (t.id === todo.currentCategory) {
            t.todo = t.todo.filter((f) => f.id !== id);
          }

          newTodoCat.push(t);
        }

        return newTodoCat;
      };

      todo.setCategories(removeTodo);
    },
    [todo],
  );

  if (categoryTodos === null || categoryTodos === undefined) return;

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="w-50" scope="col">
              Title
            </th>
            <th className="w-25" scope="col">
              Due-Date
            </th>
            <th className="auto" scope="col">
              Completed
            </th>
            <th className="text-center w-25" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {categoryTodos.todo.map((todo, index) => (
            <tr key={todo.title + index.toString()}>
              <td scope="row">
                <p>{todo.title}</p>
              </td>
              <td>{todo.due.toLocaleDateString()}</td>
              <td className="text-center">
                <p className={todo.completed ? 'h4 text-success' : 'h4 text-warning'}>{todo.completed ? <IoCheckmarkDoneCircleOutline /> : <GiGearHammer />}</p>
              </td>
              <td className="d-flex flex-row gap-2">
                <button onClick={() => toggleTodoCompletion(todo.id, todo.completed)} className={todo.completed ? 'btn btn-sm btn-info w-100' : 'btn btn-sm btn-success w-100'}>
                  {todo.completed ? 'Back Todo' : 'Complete'}
                </button>
                <button onClick={() => handleRemoveTodo(todo.id)} className="btn btn-sm btn-danger w-100">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
