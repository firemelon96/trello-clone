'use client';

import { ActivityItem } from '@/components/activity-item';
import { Skeleton } from '@/components/ui/skeleton';
import { AuditLog } from '@prisma/client';
import { ActivityIcon } from 'lucide-react';

interface ActivityProps {
  items: AuditLog[];
}

export const Activity = ({ items }: ActivityProps) => {
  return (
    <div className='w-full flex items-start gap-x-3'>
      <ActivityIcon className='h-5 w-5 mt-0.5 text-neutral-700' />
      <div className='w-full space-y-2'>
        <p className='text-neutral-700 font-semibold'>Activity</p>
        <ol>
          {items.map((item) => (
            <ActivityItem key={item.id} data={item} />
          ))}
        </ol>
      </div>
    </div>
  );
};

Activity.Skeleton = function SkeletonActivity() {
  return (
    <div className='w-full flex items-start gap-x-3'>
      <Skeleton className='h-6 w-6 bg-neutral-200' />
      <div className='w-full space-y-2'>
        <Skeleton className='h-6 w-24 bg-neutral-200' />
        <Skeleton className='h-10 w-full bg-neutral-200' />
      </div>
    </div>
  );
};
