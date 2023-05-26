import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <p>Error :(</p>
      <Link href='/' className='bg-slate-200 p-4'>
        Back Home
      </Link>
    </div>
  );
};

export default Page;
