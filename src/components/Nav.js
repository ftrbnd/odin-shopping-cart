import React, { useContext } from 'react';
import styles from '../styles/Nav.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../RouteSwitch';

const Nav = () => {
  const [cart] = useContext(CartContext);

  const cartLength = () => {
    let length = 0;
    for (const item of cart) {
      length += item.quantity;
    }
    return length;
  }

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
            <h4>Cart ({ cartLength() })</h4>
          </div>
        </Link>
      </nav>
    </div>
  )
};

export default Nav;
