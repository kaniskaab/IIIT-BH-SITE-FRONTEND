import React, { useEffect, useRef, useState } from 'react';
import './Accordion.css';
import Chevron from './chevron.svg';

export default function Accordion({ head, para }) {
  const [toggle, setToggle] = useState(true);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  console.log(toggle);
  return (
    <div className="accordion">
      <button onClick={toggleState} className="accordion-visible">
        <span>{head}</span>
        <img className={toggle && 'active'} src={Chevron} />
      </button>

      <div
        className={toggle ? 'accordion-toggle animated' : 'accordion-toggle'}
        style={{ height: toggle ? `${heightEl}` : '0px' }}
        ref={refHeight}
      >
        <p
          aria-hidden={toggle ? 'true' : 'false'}
          className="md:text-base text-sm"
        >
          {para}
        </p>
      </div>
    </div>
  );
}
