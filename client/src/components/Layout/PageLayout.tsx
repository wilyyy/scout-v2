import NavBar from '../NavBar/NavBar';

interface Props {
   children?: React.ReactNode;
   height?: string;
   bgColor?: string;
}

export default function PageLayout({
   children,
   height,
   bgColor,
}: Props): JSX.Element {
   return (
      <div
         className={`w-screen ${height} flex justify-center ${bgColor} font-varela`}
      >
         <div className="w-11/12 flex flex-col items-center">
            <NavBar />
            {children}
         </div>
      </div>
   );
}
