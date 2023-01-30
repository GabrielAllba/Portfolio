import Experience from 'components/home/Experience';
import Hero from 'components/home/hero';
import Works from 'components/home/works';
import Collaborate from 'components/home/collaborate';
import Footer from 'components/footer/Footer';
import MobileNav from 'components/ui/MobileNav/MobileNav';
import { useState, useEffect } from 'react';

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
    <>
      <Hero></Hero>
      <Experience></Experience>
      <Works></Works>
      <Collaborate></Collaborate>
      {isMobile && <MobileNav></MobileNav>}

      <Footer></Footer>
    </>
  );
 
}
