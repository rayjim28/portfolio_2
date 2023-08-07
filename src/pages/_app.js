// pages/_app.js
import RootLayout from '../components/layout';
import { ThemeProvider } from 'next-themes';
// import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class" // Apply theme as class attribute
      defaultTheme="dark" // Default theme
      enableSystem={false} // Disable automatic system theme
      themes={['light', 'dark']} >
      <CustomCursor />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}

export default MyApp;
