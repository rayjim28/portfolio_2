// src/components/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';
// import Footer from '../components/Footer';

type Props = {
  children: ReactNode;
}

// function getCurrentYear() {
//   return new Date().getFullYear();
// }

export default function RootLayout({ children }: Props) {
  return (
    <div className="font-inter min-h-screen flex flex-col justify-between flex-container">
      <Head>
        <title>Ray&apos;s Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* ... any other SEO related tags */}
      </Head>

      {/* <header className="bg-black-600 text-white p-4">
        
        
      </header> */}

      <main className="flex-grow">
        {children}
      </main>

      {/* <footer className="bg-gray-800 text-white p-4">
        © {getCurrentYear()} Raymond Jimenez. All rights reserved.
      </footer> */}
      {/* <Footer /> */}
    </div>
  );
}
