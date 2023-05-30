import Stripe from 'stripe';
import ProductLayout from '../components/ProductLayout';

const gesStripeSingleProduct = async () => {
  const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE ?? '', {
    apiVersion: '2020-08-27',
  });
  const response = await stripe.prices.list({
    expand: ['data.product'],
  });
  const products = response.data;
  return products;
};

const ProductPage = async ({ searchParams }) => {
  const products = await gesStripeSingleProduct();
  const singleProduct = products.find(({ id }) => id === searchParams.id);

  return <ProductLayout singleProduct={singleProduct} />;
};

export default ProductPage;
