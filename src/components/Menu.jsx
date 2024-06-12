import React, { useState } from 'react';
import menuData from '../data';
import MenuItem from './MenuItem';

const Menu = () => {
  const [menuItems, setMenuItems] = useState(menuData);

  return (
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {menuItems.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
