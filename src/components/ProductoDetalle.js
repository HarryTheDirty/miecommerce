import React, { useState } from "react";
import BotonComprar from './BotonComprar';
import ImagenProducto from './ImagenProducto';

const ProductoDetalle = () => {
  const [compraRealizada, setCompraRealizada] = useState(false);

  const handleCompra = () => {
    setCompraRealizada(true);
  };

  return (
    <div className="producto-detalle">
      <h2>FUNKO POP HARRY POTTER</h2>      
      <ImagenProducto></ImagenProducto>
      <p>El primer FUNKO POP que salió al mercado de la figura Harry Potter. 
        Todo un clásico, ideal si tienes que comprar regalos 
        a un fan de los libros de Harry Potter.</p>
      <p>Precio: $6.747</p>
      <p>SKU: POP2546</p>
      <p>Cantidad disponible: 10</p>
      {compraRealizada ? (
        <p>Gracias por su compra!!</p>
      ) : (
        <BotonComprar onClick={handleCompra}/>
      )}
    </div>
  );
};

export default ProductoDetalle;
