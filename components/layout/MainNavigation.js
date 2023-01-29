import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import Button from "components/ui/Button";
import Gradient from 'rgt'

import themeClasses from './ThemeChanger.module.css'
import classes from "./MainNavigation.module.css";

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

     if (!mounted) {
       return null;
     }

    const changeTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme);
    }

    

    return (
      <header className={classes.header}>
        <div className={classes.logo} style={{ letterSpacing: ".2rem" }}>
          <Gradient dir="left-to-right" from="#FFCC90" to="#FF9A9A">
            &#60;Riel&#62;
          </Gradient>
        </div>
        <nav>
          {isMobile && (
            <ul>
              <li className={classes.list_button}>
                <Button onClick={changeTheme}>
                  {theme === "dark" ? (
                    <img
                      className={themeClasses.sunOpen}
                      style={{ width: "1.5rem" }}
                      src="/img/sun.png"
                    ></img>
                  ) : (
                    <img
                      className={themeClasses.moonOpen}
                      style={{ width: "1.5rem" }}
                      src="/img/moon.png"
                    ></img>
                  )}
                </Button>
              </li>

              <Button>
                <img src="/img/hamburger.png" style={{ width: "1.5rem" }}></img>
              </Button>
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
              <Link href="/">
                <li>Blog</li>
              </Link>

              <Button onClick={changeTheme}>
                {theme === "dark" ? (
                  <img
                    className={themeClasses.sunOpen}
                    style={{ width: "1.5rem" }}
                    src="/img/sun.png"
                  ></img>
                ) : (
                  <img
                    className={themeClasses.moonOpen}
                    style={{ width: "1.5rem" }}
                    src="/img/moon.png"
                  ></img>
                )}
              </Button>
            </ul>
          )}
        </nav>
      </header>
    );
}

export default MainNavigation;
