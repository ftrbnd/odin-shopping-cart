import React, { useEffect, useState } from 'react';
import styles from '../styles/Shop.module.css';
import Cart from "./Cart";
import storeProducts from '../assets/products';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [size, setSize] = useState(0);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(storeProducts);
    // compute size + total
  }, []);
  
  return (
    <div className={styles.Shop}>
      {/* <Cart items={cart} /> */}
      <div className={styles.cart}>
        <h4>Cart ({ size })</h4>
        <p>Total: ${total}</p>
      </div>
      <div className={styles.products}>
        {
        products.map((p) => {
          return <div key={p.id} className={styles.product}>
            <Link to={`/shop/${p.id}`}>
              <h4>{p.name}</h4>
              <img src={p.image} alt={`${p.name}`} className={styles.shopImg} />
              <p>{ `$${p.price}` }</p>
            </Link>
          </div>
        })
      }
      </div>
    </div>
  )
};

export default Shop;