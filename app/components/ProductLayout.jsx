'use client';
import { ToastContainer } from 'react-toastify';
import useCart from '../(store)/store';
import Image from 'next/image';
import PageTitle from './PageTitle';

const ProductLayout = ({ singleProduct }) => {
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
      <PageTitle title={`Produkt: ${name}`} />
      <div className='flex flex-col'>
        <div className='w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 md:p-4 gap-6'>
          <div className='h-[240px] md:h-[360px]'>
            <Image
              src={images[0]}
              width={200}
              height={200}
              sizes='100vw'
              alt={name}
              className='w-full h-full object-cover'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between font-bold flex-col items-start md:text-lg'>
              <h3>{name}</h3>
              <p>{cost / 100}zł</p>
            </div>
            <p>Szczgóły: {description}</p>
            <button
              type='button'
              onClick={handleAddItemToCart}
              className='link_btn'
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
