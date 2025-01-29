/// <reference types="vite/client" />

interface ITodo {
  id: string;
  title: string;
  due: Date;
  completed: boolean
}

interface ITodoCategory {
  id: string;
  category: string;
  todo: Array<ITodo>;
}
