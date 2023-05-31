import Link from 'next/link';
import { PageTitle } from '../components';

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <PageTitle title='Success!' />
      <Link href='/' className='link_btn mx-auto'>
        Back Home
      </Link>
    </div>
  );
};

export default Page;
