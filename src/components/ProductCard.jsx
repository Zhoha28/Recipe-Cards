import React from 'react';

const ProductCard = ({ image, title, price, description, button }) => {
  return (
    <article className="product-card">
        <img className='product-image' src={image} alt={title} />
      <h2 className="product-title">{title}</h2>
      <div className="product-details">
        <p className="product-price">{price}</p>
        <p className="product-description">{description}</p>
      </div>
      <button className="product-button">{button}</button>
    </article>
  );
};

export default ProductCard;
