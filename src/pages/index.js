import Experience from 'components/home/Experience';
import Hero from 'components/home/hero';
import Works from 'components/home/works';
import Collaborate from 'components/home/collaborate';
import Footer from 'components/footer/Footer';
import MobileNav from 'components/ui/MobileNav/MobileNav';
import { useState, useEffect } from 'react';
import Skills from 'components/home/skills';

import Layout from 'components/layout/Layout'
import { ThemeProvider } from 'next-themes';
import Awards from '../../components/home/awards';
import Head from 'next/head';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);


  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  return (
    <ThemeProvider themes={["dark", "light"]} enableSystem={false}>
      <Head>
        <title>Gabriel Allba Shemi Yuma</title>
        <link rel="shortcut icon" href="/img/logo_profile.png" />
        <meta property="og:title" content="Gabriel Allba Shemi Yuma" key="title" />
        <meta name="title" content="Gabriel Allba Shemi Yuma" />
        <meta name="description" content="Full Stack Web Developer & DevOps Enthusiasts" />
        <meta name="keywords" content="Gabriel Allba, Web Developer, Portfolio, Devops Students, Atma Jaya Yogyakarta, Informatics" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <Layout>
        <Hero></Hero>
        <Skills></Skills>
        <Experience></Experience>
        <Works></Works>
        {isMobile && <MobileNav></MobileNav>}
        <Awards></Awards>
        <Collaborate></Collaborate>
        <Footer></Footer>
      </Layout>
    </ThemeProvider>
  );
 
}
