import React, { useEffect, useState } from 'react';
import styles from '../styles/Shop.module.css';
import Cart from "./Cart";
import storeProducts from '../assets/products';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(storeProducts);
  }, []);
  
  return (
    <div className={styles.Shop}>
      <Cart items={cart} />
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