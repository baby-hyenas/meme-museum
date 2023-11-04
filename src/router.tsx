import { PageLayout, MainPage } from './pages'
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
        path: '/*',
        element: <Navigate to="/" />,
      },
    ],
  },
]);

export default router;