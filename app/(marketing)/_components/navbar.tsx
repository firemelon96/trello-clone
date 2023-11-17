import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className='fixed top-0 w-full bg-white h-14 px-4 flex items-center border-b shadow-sm'>
      <div className='flex justify-between items-center md:max-w-screen-2xl mx-auto w-full'>
        <Logo />
        <div className='flex items-center md:block md:w-auto justify-between w-full space-x-4 '>
          <Button size='sm' variant='outline' asChild>
            <Link href='/sign-in'>Login</Link>
          </Button>
          <Button size='sm' asChild>
            <Link href='/sign-up'>Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
