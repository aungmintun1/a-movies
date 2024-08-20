
import Head from 'next/head';
import { Provider } from '../components/Provider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
