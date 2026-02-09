import Head from "next/head";
import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

