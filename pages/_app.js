/* import "../styles/globals.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
} */

// pages/_app.js
import "../styles/globals.css";
import Layout from "../components/Layout";
import AIChatWidget from "../components/AIChatWidget";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <AIChatWidget />
    </Layout>
  );
}

export default MyApp;
