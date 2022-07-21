import { CharOverflow } from '@/src/utils/Functions/CharOverflow';
import { DataProps } from '@/src/utils/Interface/Dataset';

export default function AnimeSuggestionInfoCard({
   data,
}: DataProps): JSX.Element {
   return (
      <div className="w-[460px] h-[267px] bg-black text-white rounded-[16px] flex flex-col p-5 items-center justify-between">
         <h2 className="text-[20px] font-bold font-varela">{data.title}</h2>
         <div className="w-full flex justify-between font-raleway">
            <p>
               <b className="font-varela">Score:</b> {data.score}
            </p>
            <p>
               <b className="font-varela">Rank:</b> #{data.ranked}
            </p>
            <p>
               <b className="font-varela">Popularity:</b> #{data.popularity}
            </p>
         </div>
         <p className="font-raleway">{CharOverflow(data.synopsis, 220)}</p>
      </div>
   );
}
