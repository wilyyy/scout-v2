export interface Dataset {
   uid: number;
   title: string;
   synopsis: string;
   genre: string[];
   aired: string;
   episodes: number;
   members: string;
   popularity: number;
   ranked: number;
   score: string;
   img_url: string;
   link: string;
}

export interface DataProps {
   data: {
      uid: number;
      title: string;
      synopsis: string;
      genre: string[];
      aired: string;
      episodes: number;
      members: string;
      popularity: number;
      ranked: number;
      score: string;
      img_url: string;
      link: string;
   };
   onButtonClick?: React.MouseEventHandler;
}
