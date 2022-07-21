import { DataProps } from '@/src/utils/Interface/Dataset';

export default function AnimeSuggestionCard({ data }: DataProps): JSX.Element {
   return (
      <div className="w-[200px] h-[320px] rounded-[15px] bg-black overflow-hidden">
         <img
            src={data.img_url}
            className="h-3/4 w-full object-cover object-top"
         />
         <div className="h-1/4 w-full flex flex-col justify-around text-white">
            <h1>{data.title}</h1>
            <div className="flex">
               {data.genre.slice(0, 2).map((el, index) => (
                  <p className="font-raleway" key={index}>
                     {el},{' '}
                  </p>
               ))}
            </div>
         </div>
      </div>
   );
}
