import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">iLaundry</div>
      <nav>
        <ul className="nav-links">
            {/* <li><a href='#home'>Home</a></li> */}
          <li><a href="#services">Services</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href='#'>hi</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
