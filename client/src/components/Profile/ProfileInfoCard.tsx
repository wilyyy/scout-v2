export default function ProfileInfoCard(): JSX.Element {
   return (
      <div className="bg-black text-white w-[350px] h-[645px] flex flex-col rounded-[16px] pt-[25px]">
         <div className="w-full h-4/6 flex flex-col justify-between items-center">
            <div className="w-full h-5/12 flex flex-col justify-between items-center">
               <img
                  src="http://placekitten.com/200/300"
                  className="w-[155px] h-[155px] rounded-[300px]"
               />
               <h1 className="text-[24px]">Steven Wang</h1>
            </div>
            <div className="w-full h-5/12 flex flex-col items-center">
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias mollitia doloribus error odio. Asperiores officia
                  maxime sequi tempore laudantium. Facilis aliquid minus dolor
                  vitae unde, nam temporibus earum inventore iste voluptas rerum
                  est consequuntur neque tempora, autem asperiores nihil id odit
                  ea. Dignissimos, dolorum culpa.
               </p>
            </div>
         </div>

         <div className="w-full h-4/12 flex flex-col bg-yellow-500">asd</div>
      </div>
   );
}
