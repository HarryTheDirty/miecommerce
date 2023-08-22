import React from 'react';
//import "./App.css";
import funkoHP from './images/funkoHP.jpg';

function ImagenProducto() {
    return (
        <div className="ContenedorImagen">
            <img src={funkoHP} alt="Funko" className="imagen-producto"/>
        </div>
    )
};

export default ImagenProducto;
