import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Product.module.css';

const Product = ({ name, description, imageUrl }) => {
  const schemaMarkup = {
    '@context': 'http://schema.org',
    '@type': 'Product',
    'name': name,
    'description': description,
    'image': imageUrl,
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <div className={`${styles.product}`}>
        <img src={imageUrl} className={styles['product-img']} alt={`${name} - ${description}`} />
        <p>❤️ Sign in or Create account</p>
      </div>
    </div>
  );
};

export default Product;
