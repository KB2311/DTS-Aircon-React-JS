import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import Home from './pages/home/Home';
import ErrorPage from './pages/errorpage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
