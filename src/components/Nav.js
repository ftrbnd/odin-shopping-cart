import React from 'react';
import styles from '../styles/Nav.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Nav = () => {
  const cart = useCart();

  return (
    <div className={styles.Nav}>
      <nav>
        <Link to='/'>
          <h3>MODE</h3>
        </Link>
        <ul className={styles.links}>
          <Link to='/shop'>
            <li>Shop</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
        </ul>
        <Link to='/cart'>
          <div className={styles.cart}>
            <h4>Cart ({ cart.length })</h4>
          </div>
        </Link>
      </nav>
    </div>
  )
};

export default Nav;
