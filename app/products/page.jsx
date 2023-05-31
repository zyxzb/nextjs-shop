import { Suspense } from 'react';
import { AllProducts, PageTitle } from '../components';
import Loading from '../loading';

const Products = () => {
  return (
    <main>
      <PageTitle title='Our All Products' />
      <Suspense fallback={<Loading />}>
        <AllProducts />
      </Suspense>
    </main>
  );
};

export default Products;
