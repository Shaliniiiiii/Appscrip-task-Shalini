// components/Description.js
import React from 'react';
import styles from './Product.module.css';


const Description = () => {
  return (
    <section className={styles.description}>
      <h2 className={styles.heading}>Welcome to Our Shopping Website</h2>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis justo et dapibus
        sagittis. Phasellus efficitur scelerisque justo, nec venenatis mi imperdiet at. Proin vel
        efficitur tellus. In hac habitasse platea dictumst.
      </p>
    </section>
  );
};

export default Description;
