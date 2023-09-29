// ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ productsData }) => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetail;
