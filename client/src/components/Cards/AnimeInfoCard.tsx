import { CharOverflow } from '@/src/utils/Functions/CharOverflow';

export default function AnimeInfoCard(): JSX.Element {
   const tempText =
      'loremloremlo remloremloremlorem loremlore mloremloremlorem loremloremloremlo re mloremloremlor asdsa as dsa asdas a dsa das das dsadsadsa dsa sa ddsa asdas a dsa das das dsadsadsa dsa sa ddsa asdas a dsa das das dsadsadsa dsa sa ddsa asdas a dsa das das dsadsadsa dsa sa ddsa asdas a dsa das das dsadsadsa dsa sa ddsa asdas a dsa das das dsadsadsa dsa sa d dsa asdas a dsa das das dsadsadsa dsa sa ddsa asdas a dsa das das dsadsadsa dsa sa ddsa asdas a dsa das das dsadsadsa dsa sa ddsa asdas a dsa das das dsadsadsa dsa sa ddsa asdas a dsa das das dsadsadsa dsa sa ddsa asdas a dsa das das dsadsadsa dsa sa d';

   return (
      <div className="w-10/12 h-[300px] flex">
         <img src="http://placekitten.com/g/200/300" className="w-2/12" />
         <div className="w-10/12 h-full flex bg-black text-white px-2 py-5 rounded-tr-[16px] rounded-br-[16px]">
            <div className="w-7/12 px-4 flex flex-col justify-between">
               <h1 className="text-[20px] font-bold">Code Geass</h1>
               <h2>Episodes: 22</h2>
               <p className="font-raleway h-[150px]">
                  {CharOverflow(tempText, 300)}
               </p>
            </div>
            <div className="w-[1px] bg-white h-full" />
            <div className="w-5/12 px-4">asdsad</div>
         </div>
      </div>
   );
}
