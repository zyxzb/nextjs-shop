import { Suspense } from 'react';
import Loading from './loading';
import { PageTitle, AllProducts } from './components';

const HomePage = async () => {
  return (
    <main>
      <PageTitle title='Taste the Difference at Meat Shop' />
      <Suspense fallback={<Loading />}>
        <AllProducts />
      </Suspense>
    </main>
  );
};

export default HomePage;
