"use client"

import React, { useEffect, useState } from 'react';

export const Paralax = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>('/lokalNew.JPG');
    const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setBackgroundImage(mobile ? "/lokal.jpeg" : "/lokalNew.JPG");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.6);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

return (
    <div
      className="relative w-full h-[600px] overflow-hidden flex justify-center items-center"
      style={{
        perspective: "10px",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full will-change-transform transition-transform duration-100 ease-linear"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: isMobile ? "200%" : "cover",
          backgroundPosition: "center",
          transform: `translateY(${offsetY * 0.3}px) scale(1.1)`,
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default Paralax
