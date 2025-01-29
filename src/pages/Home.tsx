import Category from "../components/Category/Category.tsx";
import {todos} from '../mock/Category.mock.ts'
import {useMemo, useState} from "react";
import TodoList from "../components/TodoList/TodoList.tsx";

const Home = () => {
  const [categories, setCategories] = useState<Array<ITodoCategory>>(todos);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const categoryTodos = useMemo(() => {
    return categories.find((f) => f.id === currentCategory);
  }, [categories, currentCategory]);

  return (
    <div className="container d-flex flex-row gap-3 w-100 p-5">
      <div className="w-25">
        <Category data={categories} setCategories={setCategories} setCurrentCategory={setCurrentCategory}/>
      </div>
      <div className="w-75">
        <TodoList categoryTodos={categoryTodos}/>
      </div>
    </div>
  )
}

export default Home;
