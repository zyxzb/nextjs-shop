'use client';

import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../(store)/store';
import Modal from './Modal';
import { AiFillHeart } from 'react-icons/ai';
import Image from 'next/image';

const Header = () => {
  const cartItems = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const toggleModal = useCart((state) => state.setOpenModal);
  const favoriteItems = useCart((state) => state.savedProducts);

  return (
    <header className='sticky top-0 p-6 bg-white shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex justify-between items-center bg-gradient-to-r from-rose-100 via-pink-800 to-purple-100'>
      {openModal && <Modal />}
      <Link href='/' className='flex items-center gap-2'>
        <Image src='/logo-meat-shop.png' width='50' height='50' alt='logo' />
        <span className='cursor-pointer font-bold text-teal-50'>Meat Shop</span>
      </Link>
      <div className='flex gap-8 items-center'>
        <div className='relative'>
          <Link href='/favorites'>
            <AiFillHeart className='cursor-pointer hover:text-slate-500 transition' />
          </Link>
          {favoriteItems.length > 0 && (
            <span className='absolute top-[-10px] right-[-12px] text-xs md:text-sm bg-pink-700 w-6 h-6 rounded-full justify-center items-center flex text-white overflow-hidden'>
              {favoriteItems.length}
            </span>
          )}
        </div>
        <div className='relative flex items-center'>
          <button type='button' onClick={toggleModal}>
            <FaShoppingCart className='cursor-pointer hover:text-slate-500 transition' />
          </button>
          {cartItems.length > 0 && (
            <span className='absolute top-[-10px] right-[-12px] text-xs md:text-sm bg-pink-700 w-6 h-6 rounded-full justify-center items-center flex text-white overflow-hidden'>
              {cartItems.length}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
