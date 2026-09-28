import { useState } from 'react';

import { 
  Bell, 
  FlaskConical, 
  CircleUser 
} from 'lucide-react';

import './Navbar.css';


const Navbar = () => {
  const [currentTab, setCurrentTab] = useState('active');

  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
  };

  return (
    <nav className="drug-navbar">
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

      <div className="navbar-right">
        <div className="navbar-divider" />
        <button
          type="button"
          className="navbar-icon-btn"
          aria-label="Notifications"
        >
          <Bell size={20} strokeWidth={1.75} />
        </button>

        <button
          type="button"
          className="navbar-icon-btn"
          aria-label="Laboratory / Compounds"
        >
          <FlaskConical size={20} strokeWidth={1.75} />
        </button>

        <button
          type="button"
          className="navbar-icon-btn"
          aria-label="User Profile"
        >
          <CircleUser size={21} strokeWidth={1.75} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;