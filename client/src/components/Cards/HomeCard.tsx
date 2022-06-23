import { BsBookmark } from 'react-icons/bs';

import { CharOverflow } from '@/src/utils/Functions/CharOverflow';

interface Props {
   data: {
      title: string | any;
      synopsis: string | any;
      img_url: string;
      episodes: number | any;
   };
   onButtonClick?: React.MouseEventHandler;
}

export default function HomeCard({ data, onButtonClick }: Props): JSX.Element {
   return (
      <div
         className="text-white w-[271px] min-h-[578px] h-auto px-5 py-8 flex flex-col justify-between items-center bg-black rounded-[16px] m-3"
         onClick={onButtonClick}
      >
         <img
            src={data.img_url}
            className="w-full h-[150px] rounded-[11px] object-cover object-top"
         />
         <div className="w-full h-auto flex justify-between">
            <h4 className="text-[18px] font-semibold font-varela w-[3/4]">
               {CharOverflow(data.title, 30)}
            </h4>
            <BsBookmark color="white" size={35} />
         </div>
         <p className="self-start font-raleway">
            {CharOverflow(data.synopsis, 150)}
         </p>
         <div className="border border-dashed border-white w-full" />
         <div className="font-raleway">
            <p>{data.episodes}/77</p>
            <p>Episodes</p>
         </div>
         <div>
            <p>Ongoing</p>
            <p>Status</p>
         </div>
      </div>
   );
}
