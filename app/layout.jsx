import './globals.css';
import { Inter } from 'next/font/google';
import { Header, Footer } from './components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Meat Shop',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body
        className={`min-h-screen flex flex-col relative ${inter.className}`}
      >
        <Header />
        <div className='flex-1 px-4 py-10'>{children}</div>
        <Footer />
        <div id='portal' />
      </body>
    </html>
  );
};
export default RootLayout;
