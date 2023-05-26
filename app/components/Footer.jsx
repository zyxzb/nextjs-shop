import React from 'react';

const Footer = () => {
  return (
    <footer className='flex items-center justify-center py-4 border-t border-solid border-blue-900'>
      &copy; Copyright {new Date().getFullYear()} - Meat Shop
    </footer>
  );
};

export default Footer;
