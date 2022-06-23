// https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/

type Props = {
   text: string;
};

export default function ButtonTest({ text }: Props): JSX.Element {
   return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         {text}
      </button>
   );
}
