import { Inter, Roboto_Mono, Lusitana } from 'next/font/google';
// import url('https://fonts.googleapis.com/css2?family=Lusitana:wght@400;700&display=swap')

export const inter = Inter({ subsets: ['latin'] });

// export const Lusitana = Inter({ subsets: ['latin'] });
// export const roboto_mono = Roboto_Mono({
//     subsets: ['latin'],
//    })
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });