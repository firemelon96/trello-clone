import { checkSubscription } from '@/lib/subscription';

import { InfoOrg } from '../_components/info-org';
import { Separator } from '@/components/ui/separator';
import { SubscriptionButton } from './_components/subscription-button';

const BillingPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div className='w-full'>
      <InfoOrg isPro={isPro} />
      <Separator className='my-2' />
      <SubscriptionButton isPro={isPro} />
    </div>
  );
};

export default BillingPage;
