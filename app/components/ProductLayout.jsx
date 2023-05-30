'use client';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import useCart from '../(store)/store';
import Image from 'next/image';

const ProductLayout = ({ singleProduct }) => {
  console.log(singleProduct);
  const {
    id: price_id,
    unit_amount: cost,
    product: { images, name, description },
  } = singleProduct;

  const addItemToCart = useCart((state) => state.addItemToCart);

  const handleAddItemToCart = () => {
    const newItem = {
      quantity: 1,
      price_id,
      name,
      cost,
    };
    addItemToCart({ newItem });
  };

  return (
    <>
      <div className='flex flex-col'>
        <div className='w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 md:p-4'>
          <div>
            <Image
              src={images[0]}
              width='0'
              height='0'
              sizes='100vw'
              alt={name}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='flex flex-col gap-2 p-4'>
            <div className='flex justify-between font-bold flex-col items-start md:text-lg'>
              <h3>{name}</h3>
              <p>{cost / 100}zł</p>
            </div>
            <p>Szczgóły: {description}</p>
            <button
              type='button'
              onClick={handleAddItemToCart}
              className='bg-slate-700 text-white hover:bg-slate-500 cursor-pointer mr-auto mt-auto px-4 py-2'
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position='bottom-right' />
    </>
  );
};

export default ProductLayout;
