import { useContext } from 'react';
import Category from '../components/Category/Category.tsx';
import TodoList from '../components/TodoList/TodoList.tsx';
import { TodoContext } from '../context/TodoContext.tsx';

const Home = () => {
  const todo = useContext(TodoContext)!;

  return (
      <div className="container d-flex flex-row gap-5 w-100 p-5 bg-light vh-100">
        <div className="w-25">
          <Category data={todo.categories} setCategories={todo.setCategories} setCurrentCategory={todo.setCurrentCategory} />
        </div>
        <div className="w-75">
          <TodoList setCategories={todo.setCategories} categoryTodos={todo.categoryTodos} />
        </div>
      </div>
  );
};

export default Home;
