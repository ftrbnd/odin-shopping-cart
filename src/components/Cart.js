import React, { useEffect, useState } from 'react';
import styles from '../styles/Cart.module.css';
import { useCart, useCartRemove } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [total, setTotal] = useState(0);
  
  const cart = useCart();
  const removeFromCart = useCartRemove();

  useEffect(() => {
    for (const item of cart) {
      setTotal(total + (item.price * item.quantity));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const removeItem = (e, item) => {
    e.preventDefault();

    removeFromCart(item);
  };

  return (
    <div className={styles.Cart}>
      {cart.length > 0 ? (
        <>
          <h2>Your Cart</h2>
          <div className={styles.titles}>
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </div>
          <div className={styles.items}>
            {
              cart.map((item) => {
                return <div key={`${item.id}-${item.quantity}`} className={styles.item}>
                  <Link to={`/shop/${item.id}`}>
                    <div className={styles.itemView}>
                      <img src={item.image} alt={item.name} className={styles.itemImg} />
                      <p>{item.name}</p>
                    </div>
                  </Link>
                  <p>${item.price }</p>
                  <p>{item.quantity}</p>
                  <div className={styles.total}>
                    <p>{`$${item.price * item.quantity}`}</p>
                    <button type='button' onClick={(e) => removeItem(e, item)}>Remove</button>
                  </div>
                </div>
              })
            }
          </div>
          <div className={styles.subtotalRow}>
            <h4 className={styles.subtotal}>Subtotal: ${total}</h4>
          </div>
          <div className={styles.buttons}>
            <Link to='/shop' className={styles.continue}>
              <button type='button'>Continue Shopping</button>
            </Link>
            <button type='button' className={styles.checkout}>Check Out</button>
          </div>
        </>
      ) : (
        <>
          <h2>Your cart is empty.</h2>
          <Link to='/shop' className={styles.continue}>
            <button type='button'>Continue Shopping</button>
          </Link>
        </>
      )}
    </div>
  )
};

export default Cart;
