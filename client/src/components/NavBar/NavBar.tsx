import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import NavSearch from './NavSearch';

export default function NavBar(): JSX.Element {
   const router = useRouter();

   return (
      <div className="w-11/12 h-[75px] flex justify-between items-center my-5">
         <div className="w-1/4">
            <a
               className="text-[48px] font-mplus font-bold"
               onClick={() => router.push('/')}
            >
               Scout
            </a>
         </div>
         <div className="w-1/3 flex justify-between items-center">
            <a className="text-[30px]">Home</a>
            <a className="text-[30px]">Your List</a>
            <a className="text-[30px]">Poll</a>
         </div>
         <div className="w-1/3 flex justify-end items-center">
            <NavSearch />
            <img
               src="https://placekitten.com/200/300"
               className="w-[75px] h-[75px] rounded-[100px] cursor-pointer"
            />
         </div>
      </div>
   );
}
