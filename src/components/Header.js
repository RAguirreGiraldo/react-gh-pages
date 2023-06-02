import React from 'react';
import '../style/index.css';
import Navigation from './Navigation';
/*import Banner from './Banner';*/


function Header() {
  return (
    <header>
        <h1>Museum Art Deco</h1>
        <Navigation />
    </header>
  );
}

export default Header;