import React from 'react';
import Navbar from '../navbar/Navbar';
import classes from './header.module.css';

function Header() {
  return (
    <div className={classes.navBar}>
      <Navbar />
    </div>
  );
}

export default Header;
