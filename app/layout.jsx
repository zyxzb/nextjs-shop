import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

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
        <div className='flex-1 p-4'>{children}</div>
        <Footer />
        <div id='portal' />
      </body>
    </html>
  );
};
export default RootLayout;
