import React from 'react';
import TabNavigationItem from './TabNavigationItem';

function TabNavigationMenu({ items, activeItem, onItemClick }) {
  return (
    <ul className="nav nav-tabs">
      {items.map((item) => (
        <TabNavigationItem
          key={item.id}
          id={item.id}
          label={item.label}
          active={item.id === activeItem}
          onClick={() => onItemClick(item.id)}
        />
      ))}
    </ul>
  );
}

export default TabNavigationMenu;
