import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Principal from './Principal.jsx';
import Menu from './Menu.jsx';
import Inicio from './Inicio.jsx';
import Card from './Card.jsx';
import Curso from './Curso.jsx';
import Pie from './Pie.jsx';
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Principal />

    <Menu />
    <Inicio />
    <Card />
    <Pie />


  </BrowserRouter>,
)
