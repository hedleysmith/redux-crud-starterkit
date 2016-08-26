import React from 'react';
import { Link } from 'react-router';
import styles from './Topnav.css';

/**
 * Topnav.
 * This component displays the main navigation of the site.
 */
const Topnav = () => (
  <nav className={styles.wrapper}>
    <ul className={styles.testt353}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="items">Item List</Link></li>
    </ul>
  </nav>
);

export default Topnav;
