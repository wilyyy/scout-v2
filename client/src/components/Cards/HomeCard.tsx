import { BsBookmark } from 'react-icons/bs';

interface Props {
   data: {
      title?: string | any;
      synopsis?: string | any;
      episodes?: number | any;
   };
}

const Lengthener = (text: string, length: number): string => {
   const shortenedText = text.substring(0, length);

   if (text.length > length) {
      return shortenedText + '...';
   } else {
      return text;
   }
};

export default function HomeCard({ data }: Props): JSX.Element {
   return (
      <div className="text-white w-[271px] min-h-[578px] h-auto px-5 py-8 flex flex-col justify-between items-center bg-black rounded-[16px]">
         <img
            src="https://placekitten.com/500/500"
            className="w-full h-[150px] rounded-[11px]"
         />
         <div className="w-full h-auto flex justify-between">
            <h4 className="text-[24px] font-semibold font-varela w-[3/4]">
               {Lengthener(data.title, 20)}
            </h4>
            <BsBookmark color="white" size={35} />
         </div>
         <p className="self-start">{Lengthener(data.synopsis, 100)}</p>
         <div className="border border-dashed border-white w-full" />
         <div>
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
