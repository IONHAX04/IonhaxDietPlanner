// ShoppingCart.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = ({ productsData }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="product-list">
        {productsData.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`}>
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
