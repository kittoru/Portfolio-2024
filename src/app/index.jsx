import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routing';

export const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};
