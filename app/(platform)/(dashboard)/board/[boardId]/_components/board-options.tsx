'use client';

import { toast } from 'sonner';
import { deleteBoard } from '@/actions/delete-board';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useAction } from '@/hooks/use-action';
import { MoreHorizontal, X } from 'lucide-react';

interface BoardOptionsProps {
  id: string;
}

export const BoardOptions = ({ id }: BoardOptionsProps) => {
  const { execute, isLoading } = useAction(deleteBoard, {
    onError: (error) => {
      toast.error(error);
    },
  });

  const onDelete = () => {
    execute({ id });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='h-auto w-auto p-2' variant='transparent'>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className='px-0 py-3'
        side='bottom'
        align='start'
        sideOffset={14}
      >
        <div className='text-sm font-medium text-center text-neutral-600 pb-4'>
          Board action
        </div>
        <PopoverClose asChild>
          <Button
            variant='ghost'
            className='w-auto h-auto absolute p-2 right-2 top-2 text-neutral-600'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
        <Button
          variant='ghost'
          onClick={onDelete}
          disabled={isLoading}
          className='rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm'
        >
          Delete this board
        </Button>
      </PopoverContent>
    </Popover>
  );
};
