import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>Scout - Modern Anime Database</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300&family=Varela+Round&display=swap"
               rel="stylesheet"
            />
         </Head>
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
