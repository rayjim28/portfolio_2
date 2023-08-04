// pages/_app.js
import RootLayout from '../components/layout';
import { ThemeProvider } from 'next-themes';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
        <RootLayout>
        <Navbar />
      <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}

export default MyApp;
