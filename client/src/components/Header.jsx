import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm shadow-gray-500" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo and Mobile Menu Trigger */}
        <div className="flex items-center">
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Icon icon="ion:menu-outline" className="mr-4 cursor-pointer" style={{ fontSize: '26px' }} />
          </div>
          {/* Logo */}
          <Link to="/" className="md:w-[160px]">
            <div className="flex items-center gap-2 text-lg font-bold">
              <img src="https://myshop.woonuxt.com/logo.svg" alt="Logo" width="32" height="32" />
              <span>DriftStore</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-6 text-sm text-gray-500 lg:flex lg:px-4">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Search and Cart Section */}
        <div className="flex justify-end items-center md:w-[160px] flex-1 ml-auto gap-4 md:gap-6">
          {/* Search Form */}
          <form className="relative items-center flex-1 hidden sm:inline-flex max-w-[320px] w-[60%]">
            <Icon icon="ion:search-outline" className="absolute z-10 opacity-50 left-2" style={{ fontSize: '20px' }} />
            <input
              type="text"
              placeholder="Search Products..."
              className="z-0 inline-flex items-center w-full p-2 pl-10 text-sm text-gray-500 border border-gray-300 rounded-md shadow-inner outline-none bg-gray-50 shadow-gray-200"
            />
          </form>
          
          {/* Mobile Search Icon */}
          <div className="relative cursor-pointer inline-flex sm:hidden" title="Search">
            <Icon icon="ion:search-outline" style={{ fontSize: '20px' }} />
          </div>

          {/* Sign-In and Cart Icons */}
          <div className="flex gap-4 items-center">
            <Link to="/my-account" className="hidden sm:inline-flex aspect-square items-center" title="Sign In">
              <Icon icon="ion:person-outline" style={{ fontSize: '22px' }} />
            </Link>
            <div className="relative cursor-pointer inline-flex" title="Cart">
              <Icon icon="ion:cart-outline" style={{ fontSize: '22px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white w-full py-4">
          <nav className="flex flex-col items-start gap-4 text-sm text-gray-500 px-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
            <Link to="/categories" onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)}>Wishlist</Link>
            <Link to="/my-account" onClick={() => setIsMobileMenuOpen(false)}>My Account</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
