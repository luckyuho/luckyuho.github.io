import React, { useState } from 'react';
import TabNavigationMenu from './TabNavigationMenu';

function Menu() {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const tabItems = [
    { id: 'brief', label: 'Brief' },
    { id: 'detail', label: 'Detail' },
    // { id: 'settings', label: 'Settings' },
  ];

  return (
    <div className="container">
      <h1>My App</h1>
      <TabNavigationMenu
        items={tabItems}
        activeItem={activeTab}
        onItemClick={handleTabClick}
      />
      <div className="tab-content">
        <div
          className={`tab-pane fade ${activeTab === 'brief' ? 'show active' : ''}`}
          id="brief"
          role="tabpanel"
          aria-labelledby="#profile"
        >
          Profile content goes here
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'detail' ? 'show active' : ''}`}
          id="detail"
          role="tabpanel"
          aria-labelledby="#contact"
        >
          Messages content goes here
        </div>
        {/* <div
          className={`tab-pane fade ${activeTab === 'settings' ? 'show active' : ''}`}
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          Settings content goes here
        </div> */}
      </div>
    </div>
  );
}

export default Menu;
