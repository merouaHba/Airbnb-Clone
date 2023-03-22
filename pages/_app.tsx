import "rsuite/dist/rsuite.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
   const [showing, setShowing] = useState(false);

   useEffect(() => {
     setShowing(true);
   }, []);

   if (!showing) {
     return null;
   }
  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </SessionProvider>
    );
  }
}

export default MyApp;
