import { createContext, Dispatch, ReactNode, useMemo, useState } from 'react';
import { todos } from '../mock/Category.mock';

interface ITodoContext {
  categories: ITodoCategory[];
  setCategories: Dispatch<React.SetStateAction<ITodoCategory[]>>;
  currentCategory: string | null;
  setCurrentCategory: Dispatch<React.SetStateAction<string | null>>;
  categoryTodos: ITodoCategory | undefined;
}

const TodoContext = createContext<ITodoContext | null>(null);

const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Array<ITodoCategory>>(todos);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const categoryTodos = useMemo(() => {
    return categories.find((f) => f.id === currentCategory);
  }, [categories, currentCategory]);

  const values = useMemo(() => {
    return {
      categories: categories,
      setCategories: setCategories,
      currentCategory: currentCategory,
      setCurrentCategory: setCurrentCategory,
      categoryTodos: categoryTodos,
    };
  }, [categories, currentCategory, categoryTodos, setCategories, setCurrentCategory]);

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoContextProvider };
