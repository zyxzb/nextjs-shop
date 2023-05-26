'use client';

import useCart from '../(store)/store';
import { AiOutlineHeart, AiOutlinePlusCircle } from 'react-icons/ai';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardOverlay = ({ product }) => {
  const {
    id: price_id,
    unit_amount: cost,
    product: { name, images },
  } = product;

  const addItemToCart = useCart((state) => state.addItemToCart);
  const addToFavorite = useCart((state) => state.addToFavorite);

  const handleAddItemToCart = () => {
    const newItem = {
      quantity: 1,
      price_id,
      name,
      cost,
    };
    addItemToCart({ newItem });
    toast.success(`Successfully added ${name} to your cart!`);
  };

  const handleSaveToFavorites = () => {
    const newItem = {
      price_id,
      name,
      cost,
      image: images[0],
    };
    addToFavorite({ newItem });
  };

  return (
    <>
      <div className='absolute flex justify-center items-center w-full h-full translate-y-full group-hover:translate-y-0 transition bg-white bg-opacity-20 backdrop-blur-sm rounded drop-shadow-sm'>
        <div className='flex gap-10'>
          <Tippy content='Add to Favorites'>
            <button
              type='button'
              onClick={(e) => {
                e.stopPropagation();
                handleSaveToFavorites();
              }}
            >
              <AiOutlineHeart className='text-5xl hover:text-red-300 cursor-pointer' />
            </button>
          </Tippy>
          <Tippy content='Add to Basket'>
            <button
              type='button'
              onClick={(e) => {
                e.stopPropagation();
                handleAddItemToCart();
              }}
            >
              <AiOutlinePlusCircle className='text-5xl hover:text-red-300 cursor-pointer' />
            </button>
          </Tippy>
        </div>
      </div>
      <ToastContainer position='bottom-right' />
    </>
  );
};

export default CardOverlay;
