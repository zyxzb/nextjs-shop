import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const POST = async (req) => {
  const body = await req.json();

  if (body.lineItems.length === 0) {
    return new Response('Error', {
      status: 405,
    });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
      apiVersion: '2020-08-27',
    });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'blik', 'p24'],
      success_url: 'https://nextjs-shop-sooty.vercel.app/success',
      cancel_url: 'https://nextjs-shop-sooty.vercel.app/cancel',
      line_items: body.lineItems,
      mode: 'payment',
    });

    return NextResponse.json({ session });
  } catch (error) {
    console.log('Broke');
    console.log(error);
    return new Response('Error', {
      status: 500,
    });
  }
};
