import React, { useState } from 'react';
import Inicio from './Inicio';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavLink,
} from 'reactstrap';

function Menu(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink href="/" >
                        INICIO
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="pag2">OFERTAS DE CURSO</NavLink>
                </NavItem>

            </Nav>
            <div className="Contenido">
                <Routes>
                    <Route path="" element={Inicio}></Route>

                </Routes>
            </div>
        </div>
    );
}

export default Menu;