import React, { useEffect } from "react";
import "./jquery.lightroom.css";
import "./bootstrap.min.css";
import "./Hero.css"

function Hero() {
  const images = [
    "hero/1.jpg",
    "hero/2.jpg",
    "hero/3.jpg",
    "hero/4.jpg",
    "hero/6.jpg",
    "hero/7.jpg",
    "hero/8.jpg",
    "hero/9.jpg",
    "hero/10.jpg",
    "hero/11.jpg",
  ];

  return (
    <div className="container">
      <h1 className="display-2 text-dark p-3">Responsive image gallery</h1>
      <div id="jLightroom" className="jlr">
        {images.map((image, index) => (
          <a href={image} data-lightbox="lb1" className="jlr_item" key={index}>
            <img src={image} className="jlr_img" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Hero;
