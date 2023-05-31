'use client';

import Link from 'next/link';
import useCart from '../(store)/store';
import Tippy from '@tippyjs/react';

const FavoriteCards = () => {
  const favoriteItems = useCart((state) => state.savedProducts);
  const removeFromFavorite = useCart((state) => state.removeFromFavorite);

  if (favoriteItems.length === 0) {
    return (
      <div className='flex justify-center items-center flex-col w-full'>
        <p className='text-xl'>Add first Item</p>
        <Link
          href='/'
          className='bg-pink-700 text-white hover:bg-pink-500 transition cursor-pointer px-4 py-2 mt-4'
        >
          Home Page
        </Link>
      </div>
    );
  }

  return (
    <>
      {favoriteItems.map((item) => {
        const { cost, image, name, price_id } = item;
        return (
          <div key={price_id} className='w-full h-24 flex border p-2'>
            <div>
              <img
                src={image}
                alt={name}
                className='w-[120px] h-full object-cover border-r'
              />
            </div>
            <div className='flex flex-col h-full justify-between ml-8'>
              <h2 className='text-md md:text-xl font-bold'>{name}</h2>
              <p>{cost / 100} zł</p>
            </div>
            <div className='ml-auto flex items-center'>
              <Tippy content={`Remove ${name} From Favorites`}>
                <button
                  type='button'
                  className='text-5xl p-4'
                  onClick={() => removeFromFavorite(price_id)}
                >
                  X
                </button>
              </Tippy>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FavoriteCards;
