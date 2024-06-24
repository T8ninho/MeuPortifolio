import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Portifolio from './Files/Pages/Portifolio';
import GitHubRepos from './Files/Pages/GitHubRepos';
import PaginaErro from './PaginaErro';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portifolio />,
    errorElement: <PaginaErro />,
  },
  {
    path: "/github",
    element: <GitHubRepos />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
