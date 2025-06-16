import React, { useState } from 'react';
import "./estilos.css";
import imagen1 from '../public/componentes/imagen1.gif';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Card() {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="contenido">
            <div className="card" style={{ width: '18rem' }}>
                <img
                    alt="Sample"
                    src="https://i.pinimg.com/236x/ef/43/ff/ef43ffbc8e3ac9a2932d3549b2240a63.jpg"
                    className="card-image"
                />
                <div className="card-body">
                    <h5 className="card-title">COCHABAMBA</h5>
                    <h6 className="card-subtitle mb-2 text-muted">BOLIVIA</h6>
                    <p className="card-text">
                        Danza típica y popular de Bolivia. La cueca cochabambina se diferencia del resto de las cuecas en Bolivia por su ágil y rápido zapateo. El atuendo femenino consiste en una pollera ligera hasta las rodillas y un alto sombrero blanco, y la vestimenta masculina se caracteriza por llevar un chaleco y sombrero negro. La cueca en nuestro país es un elemento cultural muy arraigado, es parte de nuestra identidad, por este motivo se la declaro como Patrimonio Cultural.
                    </p>
                    <Button color="danger" onClick={toggle}>
                        PRECIO
                    </Button>

                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>PRECIO DEL CURSO</ModalHeader>
                        <ModalBody>
                            <img src={imagen1} alt="Descripción del GIF" style={{ width: '100%' }} />
                            <h1>PRECIO DEL CURSO: 250 BS MENSUALES</h1>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>
                                OK
                            </Button>
                            <Button color="secondary" onClick={toggle}>
                                Cancelar
                            </Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img
                    alt="Sample"
                    src="https://i.pinimg.com/564x/b6/5a/fe/b65afe9ecdbbe7dee396165776e5dcba.jpg"
                    className="card-image"
                />
                <div className="card-body " style={{ backgroundColor: 'yellow' }}>
                    <h5 className="card-title">ORURO</h5>
                    <h6 className="card-subtitle mb-2 text-muted">BOLIVIA</h6>
                    <p className="card-text">
                        La Diablada, una danza emblemática del Carnaval de Oruro, es una representación teatralizada de la lucha entre el bien y el mal, con elementos de la fe católica y rituales andinos. Los bailarines, vestidos con trajes de diablos y máscaras elaboradas, personifican la victoria del Arcángel San Miguel sobre Lucifer y los pecados capitales.
                    </p>
                    <Button color="danger" onClick={toggle}>
                        PRECIO
                    </Button>

                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>PRECIO DEL CURSO</ModalHeader>
                        <ModalBody>
                            <img src={imagen1} alt="Descripción del GIF" style={{ width: '100%' }} />
                            <h1>PRECIO DEL CURSO: 250 BS MENSUALES</h1>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>
                                OK
                            </Button>
                            <Button color="secondary" onClick={toggle}>
                                Cancelar
                            </Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img
                    alt="Sample"
                    src="https://i.pinimg.com/564x/df/bd/f7/dfbdf7c55d5a4c9d9cc90fdb56e07b20.jpg"
                    className="card-image"
                />
                <div className="card-body" style={{ backgroundColor: 'green' }}>
                    <h5 className="card-title">LA PAZ</h5>
                    <h6 className="card-subtitle mb-2 text-muted">BOLIVIA</h6>
                    <p className="card-text">
                        La danza de caporales es una expresión artística dancístico-musical originada en la región de Los Yungas de La Paz, Bolivia, a fines de la década de los sesenta. Se inspira en el personaje del caporal de la saya, que es una danza tradicional afroboliviana. Los caporales se caracteriza por su ritmo enérgico y vestimenta distintiva, y se ha convertido en una de las danzas más populares de Bolivia, especialmente entre los jóvenes.
                    </p>
                    <Button color="danger" onClick={toggle}>
                        PRECIO
                    </Button>

                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>PRECIO DEL CURSO</ModalHeader>
                        <ModalBody>
                            <img src={imagen1} alt="Descripción del GIF" style={{ width: '100%' }} />
                            <h1>PRECIO DEL CURSO: 250 BS MENSUALES</h1>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>
                                OK
                            </Button>
                            <Button color="secondary" onClick={toggle}>
                                Cancelar
                            </Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
        </div>
    );
}

export default Card;
