import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Portifolio from './Files/Pages/Portifolio';
import GitHubRepos from './Files/Pages/GitHubRepos';
import PaginaErro from './PaginaErro';

const ErroPage = () => {
  return(
    <div style={{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        flexDirection: 'column', 
        gap: 15, fontSize: '150%'
      }}>
      <h1>Erro: 404</h1>
      <hr />
      <p>Ixi parece que essa tela não existe</p>
    </div>
  )
}

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
