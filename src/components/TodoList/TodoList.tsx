import {CiCirclePlus} from "react-icons/ci";
import TodoTable from './TodoTable.tsx';

export interface ITodoList {
  categoryTodos: ITodoCategory | null | undefined
}

const TodoList = ({categoryTodos}: ITodoList) => {
  if (categoryTodos === null) return;
  if (categoryTodos === undefined) return;

  return (
    <div className="container w-100">
      <h2 className="display-5 text-primary">{categoryTodos.category}</h2>
      <div className="row mb-5">
        <form>
          <div className="input-group">
            <input className="form-control" type='text' id='title' name='title' placeholder="Todo title"/>
            <button className="btn btn-primary"><CiCirclePlus/></button>
          </div>
        </form>
      </div>
      <TodoTable categoryTodos={categoryTodos} />
    </div>
  )
}

export default TodoList;
