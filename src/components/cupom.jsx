import React, { useState, useEffect } from 'react';

const Cupom = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="cupom">
      <img className="cupom-image" src={images[currentIndex]} alt="Cupom" />
      <button onClick={prevImage} className="prev-button">&#10094;</button>
      <button onClick={nextImage} className="next-button">&#10095;
      </button>
    </div>
  );
};

export default Cupom;
