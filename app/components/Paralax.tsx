import React, { useEffect, useState } from 'react';

export const Paralax = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>('/lokalNew.JPG');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBackgroundImage('/lokal.jpeg');
      } else {
        setBackgroundImage('/lokalNew.JPG');
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        perspective: '10px',
        overflowY: 'scroll',
        overflowX: 'hidden',
        backgroundSize: window.innerWidth <= 768 ? '200%' : 'cover',
        backgroundPosition: window.innerWidth <= 768 ? 'center top' : 'center',
        zIndex: -1,
      }}
      className="h-96 bg-fixed object-fill justify-center items-center flex sm:bg-contain"
    >
    </div>
  );
};
