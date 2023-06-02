import React from 'react';
import '../style/index.css';

function Header() {
  return (
    <header>
      <h1>Museum Art Deco</h1>
      <nav>
        <ul>
          <li><a href="#">Exhibitions</a></li>
          <li><a href="#">Activities</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Interactive</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;