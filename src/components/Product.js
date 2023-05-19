import React, { useContext, useEffect, useState } from 'react';
import styles from '../styles/Product.module.css';
import { useMatch } from 'react-router-dom';
import storeProducts from '../assets/products';
import { CartContext } from '../RouteSwitch';

const Product = () => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    image: '',
    id: -1
  });
  const productId = parseInt(useMatch('/shop/:productId').params.productId);

  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    for (const prod of storeProducts) {
      if (prod.id === productId) {
        setProduct(prod);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }

  const decreaseQty = () => {
    setQuantity(prevQty => prevQty - 1);
  };

  const increaseQty = () => {
    setQuantity(prevQty => prevQty + 1);
  };

  const addToCart = (e) => {
    e.preventDefault();

    if (quantity > 0) {
      const existingItem = cart.find(item => item.id === product.id);
      if (!existingItem) return setCart(prevCart => prevCart.concat({...product, quantity}));

      const oldCart = [...cart];
      
      oldCart.splice(oldCart.indexOf(existingItem), 1);
      oldCart.push({
          name: existingItem.name,
          price: existingItem.price,
          image: existingItem.image,
          id: existingItem.id,
          quantity: existingItem.quantity + quantity,
      });

      setCart(oldCart);
    }

    setQuantity(0);
  }

  return (
    <div className={styles.Product}>
      <h1 className={styles.header}>{product.name}</h1>
      <img src={product.image} alt={`${product.name}`} className={styles.shopImg} />
      <p className={styles.price}>{ `$${product.price}` }</p>
      <form onSubmit={addToCart} className={styles.form}>
        <label htmlFor='qty'>Quantity:</label>
        <div className={styles.quantity}>
          <button type='button' onClick={decreaseQty}>-</button>
          <input id='qty' type='number' value={quantity} min={0} onChange={handleQuantityChange} />
          <button type='button' onClick={increaseQty}>+</button>
        </div>
        <button type='submit' className={styles.submit}>Add to Cart</button>
      </form>
    </div>
  )
};

export default Product;
