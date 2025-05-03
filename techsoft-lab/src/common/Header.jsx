import React, { useState } from 'react';
import Logo from '../Image/logo.png';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { Link } from "react-router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-[#0A1F44]">
      <div className="max-w-[1440px] mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <img
              src={Logo}
              alt="Tech Soft Lab Logo"
              className="w-12 rounded bg-white sm:w-16"
            />
            <h1 className="text-white text-xl font-serif sm:text-2xl md:text-3xl">
              Tech Soft Lab
            </h1>
          </div>

          {/* Desktop Navigation and Search */}
          <div className="hidden lg:flex items-center gap-6">
            <nav>
              <ul className="flex text-white gap-6">
                <Link to={'/'}>
                  <li className="hover:text-[#00C2CB] duration-200 font-semibold cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link to={'/services'}>
                  <li className="hover:text-[#00C2CB] duration-200 font-semibold cursor-pointer">
                    Services
                  </li>
                </Link >
                <Link to={'/about-us'}>
                  <li className="hover:text-[#00C2CB] duration-200 font-semibold cursor-pointer">
                    About us
                  </li>
                </Link>
                <Link to={'/contact-us'}>
                  <li className="hover:text-[#00C2CB] duration-200 font-semibold cursor-pointer">
                    Contact
                  </li>
                </Link>
              </ul>
            </nav>
            <div className="flex items-center border border-white rounded px-2 py-1">
              <input
                type="text"
                placeholder="Search in site"
                className="bg-transparent text-white placeholder-white outline-none w-24 md:w-32"
              />
              <FiSearch className="text-white" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col text-white gap-4">
              <li className="hover:text-[#00C2CB] duration-200 font-semibold">
                Home
              </li>
              <li className="hover:text-[#00C2CB] duration-200 font-semibold">
                Services
              </li>
              <li className="hover:text-[#00C2CB] duration-200 font-semibold">
                About us
              </li>
              <li className="hover:text-[#00C2CB] duration-200 font-semibold">
                Contact
              </li>
            </ul>
            <div className="mt-4 flex items-center border border-white rounded px-2 py-1">
              <input
                type="text"
                placeholder="Search in site"
                className="bg-transparent text-white placeholder-white outline-none w-full"
              />
              <FiSearch className="text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}