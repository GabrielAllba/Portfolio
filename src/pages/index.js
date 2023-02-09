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
