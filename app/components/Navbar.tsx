import React, { useEffect, useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

      const handleLinkClick = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      }
      }

    return (
        <nav className="flex flex-col md:flex-row w-full sticky top-0 justify-end bg-bone1 items-center text-lg z-50" style={{overflow: 'hidden'}}>
          <div className="flex w-full justify-between items-center p-4 md:p-0">
            <img src="/logo.svg" alt="logo" className="hidden md:block h-20 mr-auto ml-10" />
            <button className="md:hidden " onClick={toggleMenu} style={{color:"black"}}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className={`flex flex-col md:flex-row md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto text-stone-950`}>
            <Element onClick={handleLinkClick} href='#intro' label="Psia fryzjernia"/>
            <Element onClick={handleLinkClick} href='#about' label="O nas"/>
            <Element onClick={handleLinkClick} href='#offer' label="Oferta"/>
            <Element onClick={handleLinkClick} href="#pricing" label="Cennik"/>
            <Element onClick={handleLinkClick} href="#beforeVisit" label="Przed wizytą"/>
            <Element onClick={handleLinkClick} href="#gallery" label="Galeria"/>
            <Element onClick={handleLinkClick} href="#contact" label="Kontakt"/>
          </div>
        </nav>
      );
};

type ElementProps = {
    label: string
    href?: string
    onClick?: () => void
}
const Element = (p: ElementProps) => <a onClick={p.onClick} href={p.href} className="pl-10 pr-10 font-semibold md:text-nowrap">{p.label}</a>