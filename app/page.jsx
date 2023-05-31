import { Suspense } from 'react';
import Loading from './loading';
import { PageTitle, AllProducts } from './components';
import Link from 'next/link';

const HomePage = async () => {
  return (
    <main>
      <PageTitle title='Taste the Difference at Meat Shop' />
      <div className='flex pb-10 lg:pb-16'>
        <Link href='/products' className='link_btn mx-auto'>
          See All Products
        </Link>
      </div>
      <div className='w-full max-w-[1000px] mx-auto'>
        <span className='text-lg py-2 text-center block bg-gradient-to-r from-rose-100 via-pink-800 to-purple-100 bg-clip-text text-transparent font-bold'>
          New Products:
        </span>
        <Suspense fallback={<Loading />}>
          <AllProducts numberOfProducts={3} />
        </Suspense>
      </div>
    </main>
  );
};

export default HomePage;
