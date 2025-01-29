import {CiCirclePlus} from "react-icons/ci";
import TodoTable from './TodoTable.tsx';
import {Dispatch, FormEvent, SetStateAction, useCallback, useRef} from "react";

export interface ITodoList {
  categoryTodos: ITodoCategory | null | undefined
  setCategories: Dispatch<SetStateAction<ITodoCategory[]>>
}

const TodoList = ({categoryTodos, setCategories}: ITodoList) => {
  const formRef = useRef<HTMLFormElement>(null);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = useCallback((e:  FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (categoryTodos === null) return;
    if (categoryTodos === undefined) return;
    if (todoInputRef.current === null) return;
    if (todoInputRef.current.value === null) return;

    const title = todoInputRef.current.value;
    if (title === "") return;

    const addTodo = (prev: Array<ITodoCategory>): Array<ITodoCategory> => {
      const currentCat = prev.find((c) => c.id === categoryTodos.id);
      if (currentCat === undefined) return prev;

      currentCat.todo.push({
        title,
        id: new Date().getTime().toString(),
        due: new Date(),
        completed: false,
      });

      const filteredCats = prev.filter((c) => c.category !== categoryTodos.category);
      return [currentCat, ...filteredCats];
    }

    setCategories(addTodo);
    formRef.current?.reset();
  }, [categoryTodos, setCategories]);

  if (categoryTodos === null) return;
  if (categoryTodos === undefined) return;

  return (
    <div className="container w-100">
      <h2 className="display-5 text-primary">{categoryTodos.category}</h2>
      <div className="row mb-5">
        <form ref={formRef} onSubmit={(e) => handleFormSubmit(e)}>
          <div className="input-group">
            <input ref={todoInputRef} className="form-control" type='text' id='title' name='title' placeholder="Todo title"/>
            <button className="btn btn-primary" type="submit"><CiCirclePlus/></button>
          </div>
        </form>
      </div>
      <TodoTable categoryTodos={categoryTodos} />
    </div>
  )
}

export default TodoList;
