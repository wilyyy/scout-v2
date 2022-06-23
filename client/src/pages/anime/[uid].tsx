import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import AnimeInfoCard from '@/src/components/Cards/AnimeInfoCard';

//https://github.com/wilyyy/Scout/blob/main/pages/anime/%5Banime_id%5D.js

import PageLayout from '@/src/components/Layout/PageLayout';
import { useEffect } from 'react';

const AnimePage: NextPage = () => {
   const router = useRouter();
   const { anime_id } = router.query;

   useEffect(() => {
      //make a get anime by id function and use params to filter that id here
   }, []);

   return (
      <PageLayout bgColor="bg-[#1C2A36]" height="h-auto">
         <AnimeInfoCard />
      </PageLayout>
   );
};

export default AnimePage;
