import type { NextPage } from 'next';

import PageLayout from '@/src/components/Layout/PageLayout';
import ProfileInfoCard from '@/src/components/Profile/ProfileInfoCard';

const Profile: NextPage = () => {
   return (
      <PageLayout bgColor="bg-[#1C2A36]" height="h-screen">
         <ProfileInfoCard />
      </PageLayout>
   );
};

export default Profile;
