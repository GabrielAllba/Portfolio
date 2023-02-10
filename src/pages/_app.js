import Router from "next/router";
import { useEffect, useState } from "react";
import Layout from "components/layout/Layout";
import Loading from "components/ui/Loading/Loading";
import { ThemeProvider } from "next-themes";
import '../styles/globals.css'
import Head from 'next/head'


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
      <Head>
        <title>Gabriel Allba</title>
        <link rel="shortcut icon" href="/img/logo_profile.png" />
        <meta property="og:title" content="Gabriel Allba" key="title"></meta>
      </Head>
      {loading ? <Loading></Loading> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
