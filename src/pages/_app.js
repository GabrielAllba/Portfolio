import Router from "next/router";

import { useEffect, useState } from "react";

import Layout from "components/layout/Layout";

import Container from '@mui/material/Container'
import Loading from "components/ui/Loading/Loading";

import '../styles/globals.css'
import AdminLayout from "components/admin_layout/AdminLayout";


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setTimeout(()=>{
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
  <AdminLayout>

        {loading ? (
          <Loading></Loading>
          ) : (
            <Component {...pageProps} />
            
            )}    
            
            </AdminLayout>
  );
}

export default MyApp;
