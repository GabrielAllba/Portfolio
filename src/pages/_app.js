import Router from "next/router";
import { ThemeProvider } from "next-themes";
import '../styles/globals.css'
import Layout from "components/layout/Layout";
import { useEffect, useState } from "react";
import Container from '@mui/material/Container'
import Loading from "components/ui/Loading";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setTimeout(() => {
        setLoading(false);
      },1500)
      
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
      <Container maxWidth="lg">
        {loading ? (
          <Loading></Loading>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
