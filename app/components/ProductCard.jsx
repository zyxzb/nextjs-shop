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
    router.push(`/product/${price_id}`);
  };

  return (
    <div
      className='flex flex-col bg-white shadow hover:shadow-lg transition cursor-pointer relative group overflow-hidden rounded h-[340px]'
      onClick={onProductClick}
    >
      <div className='h-[70%] max-h-[70%]'>
        <Image
          src={images[0]}
          width={200}
          height={200}
          sizes='100vw'
          alt={name}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex flex-col p-2'>
        <div className='flex justify-between w-full font-bold'>
          <h3>{name}</h3>
          <p>{cost / 100}zł</p>
        </div>
        <p className='text-sm pt-4'>
          {description.substring(0, 80).trim().concat('...')}
        </p>
      </div>
      <CardOverlay product={product} />
    </div>
  );
};

export default ProductCard;
