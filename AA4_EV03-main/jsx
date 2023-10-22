import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            {/* Agrega un botón para ver detalles del producto */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
