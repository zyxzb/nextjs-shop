'use client';

import Link from 'next/link';
import useCart from '../(store)/store';
import Tippy from '@tippyjs/react';
import { FiExternalLink } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const FavoriteCards = () => {
  const favoriteItems = useCart((state) => state.savedProducts);
  const removeFromFavorite = useCart((state) => state.removeFromFavorite);
  const router = useRouter();

  const handleVisitProduct = (price_id) => {
    router.push(`/product/${price_id}`);
  };

  if (favoriteItems.length === 0) {
    return (
      <div className='flex justify-center items-center flex-col w-full gap-4'>
        <p className='text-xl'>Add first Item</p>
        <Link href='/' className='link_btn mx-auto'>
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
              <Image
                src={image}
                width={120}
                height={100}
                alt={name}
                className='min-w-[120px] h-full object-cover border-r'
              />
            </div>
            <div className='flex flex-col h-full justify-between ml-8'>
              <h2 className='text-sm md:text-xl font-bold'>{name}</h2>
              <p>{cost / 100} zł</p>
            </div>
            <div className='ml-auto flex items-center text-3xl'>
              <Tippy content={`Go to: ${name}`}>
                <button
                  type='button'
                  className='p-2'
                  onClick={() => handleVisitProduct(price_id)}
                >
                  <FiExternalLink />
                </button>
              </Tippy>
              <Tippy content={`Remove ${name} From Favorites`}>
                <button
                  type='button'
                  className='p-2'
                  onClick={() => removeFromFavorite(price_id)}
                >
                  <RiDeleteBin6Line />
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
