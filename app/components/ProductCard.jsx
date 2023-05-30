'use client';

import { useRouter } from 'next/navigation';
import CardOverlay from './CardOverlay';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  const router = useRouter();
  const {
    id: price_id,
    unit_amount: cost,
    product: { images, name, description },
  } = product;

  const onProductClick = () => {
    router.push(`/${price_id}`);
  };

  return (
    <div
      className='flex flex-col bg-white shadow hover:shadow-lg transition cursor-pointer relative group overflow-hidden rounded'
      onClick={onProductClick}
    >
      <Image
        src={images[0]}
        width='0'
        height='0'
        sizes='100vw'
        alt={name}
        className='w-full h-full object-cover'
      />
      <div className='flex flex-col p-2'>
        <div className='flex justify-between w-full font-bold'>
          <h3>{name}</h3>
          <p>{cost / 100}zł</p>
        </div>
        <p className='text-sm pt-4'>{description}</p>
      </div>
      <CardOverlay product={product} />
    </div>
  );
};

export default ProductCard;
