import Link from 'next/link';

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <p>Success!</p>
      <Link href='/' className='bg-slate-200 p-4'>
        Back Home
      </Link>
    </div>
  );
};

export default Page;
