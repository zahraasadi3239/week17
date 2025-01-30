import Layout from "../components/layout/Layout";
import "../styles/global.css";
import "../styles/fonts.css";
import TanstackQueryProvider from "../provider/TanstackQueryProvider";

function MyApp({ Component, pageProps }) {
  return (
    <TanstackQueryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TanstackQueryProvider>
  );
}

export default MyApp;
