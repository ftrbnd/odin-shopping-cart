import React from 'react';
import styles from '../styles/About.module.css';

const About = () => (
  <div className={styles.About}>
    <div className={styles.info}>
      <h1>About Us</h1>
      <h4>Order Changes</h4>
      <p>Board configurations cannot be changed after an order is placed.</p>
      <p>Extras may be added to an order at any time. Please submit a support ticket listing the items that you would like added to your order and we will send you a separate invoice for the additional items. Your original order will be edited so that the items ship together. Depending on the size and weight of the items added, an additional shipping surchange may be added. For small items like plates+PCBs+switches it's unlikely that a shipping adjustment will be needed.</p>
      <h4>Shipping Address Update</h4>
      <p>Shipping address may be updated any time.</p>
      <h4>Order Cancellation</h4>
      <p>Orders can be cancelled at any time, however a 3% cancellation fee will be assessed and deducted from your refund. (Shopify does not refund us their fees for any cancelled orders).</p>
    </div>
    <div className={styles.newsletter}>
      <h2>Stay up to date.</h2>
      <p>Join our newsletter or follow us on Instagram for the latest information.</p>
      <input type='email' placeholder='Email Address' />
    </div>
  </div>
);

export default About;
