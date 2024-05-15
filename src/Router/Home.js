import React, {Fragment, useState, useEffect } from 'react';
import '../components/HomePage.css'; 

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["../../img/image-1.jpg","../../img/image-2.jpg","../../img/image-3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <Fragment>
      <div className="background-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        >
        </div>
      
      <div className="content-container">
        <h1>The other div content </h1>
        <p>More content...</p>
      </div>
      </div>
    
    </Fragment>
  );
};

export default Home;
