// src/components/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children: ReactNode;
}

function getCurrentYear() {
  return new Date().getFullYear();
}

export default function RootLayout({ children }: Props) {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      <Head>
        <title>Your Website Name</title>
        <meta name="description" content="A description of your website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* ... any other SEO related tags */}
      </Head>

      <header className="bg-black-600 text-white p-4">
        {/* Navbar goes here */}
        Navbar
      </header>

      <main className="flex-grow container mx-auto px-4">
        {children}
      </main>

      <footer className="bg-gray-800 text-white p-4">
        {/* Footer content goes here */}
        © {getCurrentYear()} Raymond Jimenez. All rights reserved.
      </footer>
    </div>
  );
}
