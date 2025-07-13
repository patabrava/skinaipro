import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Nav from '../components/Nav';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showNav = router.pathname !== '/';

  return (
    <>
      {showNav && <Nav />}
      <Component {...pageProps} />
    </>
  );
} 