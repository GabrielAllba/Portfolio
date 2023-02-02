import Router from "next/router";
import { useEffect, useState } from "react";
import Layout from "components/layout/Layout";
import Loading from "components/ui/Loading/Loading";
import { ThemeProvider } from "next-themes";
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000)
      
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
        {loading ? <Loading></Loading> : <Component {...pageProps} />}
    </>
    
  );
}

export default MyApp;
