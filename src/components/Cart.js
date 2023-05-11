import React, { useEffect, useState } from 'react';
import styles from '../styles/Cart.module.css';

const Cart = ({ items }) => {
  const [total, setTotal] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    for (const item of items) {
      setTotal(total + (item.price * item.quantity));
      setSize(size + parseInt(item.quantity));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <div className={styles.Cart}>
      <h4>Cart ({ size })</h4>
      <p>Total: ${ total }</p>
    </div>
  )
};

export default Cart;
