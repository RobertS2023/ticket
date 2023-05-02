import React, { useState, useEffect } from "react";
import Kelly1 from "../images/Kelly1.jpg";
import Kelly2 from "../images/Kelly2.jpg";
import Kelly3 from "../images/Kelly3.jpg";
import Kelly4 from "../images/Kelly4.JPG";
import Kelly5 from "../images/Kelly5.jpg";
import Kelly6 from "../images/Kelly6.JPG";
import Kelly7 from "../images/Kelly7.jpg";
import Kelly8 from "../images/Kelly8.JPG";
import Kelly9 from "../images/Kelly9.jpg";
import Kelly10 from "../images/Kelly10.jpg";
import Kelly11 from "../images/Kelly11.jpg";

function Montage() {
  const [images, setImages] = useState([
    Kelly1,
    Kelly2,
    Kelly3,
    Kelly4,
    Kelly5,
    Kelly6,
    Kelly7,
    Kelly8,
    Kelly9,
    Kelly10,
    Kelly11,
  ]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <section className="montage-section">
      <div className="montage-center">
        <div className="montage-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              onClick={() => handleImageClick(index)}
              className={currentImage === index ? "active" : ""}
            />
          ))}
        </div>
        <div className="montage-buttons">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={currentImage === index ? "active" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Montage;
