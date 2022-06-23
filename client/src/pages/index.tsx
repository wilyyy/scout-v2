import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import PageLayout from '../components/Layout/PageLayout';
import NavBar from '../components/NavBar/NavBar';
import ButtonTest from '../components/ButtonTest';

const Home: NextPage = () => {
   return (
      <PageLayout height="h-screen" bgColor="bg-[#1C2A36]">
         <NavBar />
      </PageLayout>
   );
};

export default Home;
