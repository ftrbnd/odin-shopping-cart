import React, { useState } from 'react';
import styles from '../styles/Product.module.css';

const Product = ({ name, image, price, onAddProduct}) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }

  const updateCart = (e) => {
    e.preventDefault();

    if (quantity > 0) {
      onAddProduct({
        name,
        image,
        price,
        quantity,
      });
    }

    setQuantity(0);
  }

  return (
    <div className={styles.Product}>
      <h4>{name}</h4>
      <img src={image} alt={`${name}`} />
      <p>{ `$${price}` }</p>
      <form onSubmit={updateCart}>
        <label>
          Quantity:
          <input type='number' value={quantity} min={0} onChange={handleQuantityChange} />
        </label>
        <button type='submit'>Add to Cart</button>
      </form>
    </div>
  )
};

export default Product;
