import { BsBookmark } from 'react-icons/bs';

import { CharOverflow } from '@/src/utils/Functions/CharOverflow';

interface Props {
   data: {
      title: string;
      synopsis: string;
      img_url: string;
      episodes: number;
   };
   onButtonClick?: React.MouseEventHandler;
}

export default function HomeCard({ data, onButtonClick }: Props): JSX.Element {
   return (
      <div
         onClick={onButtonClick}
         className="basis-[271px] grow-1 shrink-1 text-white hover:bg-red-900 min-h-[578px] h-auto px-5 py-8 flex flex-col justify-between items-center bg-black rounded-[16px] m-2"
      >
         <img
            src={data.img_url}
            className="cursor-pointer w-full h-[150px] rounded-[11px] object-cover object-top"
         />
         <div className="w-full h-auto flex justify-between">
            <h4 className="text-[18px] font-semibold font-varela w-[190px] h-[40px]">
               {CharOverflow(data.title, 30)}
            </h4>
            <BsBookmark color="white" size={35} />
         </div>
         <p className="self-start font-raleway">
            {CharOverflow(data.synopsis, 150)}
         </p>
         <div className="border border-dashed border-white w-full" />
         <div className="font-raleway flex flex-col items-center">
            <p className="font-bold">Episodes</p>
            <p>{data.episodes}</p>
         </div>
         <div className="font-raleway flex flex-col items-center">
            <p className="font-bold">Status</p>
            <p>Ongoing</p>
         </div>
      </div>
   );
}
