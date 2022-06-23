import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Dataset } from '../utils/Interface/Dataset';
import PageLayout from '../components/Layout/PageLayout';
import NavBar from '../components/NavBar/NavBar';
import HomeCard from '../components/Cards/HomeCard';
import ButtonTest from '../components/ButtonTest';

const Home: NextPage = () => {
   const router = useRouter();
   const [data, setData] = useState([] as any[]);

   useEffect(() => {
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
      <PageLayout height="h-auto" bgColor="bg-[#1C2A36]">
         <div className="w-full flex flex-wrap items-center">
            {data?.map((el: Dataset, index: number) => (
               <HomeCard
                  data={el}
                  key={index}
                  onButtonClick={() => router.push(`./anime/${el.uid}`)}
               />
            ))}
         </div>
      </PageLayout>
   );
};

export default Home;
