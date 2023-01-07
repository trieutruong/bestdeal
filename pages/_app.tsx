
import "../styles/globals.css";
import "../styles/gridsystem.css";
import type { AppProps } from "next/app";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="wrapper">
      <Header />
      <div className="app__container">
        <div className="container">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
