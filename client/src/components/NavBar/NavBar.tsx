import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NavBar(): JSX.Element {
   return (
      <div className="w-full h-[75px] flex justify-between items-center my-5">
         <div className="w-1/4">
            <h1 className="text-[48px] font-mplus font-bold">Scout</h1>
         </div>
         <div className="w-1/3 flex justify-between items-center">
            <a className="text-[30px]">Home</a>
            <a className="text-[30px]">Your List</a>
            <a className="text-[30px]">Poll</a>
         </div>
         <div className="w-1/3 flex justify-end items-center">
            <input
               type="text"
               className="w-1/2 h-[40px] relative right-[30px]"
            />
            <img
               src="https://placekitten.com/200/300"
               className="w-[75px] h-[75px] rounded-[100px]"
            />
         </div>
      </div>
   );
}
