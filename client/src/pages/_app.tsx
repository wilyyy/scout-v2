import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
   return <Component {...pageProps} />;
}

export default MyApp;
