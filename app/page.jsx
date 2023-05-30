import Stripe from 'stripe';
import ProductCard from './components/ProductCard';

const gesStripeProducts = async () => {
  const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE ?? '', {
    apiVersion: '2020-08-27',
  });
  const response = await stripe.prices.list({
    expand: ['data.product'],
  });
  const products = response.data;
  return products;
};

const HomePage = async () => {
  const products = await gesStripeProducts();

  return (
    <main>
      <div className='w-full max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
