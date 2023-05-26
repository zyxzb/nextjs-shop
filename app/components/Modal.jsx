'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import useCart from '../(store)/store';
import { useRouter } from 'next/navigation';

const Modal = () => {
  const toggleModal = useCart((state) => state.setOpenModal);
  const cartItems = useCart((state) => state.cart);
  const deleteAllFromCart = useCart((state) => state.emptyCart);
  const removeItem = useCart((state) => state.removeItemFromCart);

  const router = useRouter();

  const checkout = async () => {
    const lineItems = cartItems.map((cartItem) => {
      return {
        price: cartItem.price_id,
        quantity: cartItem.quantity,
      };
    });
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ lineItems }),
    });
    const data = await res.json();
    router.push(data.session.url);
  };

  return ReactDOM.createPortal(
    <div className='fixed top-0 left-0 w-screen h-screen z-50'>
      <div className='bg-transparent absolute inset-0' onClick={toggleModal} />
      <div className='flex flex-col bg-white absolute top-0 right-0 h-screen w-screen sm:w-96 max-w-screen gap-4 p-4 shadow-lg '>
        <div className='flex items-center justify-between text-3xl relative pb-8'>
          <h1>Cart</h1>
          <button type='button' onClick={toggleModal}>
            <AiOutlineClose />
          </button>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-200 w-2/3'></div>
        </div>
        <div className='flex flex-col gap-4 overflow-y-scroll'>
          {cartItems.length === 0 ? (
            <p className='text-center pt-10'>
              There is nothing in your cart :(
            </p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className='flex justify-between items-center px-6 border-l-4'
              >
                <div className='flex flex-col'>
                  <p className='font-bold text-xl'>{item.name}</p>
                  <span className='text-xs'>Quantity: {item.quantity}</span>
                  <button
                    type='button'
                    onClick={() => removeItem(item.price_id)}
                    className='flex text-sm text-red-300 hover:underline'
                  >
                    Delete
                  </button>
                </div>
                <span className='font-bold text-xl'>{item.cost / 100} zł</span>
              </div>
            ))
          )}
        </div>
        <div className='m-4 flex flex-col gap-4'>
          <button
            onClick={checkout}
            className='border border-solid text-xl px-6 py-4 uppercase hover:bg-slate-200 transition'
          >
            Checkout
          </button>
          {cartItems.length > 0 && (
            <button
              onClick={deleteAllFromCart}
              className='border border-solid text-xl px-6 py-4 uppercase hover:bg-black hover:text-white transition'
            >
              Clear Cart
            </button>
          )}
        </div>
      </div>
    </div>,
    document.getElementById('portal'),
  );
};

export default Modal;
