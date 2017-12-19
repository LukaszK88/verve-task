import React from 'react';
import './MenuSubChildItem.css';

const MenuSubChildItem = ({
  subChildMenuItem,
  handleMenuSelect,
}) => (
  <div className="subChildDropdown">
    <div
      onClick={() => handleMenuSelect(subChildMenuItem.content)}
      className="subChildMenuItem"
    >
      {subChildMenuItem.label}
    </div>
  </div>
);

export default MenuSubChildItem;
