// components/ProductDropdown.js
import React, { useState } from 'react';
import styles from './Product.module.css';

const ProductDropdown = ({ onCustomizationChange }) => {
  const [selectedCustomization, setSelectedCustomization] = useState('None');

  const handleCustomizationChange = (e) => {
    const customization = e.target.value;
    setSelectedCustomization(customization);
    onCustomizationChange(customization);
  };

  return (
    <div className={styles['customization-dropdown']}>
      <select
        id="global-customization"
        value={selectedCustomization}
        onChange={handleCustomizationChange}
      >
        <option value="None">Filter</option>
        <option value="Customization 1">Price High to Low</option>
        <option value="Customization 2">Price Low to High</option>
      </select>
    </div>
  );
};

export default ProductDropdown;
