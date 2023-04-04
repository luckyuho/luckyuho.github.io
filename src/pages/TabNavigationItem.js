import React from 'react';

function TabNavigationItem({ id, label, active, onClick }) {
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${active ? 'active' : ''}`}
        id={`${id}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#${id}`}
        type="button"
        role="tab"
        aria-controls={id}
        aria-selected={active}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  );
}

export default TabNavigationItem;
