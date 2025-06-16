import React, { useState } from 'react';
import "./estilos.css";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

function Inicio(props) {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div className='foto1'>
            <Accordion flush open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">DANZA DE LA PAZ</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVW-Ljy5yK1jX1D9E8XT3QXDM_3IftdF7Og&s" alt="" />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">DANZA DE COCHA</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReoD3xzyvb4SAEfJitLL7c9-eyZKX2GD9j_A&s" alt="" />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">DANZA DE ORURO</AccordionHeader>
                    <AccordionBody accordionId="3">
                        <img src="https://www.ibolivia.org/wp-content/uploads/2019/08/carnaval-de-oruro.jpg" alt="" />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="4">DANZA DE SANTA CRUZ</AccordionHeader>
                    <AccordionBody accordionId="4">
                        <img src="https://pxcdn.reduno.com.bo/reduno/092018/1544511391739.webp?extw=png&cw=600&ch=365" alt="" />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="5">DANZA DE SUCRE</AccordionHeader>
                    <AccordionBody accordionId="5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVxWvufAoO38rlaBqvvIHMtNdeuH0btgqXQ&ss" alt="" />
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>

    );
}

export default Inicio;