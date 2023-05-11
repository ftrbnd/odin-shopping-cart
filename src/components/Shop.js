import React, { useEffect, useState } from 'react';
import styles from '../styles/Shop.module.css';
import Cart from "./Cart";
import storeProducts from '../assets/products';
import Product from './Product';

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(storeProducts);
  }, []);
  
  return (
    <div className={styles.Shop}>
      <Cart items={cart} />
      {
        products.map((p) => {
          return <Product
            name={p.name}
            price={p.price}
            image={p.image}
            key={p.id}
            cart={cart}
            onAddProduct={(product) => setCart([...cart, product])} />
        })
      }
    </div>
  )
};

export default Shop;