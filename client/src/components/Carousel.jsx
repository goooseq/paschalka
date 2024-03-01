// import React, { useState } from 'react';

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div>
//       <button onClick={handlePrevious}>Previous</button>
//       <img src={images[currentIndex]} alt="carousel" />
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// export default Carousel;