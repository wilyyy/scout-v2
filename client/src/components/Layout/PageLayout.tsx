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
         className={`w-screen ${height} flex flex-col items-center ${bgColor} font-varela`}
      >
         <NavBar />
         <div className="min-w-0 w-11/12 flex flex-col items-center">
            {children}
         </div>
      </div>
   );
}
