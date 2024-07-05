import React from "react";
import './styles.css';

function Header() {
  return (
    <header>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>

        <nav>
          <li>Log in</li>
          <li>Sign in</li>
          <li>Qr Code</li>
          <li>Theme</li>
        </nav>
      </ul>
    </header>
  );
}

export default Header;
