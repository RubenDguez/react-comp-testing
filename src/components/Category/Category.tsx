import {CiCirclePlus} from "react-icons/ci";
import {Dispatch, FormEvent, SetStateAction, useRef, useState} from "react";

export interface ICategory {
  data: Array<ITodoCategory>
  setCurrentCategory: Dispatch<SetStateAction<string | null>>
  setCategories: Dispatch<React.SetStateAction<ITodoCategory[]>>
}

const Category = ({data: todos, setCategories, setCurrentCategory}: ICategory) => {
  const formRef = useRef<HTMLFormElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);

  const [categoryError, setCategoryError] = useState('');

  const handleCategoryClick = (id: string) => {
    setCurrentCategory(id);
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validations
    if (categoryRef.current === null) return;
    if (categoryRef.current.value === '') {
      setCategoryError('The category is required');
      return;
    }

    setCategoryError('');

    const todoCat = todos.find((todo) => todo.category.toLowerCase() === categoryRef.current!.value.trim().toLowerCase());

    if (todoCat !== undefined) return;

    const newTodo: ITodoCategory = {
      id: new Date().getTime().toString(),
      category: categoryRef.current.value.trim(),
      todo: [],
    }

    setCategories((prev) => [...prev, newTodo]);
    setCurrentCategory(newTodo.id);
    formRef.current?.reset();
  }

  return (
    <div>
      <form ref={formRef} onSubmit={(e) => handleFormSubmit(e)}>
        <div>
          <div className="input-group">
            <input ref={categoryRef} id='category' name='category' type='text' className="form-control" placeholder="Category"/>
            <button type='submit' className="btn btn-primary"><CiCirclePlus/></button>
          </div>
          {categoryError && <p className="text-danger small">{categoryError}</p>}
        </div>
      </form>
      <div className="d-flex flex-column gap-2 mt-2">
        {
          todos.length > 0 && todos.map((todo) => (
            <button className="btn btn-secondary" key={todo.id} onClick={() => handleCategoryClick(todo.id)}>{todo.category}</button>
          ))
        }
      </div>
    </div>
  )
}

export default Category
