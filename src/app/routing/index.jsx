import { createHashRouter } from "react-router-dom";
import { MainPage } from "../../pages";
import { Education, Skills, Work } from "../../shared";



export const router = createHashRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/',
        element: <Skills/>,
      },
      {
        path: '/experience',
        element: <Work/>,
      },
      {
        path: '/education',
        element: <Education/>,
      },
    ],
  },
]);