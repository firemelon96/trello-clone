'use client';

import { useProModal } from '@/hooks/use-pro-modal';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className='max-w-md p-0 overflow-hidden'>
        <div className='aspect-video relative flex items-center justify-center'>
          <Image fill src='/hero.svg' alt='Hero' className='object-cover' />
        </div>
        <div className='text-neutral-700 mx-auto space-y-6 p-6'>
          <h2 className='font-semibold text-xl'>
            Upgrade to Taskify Pro Today!
          </h2>
          <p className='text-xs font-semibold text-neutral-600'>
            Explore the best of Taskify
          </p>
          <div className='pl-3'>
            <ul className='text-sm list-disc'>
              <li>Unlimited boards</li>
              <li>Advance checklists</li>
              <li>Admin and security features</li>
              <li>And more! </li>
            </ul>
          </div>
          <Button className='w-full' variant='primary'>
            Upgrade now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};