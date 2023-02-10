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
        <title>Gabriel Allba Shemi Yuma</title>
        <link rel="shortcut icon" href="/img/logo_profile.png" />
        <meta
          property="og:title"
          content="Gabriel Allba Shemi Yuma"
          key="title"
        />
        <meta name="title" content="Gabriel Allba Shemi Yuma" />
        <meta
          name="description"
          content="Full Stack Web Developer & DevOps Enthusiasts"
        />
        <meta
          name="keywords"
          content="Gabriel Allba, Web Developer, Portfolio, Devops Students, Atma Jaya Yogyakarta, Informatics"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      {loading ? <Loading></Loading> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
