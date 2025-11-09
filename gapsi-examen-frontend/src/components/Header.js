import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <img
          src="https://www.gapsi.com.mx/wp-content/uploads/2020/07/logo-gapsi.png"
          alt="Gapsi logo"
          className="header-logo"
        />
        <h1 className="header-title">e-Commerce Gapsi</h1>
      </div>
    </header>
  );
}

export default Header;
