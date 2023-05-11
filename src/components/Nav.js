import React from 'react';
import styles from '../styles/Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => (
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
    </nav>
  </div>
);

export default Nav;
