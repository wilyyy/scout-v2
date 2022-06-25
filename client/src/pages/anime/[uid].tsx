import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

import AnimeInfoCard from '@/src/components/Cards/AnimeInfoCard';
import AnimeSuggestionCard from '@/src/components/Cards/AnimeSuggestionCard';
import AnimeSuggestionInfoCard from '@/src/components/Cards/AnimeSuggestionInfoCard';

//https://github.com/wilyyy/Scout/blob/main/pages/anime/%5Banime_id%5D.js

import PageLayout from '@/src/components/Layout/PageLayout';
import { Dataset } from '@/src/utils/Interface/Dataset';

const AnimePage: NextPage = () => {
   const router = useRouter();
   const { anime_id } = router.query;

   const [data, setData] = useState([] as any[]);

   useEffect(() => {
      //make a get anime by id function and use params to filter that id here
      const GetData = async () => {
         try {
            const results = await axios.get(
               'https://scout-serverside.herokuapp.com/animes/all'
            );
            setData(results.data);
            console.log(results.data);
         } catch (e) {
            console.log(e);
         }
      };

      GetData();
   }, []);

   return (
      <PageLayout bgColor="bg-[#1C2A36]" height="h-auto">
         {data?.slice(0, 1).map((el: Dataset, index: number) => (
            <AnimeInfoCard data={el} key={index} />
         ))}
         <div className="my-[30px]"></div>
         <div className="flex justify-evenly w-full">
            {data?.slice(0, 3).map((el: Dataset, index: number) => (
               <AnimeSuggestionCard data={el} key={index} />
            ))}
            {data?.slice(0, 1).map((el: Dataset, index: number) => (
               <AnimeSuggestionInfoCard data={el} key={index} />
            ))}
         </div>
      </PageLayout>
   );
};

export default AnimePage;
