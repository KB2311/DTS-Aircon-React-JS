import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DashboardLayout from './layout';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
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
