import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import HomePage from './HomePage';
import Layout from './Layout';
import UserDetailPage from './UserDetailPage';
import UsersPage from './UsersPage';
import LoginPage from './LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      {
        path: 'users',
        element: <UsersPage />,
        children: [{ path: ':id', element: <UserDetailPage /> }],
      },
    ],
  },
]);

export default router;
