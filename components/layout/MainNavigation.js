import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import Button from "components/ui/Button/Button";
import Gradient from 'rgt'

import themeClasses from './ThemeChanger.module.css'
import classes from "./MainNavigation.module.css";

import { HiOutlineMoon } from "react-icons/hi";
import { FiSun } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { Container } from "@mui/system";


function MainNavigation() {
     const [mounted, setMounted] = useState(false);
     const { theme, setTheme } = useTheme();
     const [isMobile, setIsMobile] = useState(false)
     
     
     useEffect(() => {
       setMounted(true);
     }, []);

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

    const [scrollY, setScrollY] = useState(0);

    function logit() {
      setScrollY(window.pageYOffset);
    }

    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", logit);
      }
      watchScroll();
      
      return () => {
        window.removeEventListener("scroll", logit);
      };
    });
     

     if (!mounted) {
       return null;
     }

    const changeTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme);
    }
    
    

    return (
      <header className={scrollY <= 100 ? classes.header : classes.header + ' ' + classes.header_padding}>
        <Container className={classes.header_container}>
          <div className={classes.logo} style={{ letterSpacing: ".2rem" }}>
            <Gradient dir="left-to-right" from="#FFCC90" to="#FF9A9A">
              <Link href='/'>
                Riel
              </Link>
            </Gradient>
          </div>
          <nav>
            {isMobile && (
              <ul>
                <li className={classes.list_button}>
                  <Button onClick={changeTheme}>
                    {theme === "dark" ? (
                      <FiSun
                        style={{ fontSize: "1.5rem" }}
                        className={themeClasses.sunOpen}
                      ></FiSun>
                    ) : (
                      <HiOutlineMoon
                        style={{ fontSize: "1.5rem" }}
                        className={themeClasses.moonOpen}
                      ></HiOutlineMoon>
                    )}
                  </Button>
                </li>

              </ul>
            )}
            {!isMobile && (
              <ul>
                <Link href="/">
                  <li>About</li>
                </Link>
                <Link href="/">
                  <li>Skills</li>
                </Link>
                <Link href="/">
                  <li>Experience</li>
                </Link>
                <Link href="/">
                  <li>Work</li>
                </Link>
                <Link href="/">
                  <li>Awards</li>
                </Link>
                <Link href="/blog">
                  <li>Blog</li>
                </Link>

                <Button onClick={changeTheme}>
                  {theme === "dark" ? (
                    <FiSun
                      style={{ fontSize: "1.5rem" }}
                      className={themeClasses.sunOpen}
                    ></FiSun>
                  ) : (
                    <HiOutlineMoon
                      style={{ fontSize: "1.5rem" }}
                      className={themeClasses.moonOpen}
                    ></HiOutlineMoon>
                  )}
                </Button>
              </ul>
            )}
          </nav>
        </Container>
        <div className={scrollY <= 100 ? classes.usual_background : classes.blured_background}></div>
      </header>
    );
}

export default MainNavigation;
