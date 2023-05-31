import Stripe from 'stripe';
import ProductCard from './ProductCard';

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

const AllProducts = async ({ numberOfProducts }) => {
  const products = await gesStripeProducts();

  if (numberOfProducts !== undefined) {
    const newProducts = products.slice(0, numberOfProducts);

    return (
      <div className='w-full max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {newProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className='w-full max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
