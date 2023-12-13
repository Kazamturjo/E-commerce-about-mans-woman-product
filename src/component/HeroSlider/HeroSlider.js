// HeroSlider.js
import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Hero.css';

const HeroSlider = ({ slider }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slider.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slider.length) % slider.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % slider.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [current, slider.length]);

  return (
    <div className='slider-container'>
      {/* Left and Right arrows */}
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

      {/* Slider */}
      <div className='slider' style={{ transform: `translateX(-${current * 100}%)` }}>
        {slider.map((slide, index) => (
          <img
            src={slide.src}
            alt={slide.alt}
            key={index}
            className={index === current ? 'slide active' : 'slide'}
          />
        ))}
        
      </div>
      <p className='prag'> Personalized Fashion: Discover Your Signature Look!
                                   Best wishes......</p>
    </div>
  );
};

export default HeroSlider;
