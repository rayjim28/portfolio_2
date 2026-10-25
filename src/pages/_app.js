import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="raymond-portfolio-theme">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
