import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Dataset } from '../interfaces/Dataset';
import PageLayout from '../components/Layout/PageLayout';
import NavBar from '../components/NavBar/NavBar';
import HomeCard from '../components/Cards/HomeCard';
import ButtonTest from '../components/ButtonTest';

const Home: NextPage = () => {
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
         <NavBar />
         <div className="w-full flex flex-wrap">
            {data?.map((el: Dataset, index: number) => (
               <HomeCard data={el} key={index} />
            ))}
         </div>
      </PageLayout>
   );
};

export default Home;
