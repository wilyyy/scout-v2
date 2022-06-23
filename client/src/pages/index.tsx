import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ButtonTest from '../components/ButtonTest';

const Home: NextPage = () => {
   return (
      <div className="w-screen h-screen flex justify-center items-center">
         <ButtonTest text="Click Me" />
      </div>
   );
};

export default Home;
