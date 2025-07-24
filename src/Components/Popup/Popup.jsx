// src/components/Popup.js
import React, { useEffect, useState } from 'react';
import panels from '../../Assets/Epic-chemical/logo.png'
import { FaChevronDown } from "react-icons/fa";
import './Popup.css'

const Popup = ({ closePopup, texts, speed, pause }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isTyping) {
      if (index < texts[textIndex].length) {
        timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev + texts[textIndex][index]);
          setIndex((prev) => prev + 1);
        }, speed);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
          setIsTyping(false);
        }, pause);
      }
    } else if (isDeleting) {
      if (index > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }, speed);
      } else {
        setIsDeleting(false);
        setIsTyping(true);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [index, isTyping, isDeleting, texts, textIndex, speed, pause]);


  return (
    <div className="popup" id="welcome-popup">
      <div className="popup-inner">
        <img src={panels} className='panels' />
        <h1>Welcome To Epic Chemicals!</h1>
        <p>We Being {displayedText}
          {(isTyping || isDeleting) && <span className="typing-cursor">|</span>}</p>
        <div className='arrow-container animated fadeInDown' onClick={closePopup}>
          <div className='arrow-2'>
            <i className='fa fa-angle-down'><FaChevronDown />
            </i>
          </div>
          <div className='arrow-1 animated infinite zoomIn'></div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
