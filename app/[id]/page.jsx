import Stripe from 'stripe';
import ProductLayout from '../components/ProductLayout';

const ProductPage = async ({ searchParams }) => {
  const gesStripeSingleProduct = async () => {
    const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE ?? '', {
      apiVersion: '2020-08-27',
    });
    const response = await stripe.prices.list({
      expand: ['data.product'],
    });
    const products = response.data;
    const singleProduct = products.find(({ id }) => id === searchParams.id);
    return singleProduct;
  };

  const singleProduct = await gesStripeSingleProduct();

  return <ProductLayout singleProduct={singleProduct} data-superjson />;
};

export default ProductPage;
