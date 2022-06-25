import { CharOverflow } from '@/src/utils/Functions/CharOverflow';

interface Props {
   data: {
      title: string;
      synopsis: string;
      img_url: string;
      episodes: number;
      score: string;
      ranked: number;
      popularity: number;
      genre: string[];
   };
}

export default function AnimeInfoCard({ data }: Props): JSX.Element {
   return (
      <div className="w-10/12 h-[300px] flex">
         <img src={data.img_url} className="w-2/12" />
         <div className="w-10/12 h-full flex bg-black text-white px-2 py-5 rounded-tr-[16px] rounded-br-[16px]">
            <div className="w-7/12 px-4 flex flex-col justify-between">
               <h1 className="text-[20px] font-bold">{data.title}</h1>
               <h2>Episodes: {data.episodes}</h2>
               <p className="font-raleway h-[150px]">
                  {CharOverflow(data.synopsis, 400)}
               </p>
            </div>
            <div className="w-[1px] bg-white h-full" />
            <div className="w-5/12 px-4 flex flex-col justify-between items-center">
               <h1 className="text-[20px] font-raleway">
                  <b className="font-varela">Score:</b> {data.score}
               </h1>

               <div className="w-full flex justify-evenly items-center font-raleway">
                  <p>
                     <b className="font-varela">Rank:</b> #{data.ranked}
                  </p>
                  <p>
                     <b className="font-varela">Popularity:</b> #
                     {data.popularity}
                  </p>
               </div>
               <p className="w-full flex flex-col justify-evenly items-center">
                  <b>Genres:</b>{' '}
                  <div className="flex">
                     {data.genre.map((el, index) => (
                        <p className="font-raleway" key={index}>
                           {el},{' '}
                        </p>
                     ))}
                  </div>
               </p>

               <div className="text-center font-raleway">
                  <p>
                     Based on your favourites,{' '}
                     <b className="font-varela">{data.title}</b> is an
                  </p>
                  <div className="w-full h-[20px] bg-red-500" />
                  <p>86% match</p>
               </div>
            </div>
         </div>
      </div>
   );
}
