import { Separator } from '@/components/ui/separator';
import { InfoOrg } from '../_components/info-org';
import { ActivityList } from './_components/activity-list';
import { Suspense } from 'react';
import { checkSubscription } from '@/lib/subscription';

const ActivityPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div className='w-full'>
      <InfoOrg isPro={isPro} />
      <Separator className='my-2' />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default ActivityPage;
