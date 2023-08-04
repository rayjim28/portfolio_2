// pages/_app.js
import RootLayout from '../components/layout';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';




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
