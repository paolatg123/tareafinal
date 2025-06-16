import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pie() {
    return (
        <footer className="bg-light text-center p-3 ">
            <div>
                <h5>Síguenos en redes sociales</h5>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                    Facebook
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
                    Twitter
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                    Instagram
                </a>

            </div>
            <div className="mt-2">
                &copy; {new Date().getFullYear()}  Todos los derechos reservados. PAOLA TANIA GUTIERREZ APAZA
            </div>
        </footer>
    );
}

export default Pie;
