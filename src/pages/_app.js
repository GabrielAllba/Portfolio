import Router from "next/router";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

import Layout from "components/layout/Layout";

import Container from '@mui/material/Container'
import Loading from "components/ui/Loading/Loading";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
      
      
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
    <ThemeProvider themes={["dark", "light"]} enableSystem={false}>
        {loading ? (
          <Loading></Loading>
        ) : (
          <Layout>
            <Container maxWidth="lg">
              <Component {...pageProps} />
            </Container>
          </Layout>
        )}
    </ThemeProvider>
  );
}

export default MyApp;
