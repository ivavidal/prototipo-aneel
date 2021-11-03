import Header from "../components/Header/Index";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <title>COAUT - SERVIÇO DE OUTORGA</title>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
