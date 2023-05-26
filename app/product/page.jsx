'use client';

import { useRouter } from 'next/navigation';
import useCart from '../(store)/store';

const ProductPage = () => {
  const router = useRouter();
  const specificProduct = useCart((state) => state.product);
  const addItemToCart = useCart((state) => state.addItemToCart);
  const { cost, description, name, price_id, product } = specificProduct;
  console.log(specificProduct);

  const handleAddItemToCart = () => {
    const newItem = {
      quantity: 1,
      price_id,
      name,
      cost,
    };
    addItemToCart({ newItem });
  };

  if (!specificProduct?.name) {
    // window.location.href = '/';
    setTimeout(() => {
      router.push('/');
    }, 500);
    return <div>Redirection go Home Page...</div>;
  }

  return (
    <div className='flex flex-col'>
      <div className='w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 md:p-4'>
        <div>
          <img
            src={product.product.images[0]}
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
  );
};

export default ProductPage;
