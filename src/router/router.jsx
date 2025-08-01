import { createBrowserRouter } from 'react-router-dom';
import Root from '../routes/Root';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,  
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default router;
