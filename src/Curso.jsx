import React from 'react';
import "./estilos.css";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

function Curso(props) {
    return (
        <div className='posicion'>
            <div className="card">
                <Card style={{ width: '18rem' }}>
                    <img
                        alt="Danza de Oruro"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2z2AzBt91LUFmXmMRFuc_XAkxbMn3lO6nw&s"
                    />
                    <CardBody>
                        <CardTitle tag="h5">DANZA DE ORURO</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">BOLIVIA</CardSubtitle>
                        <CardText>
                            La Diablada y la Morenada son dos de las danzas más emblemáticas y representativas del Carnaval de Oruro en Bolivia. Estas danzas, junto con otras muchas, forman parte de una festividad declarada Obra Maestra del Patrimonio Oral e Intangible de la Humanidad por la UNESCO.
                        </CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <img
                        alt="Danza de La Paz"
                        src="https://boliviamia.net/Images/ArticlePhotos/Gran_Poder_La_Paz_01.jpg"
                    />
                    <CardBody>
                        <CardTitle tag="h5">DANZA DE LA PAZ</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">BOLIVIA</CardSubtitle>
                        <CardText>
                            La "Danza de la Paz" en Bolivia es un término que puede referirse a varias expresiones culturales. Una de ellas son las "Danzas de la Paz Universal" (DUP), una práctica espiritual que promueve la paz a través del canto y la danza de frases sagradas de diversas religiones.
                        </CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <img
                        alt="Danza de Santa Cruz"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqt2hJ7N9hsdt5y-dfG-FwU3RccOnEj8vO6w&s"
                    />
                    <CardBody>
                        <CardTitle tag="h5">DANZA DE SANTA CRUZ</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">BOLIVIA</CardSubtitle>
                        <CardText>
                            Las danzas más emblemáticas de Santa Cruz, Bolivia, incluyen el Carnavalito, Taquirari, Chovena y Sarao. El Carnavalito es una danza muy alegre y festiva, mientras que el Taquirari es una danza ritual de origen indígena que se baila en la región de la Amazonia.
                        </CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Curso;
