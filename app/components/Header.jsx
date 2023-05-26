'use client';

import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../(store)/store';
import Modal from './Modal';
import { AiFillHeart } from 'react-icons/ai';

const Header = () => {
  const cartItems = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const toggleModal = useCart((state) => state.setOpenModal);
  const favoriteItems = useCart((state) => state.savedProducts);

  return (
    <header className='sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex justify-between items-center'>
      {openModal && <Modal />}
      <Link href='/'>
        <h1 className='uppercase cursor-pointer'>Meat Shop</h1>
      </Link>
      <div className='flex gap-8'>
        <div className='relative'>
          <Link href='/favorites'>
            <AiFillHeart className='cursor-pointer hover:text-slate-500 transition' />
          </Link>
          {favoriteItems.length > 0 && (
            <span className='absolute top-[-10px] right-[-12px] text-xs md:text-sm bg-red-500 w-6 h-6 rounded-full justify-center items-center flex text-white overflow-hidden'>
              {favoriteItems.length}
            </span>
          )}
        </div>
        <div className='relative'>
          <button type='button' onClick={toggleModal}>
            <FaShoppingCart className='cursor-pointer hover:text-slate-500 transition' />
          </button>
          {cartItems.length > 0 && (
            <span className='absolute top-[-10px] right-[-12px] text-xs md:text-sm bg-red-500 w-6 h-6 rounded-full justify-center items-center flex text-white overflow-hidden'>
              {cartItems.length}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
