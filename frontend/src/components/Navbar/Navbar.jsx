import React, { useState } from 'react';
import { Bell, FlaskConical, CircleUser } from 'lucide-react';
import './Navbar.css';

/**
 * Drug Discovery Navbar Component using lucide-react icons
 * Plain JavaScript (React JSX) & Standard CSS
 */
export default function Navbar({
  activeTab = 'active',
  onTabChange,
  onNotificationClick,
  onFlaskClick,
  onProfileClick
}) {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <nav className="drug-navbar">
      {/* Left side tabs: Active Session / Past Sessions */}
      <div className="navbar-left">
        <button
          type="button"
          className={`navbar-tab ${currentTab === 'active' ? 'active' : ''}`}
          onClick={() => handleTabClick('active')}
        >
          <span>Active Session</span>
          {currentTab === 'active' && <div className="tab-underline" />}
        </button>

        <button
          type="button"
          className={`navbar-tab ${currentTab === 'past' ? 'active' : ''}`}
          onClick={() => handleTabClick('past')}
        >
          <span>Past Sessions</span>
          {currentTab === 'past' && <div className="tab-underline" />}
        </button>
      </div>

      {/* Right side icons with separator using lucide-react */}
      <div className="navbar-right">
        <div className="navbar-divider" />

        <button
          type="button"
          className="navbar-icon-btn"
          aria-label="Notifications"
          onClick={onNotificationClick}
        >
          <Bell size={20} strokeWidth={1.75} />
        </button>

        <button
          type="button"
          className="navbar-icon-btn"
          aria-label="Laboratory / Compounds"
          onClick={onFlaskClick}
        >
          <FlaskConical size={20} strokeWidth={1.75} />
        </button>

        <button
          type="button"
          className="navbar-icon-btn"
          aria-label="User Profile"
          onClick={onProfileClick}
        >
          <CircleUser size={21} strokeWidth={1.75} />
        </button>
      </div>
    </nav>
  );
}