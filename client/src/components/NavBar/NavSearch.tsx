import { useState, useEffect } from 'react';
import axios from 'axios';

import { Dataset } from '@/src/utils/Interface/Dataset';

const DropdownContainer = ({
   children,
}: {
   children: React.ReactNode;
}): JSX.Element => {
   return (
      <div className="w-full h-[200px] absolute right-6 overflow-x-hidden overflow-y-scroll p-5 flex flex-wrap bg-black text-white">
         {children}
      </div>
   );
};

export default function NavSearch(): JSX.Element {
   const [data, setData] = useState([] as any[]);
   const [searchValue, setSearchValue] = useState('');

   useEffect(() => {
      const GetData = async () => {
         try {
            const results = await axios.get(
               'https://scout-serverside.herokuapp.com/animes/all'
            );
            setData(results.data);
            console.log(results.data);
         } catch (e) {
            console.log(e);
         }
      };

      GetData();
   }, []);

   return (
      <div className="w-1/2 relative">
         <input
            type="text"
            className="w-full h-[40px] relative right-[30px] p-3 rounded-[50px]"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
         />
         {/* this still needs sorting for proper search */}
         {searchValue === '' ? null : (
            <DropdownContainer>
               {data
                  .filter((el) =>
                     el.title.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  .map((el: Dataset, index: number) => (
                     <div key={index} className="w-full  m-2">
                        {el.title}
                     </div>
                  ))}
            </DropdownContainer>
         )}
         <div className="w-full"></div>
      </div>
   );
}
