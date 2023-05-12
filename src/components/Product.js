import React, { useEffect, useState } from 'react';
import styles from '../styles/Product.module.css';
import { useMatch } from 'react-router-dom';
import storeProducts from '../assets/products';

const Product = () => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    image: '',
    id: -1
  });
  const productId = parseInt(useMatch('/shop/:productId').params.productId);

  useEffect(() => {
    for (const prod of storeProducts) {
      if (prod.id === productId) {
        setProduct(prod);
      }
    }
  }, []);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }

  const decreaseQty = () => {
    setQuantity((prevQty) => prevQty - 1);
  };

  const increaseQty = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const updateCart = (e) => {
    e.preventDefault();

    // if (quantity > 0) {
    //   onAddProduct({
    //     name,
    //     image,
    //     price,
    //     quantity,
    //   });
    // }

    // setQuantity(0);
  }

  return (
    <div className={styles.Product}>
      <h1 className={styles.header}>{product.name}</h1>
      <img src={product.image} alt={`${product.name}`} className={styles.shopImg} />
      <p className={styles.price}>{ `$${product.price}` }</p>
      <form onSubmit={updateCart} className={styles.form}>
        <label htmlFor='qty'>Quantity:</label>
        <div className={styles.quantity}>
          <button onClick={decreaseQty}>-</button>
          <input id='qty' type='number' value={quantity} min={0} onChange={handleQuantityChange} />
          <button onClick={increaseQty}>+</button>
        </div>
        <button type='submit' className={styles.submit}>Add to Cart</button>
      </form>
    </div>
  )
};

export default Product;
