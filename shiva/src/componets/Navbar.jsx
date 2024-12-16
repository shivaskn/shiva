import React, { useState } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-4 z-50">
      {/* Desktop View */}
      <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black py-3 backdrop-blur-lg lg:flex">
        <div className="flex items-center justify-between gap-6">
          <div>
            <a href="#">
              <h1>SHIVAKUMAR</h1>
            </a>
          </div>
          <div>
            <ul className="flex items-center gap-4">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    className="text-sm hover:text-yellow-400"
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="rounded-lg relative bottom-14 py-2 px-4 md:mx-3 lg:py-0 backdrop-blur-md lg:hidden">
        <div className="flex  items-center justify-between">
          <div>
            <a href="#">
              <h1 className="m-2">SHIVAKUMAR</h1>
            </a>
          </div>
          <div className="flex items-center">
            <button
              className="focus:outline-none lg:hidden"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="m-2 h-6 w-5" />
              ) : (
                <FaBars className="m-2 h-6 w-5" />
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div>
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-lg"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;