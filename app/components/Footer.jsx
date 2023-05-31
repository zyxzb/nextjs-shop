import React from 'react';

const Footer = () => {
  return (
    <footer className='flex items-center justify-center py-4 bg-gradient-to-r from-rose-100 via-pink-800 to-purple-100 text-teal-50'>
      &copy; Copyright {new Date().getFullYear()} - Meat Shop
    </footer>
  );
};

export default Footer;
