import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './i18n';

import './Styles/global.css'
import Home from './pages/Home';
import Produto from './pages/Produtos';
import Assistencia from './pages/Assistencia';
import Sobre from './pages/Sobre'
import Contato from './pages/Contato';
import Catalogos from './pages/Catalogos';
import Categoria from './pages/Categoria';
import Categorias from './pages/Categorias';
import ProdutoCompras from './pages/ProdutoCompra';
import ProdutoLogistico from './pages/ProdutoLogistas';
import ProdutoDetalhes from "./pages/ProdutoDetalhes"
import CategoriasDeProdutos from "./pages/CategoriasDeProdutos"
import Login from './pages/Login'
import Produtos from './pages/Produtos'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Produto",
    element: <Produto />,
  },
  {
    path: "/Assistencia",
    element: <Assistencia />,
  },
  {
    path: "/Sobre",
    element: <Sobre />,
  },
  {
    path: "/Contato",
    element: <Contato />,
  },
  {
    path: "/Catalogos",
    element: <Catalogos />,
  },
  {
    path: "/Categoria",
    element: <Categoria />,
  },
  {
    path: "/Categoria/CategoriasDeProdutos",
    element: <CategoriasDeProdutos />,
  },
  {
    path: "/Categoria/Categorias",
    element: <Categorias />,
  },
  {
    path: "/Produtos",
    element: <Produtos />,
  },
  {
    path: "/ProdutoLogistico/:id",
    element: <ProdutoLogistico />,
  },
  {
    path: "/ProdutoDetalhes/:id",
    element: <ProdutoDetalhes />,
  },
  {
    path: "/ProdutoCompra/:id",
    element: <ProdutoCompras />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)