import { useRouter } from 'next/router';

const router = useRouter();

export const HandleRoute = (src: string) => {
   router.push(src);
};
