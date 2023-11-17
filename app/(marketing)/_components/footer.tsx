import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full bg-neutral-100 h p-4 border-t'>
      <div className='flex justify-between items-center md:max-w-screen-2xl mx-auto w-full'>
        <Logo />
        <div className='flex items-center md:block md:w-auto justify-between w-full space-x-4 '>
          <Button size='sm' variant='ghost'>
            Privacy Policy
          </Button>
          <Button size='sm' variant='ghost'>
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
