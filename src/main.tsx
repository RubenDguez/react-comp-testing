import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoContextProvider } from './context/TodoContext.tsx';

createRoot(document.getElementById('root')!).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>,
);
