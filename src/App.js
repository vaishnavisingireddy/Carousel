import React, { useState } from "react";
import "./App.css";

const images = [
  "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
  "https://images.unsplash.com/photo-1528214968864-8dd00782fa9e?q=80&w=3019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1499570023676-b0a761678e07?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className="carousel-control prev" onClick={goToPrevious}>
        ❮
      </button>
      <button className="carousel-control next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
}

export default App;