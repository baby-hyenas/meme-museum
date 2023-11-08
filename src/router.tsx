import { PageLayout, MainPage, ResultPage } from './pages'
import { Navigate, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout/>,
      children: [
      {
        path: '/',
        element: <MainPage/>,
      },
      {
        path: '/result/*',
        element: <ResultPage/>,
      },
      {
        path: '/*',
        element: <Navigate to="/" />,
      },
    ],
  },
]);

export default router;