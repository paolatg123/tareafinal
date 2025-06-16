import { Route, Routes } from "react-router-dom";
import Inicio from "./Inicio";
import Curso from "./Curso";
import "./estilos.css";
import boli from '../public/componentes/boli.gif'
function Principal(props) {
    return (
        <div>
            <div className="name">
                <h1>PAOLA TANIA GUTIERREZ APAZA</h1>
                <img src={boli} alt="Descripción del GIF" style={{ width: '100px' }} />
            </div>



        </div>
    );
}
export default Principal;