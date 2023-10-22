import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {/* Agrega un botón para agregar al carrito */}
    </div>
  );
};

export default ProductDetail;
