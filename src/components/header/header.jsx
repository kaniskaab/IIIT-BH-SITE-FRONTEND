import React from 'react';
import Navbar from '../navbar/Navbar';
import classes from './header.module.css';

function Header() {
  return (
    <>
      {/* <div className={classes.topShadow} /> */}
      {/* <div className="bugFixerLegend h-[70vh] mt-[30vh] pointer-events-none"></div> */}
      <div className={classes.navBar}>
        <Navbar />
      </div>

      <div className={classes.img}></div>
    </>
  );
}

export default Header;
