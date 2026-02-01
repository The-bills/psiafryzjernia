"use client"
import React, { useEffect, useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) setIsOpen(false);
  };

  return (
    <nav className="flex flex-col md:flex-row w-full sticky top-0 bg-bone1 items-center text-lg z-50">
      {/* Górny pasek z logo i hamburger */}
      <div className="flex w-full md:justify-between justify-start md:gap-0 gap-8 items-center p-4 md:p-0 md:bg-bone1 bg-brown1">
        <img src="/logo.svg" alt="logo" className="hidden md:block h-16 ml-8 flex-shrink-0" />
        <img src="logo_pl_200.png" alt="orly_groomingu" className="md:hidden h-10"/>
        <button
          className="md:hidden ml-auto transition-transform duration-150 active:scale-90"
          onClick={toggleMenu}
          style={{ color: "black" }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Menu mobile + tło rozwijane */}
      <div
  className={`
    w-full md:w-auto md:flex-1 overflow-hidden md:overflow-visible
    transition-[max-height,opacity] duration-300 ease-in-out
    ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
    md:max-h-none md:opacity-100
  `}
>
  <div className="bg-bone1 flex flex-col md:flex-row md:items-center md:gap-2 md:overflow-x-auto items-end p-4 md:p-0 text-graphite1 text-right gap-0 scrollbar-hide">
    {[
      { href: '#intro', label: 'Psia fryzjernia' },
      { href: '#about', label: 'O nas' },
      { href: '#offer', label: 'Oferta' },
      { href: '#pricing', label: 'Cennik' },
      { href: '#beforeVisit', label: 'Przed wizytą' },
      { href: '#gallery', label: 'Galeria' },
      { href: '#certificates', label: 'Certyfikaty' },
      { href: '#opinions', label: 'Opinie' },
      { href: '#contact', label: 'Kontakt' },
    ].map((item, i) => (
      <Element key={item.href} {...item} index={i} isOpen={isOpen} onClick={handleLinkClick} />
    ))}
  </div>
</div>

      <img src="logo_pl_200.png" alt="orly_groomingu" className="hidden md:block h-12 ml-8 mr-8 flex-shrink-0" />
    </nav>
  );
};

type ElementProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  index?: number;
  isOpen?: boolean;
};

const Element = ({ label, href, onClick, index = 0, isOpen = true }: ElementProps) => {
  const delay = index * 75;
  return (
    <a
      onClick={onClick}
      href={href}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        pl-3 pr-3 font-semibold rounded-md whitespace-nowrap
        transform transition-all duration-300
        ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}
        md:translate-y-0 md:opacity-100 md:transition-none
        active:bg-graphite1/10
      `}
    >
      {label}
    </a>
  );
};

export default Navbar;
