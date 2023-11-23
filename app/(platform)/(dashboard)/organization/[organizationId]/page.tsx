import { Separator } from '@/components/ui/separator';
import { InfoOrg } from './_components/info-org';
import { BoardList } from './_components/board-list';
import { Suspense } from 'react';

const OrganizationIdPage = async () => {
  return (
    <div className='w-full mb-20'>
      <InfoOrg />
      <Separator className='my-4' />
      <div className='px-2 md:px-4'>
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;
