import React from 'react'
import "../App.css"
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Header = () => {
    // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Web-Developer", "Disciple of JS", "Mentor", "Learner"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='header-wrapper'>
        <div className="main-info">
            <h1>Web Development and website promotion </h1>
                <h3 className='typed-text'><span ref={el}></span></h3> 
        </div>
    </div>
  )
}

export default Header