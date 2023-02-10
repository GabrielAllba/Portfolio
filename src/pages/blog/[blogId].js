import { Container } from '@mui/system';

import { ThemeProvider } from 'next-themes';
import Layout from 'components/layout/Layout'

import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CustomCard  from 'components/ui/CustomCard/CustomCard';
import classes from './blogdetail.module.css'
import { useState, useEffect } from 'react';
import Badge from '../../../components/ui/Badge/Badge';
import parse from "html-react-parser";
import Footer from 'components/footer/Footer'
import Collaborate from 'components/home/collaborate'
import { useRef } from 'react';

import { useHeadsObserver } from '../../hooks';
import MobileNav from "components/ui/MobileNav/MobileNav";

import { useTheme } from "next-themes";

import { CopyBlock, dracula, solarizedLight } from "react-code-blocks";
import Image from 'next/image'



function BlogDetail(props){
   const [mounted, setMounted] = useState(false);
   const [isMobile, setIsMobile] = useState(false);
   const containerRef = useRef(null)
   const [scrollPosition, setScrollPosition] = useState(0)
   const [activeIntersection, setActiveIntersection] = useState('')
   const [lineNumbers, toggleLineNumbers] = useState(true);

   const { theme, setTheme } = useTheme();

   



   useEffect(() => {
     setMounted(true);
   }, []);

   const handleScroll = () => {
     const scrollPosition = window.scrollY; 
     setScrollPosition(scrollPosition)
   };

   useEffect(() => {
     handleScroll();
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

   

   

   useEffect(() => {
    let callback = (entries, observer) => {
      for(let i=0; i<entries.length; i++){
        if(entries[i].isIntersecting){
          setActiveIntersection(`table_of_content_id_${entries[i].target.id}`);
          break;
        }
        console.log(activeIntersection)
      }
    };

    let options = {
      root: document.querySelector(".main"),
      rootMargin: "0px",
      threshold: 1,
    };
    
    const arr = props.blogData.subContent.map((sub, index) => {
      return '#anchor_'+index
    })   
    const observer = new IntersectionObserver(callback, options);  
    const target = arr.map((ar) => {
      return document.querySelector(ar)
    })
    console.log(target)

    if(target[0]!==null){
      const test = target.map((tar) => {
        return observer.observe(tar)
      })
    }
     
    
   }, [scrollPosition])
  
    
    

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
   
   

   if(!mounted){
    return null
   }



   
   
  
    return (
      <ThemeProvider themes={["dark", "light"]} enableSystem={false}>
        <Layout>
          <Container maxWidth="lg" style={{ position: "relative" }}>
            <Card ref={containerRef} sx={{ maxWidth: "lg" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image="/img/banner.jpg"
                title="green iguana"
              />
            </Card>
            <div>
              <div className={classes.badge_container}>
                <CustomCard>
                  <h1 className={classes.title}>{props.blogData.title}</h1>
                  <p
                    className={classes.main_text}
                    style={{ marginBottom: ".5rem" }}
                  >
                    Written on {props.blogData.publish_date}
                    {props.blogData.writerId}
                  </p>
                  <div style={{ display: "flex", margin: "0" }}>
                    <Badge>Lasst updated January 30, 2023</Badge>
                  </div>
                </CustomCard>
              </div>
            </div>

            <div className={classes.content_container}>
              {/* START CONTENT */}

              {!isMobile && (
                <div className={classes.content}>
                  
                  <div className={classes.real_content}>
                    {props.blogData.subContent.map((sub, index) => {
                      return (
                        <div
                          className={classes.boxRef}
                          key={`desktop_content_${sub.id}`}
                          id={`anchor_${index}`}
                        >
                          <h2 className={classes.title}>{sub.name}</h2>
                          <div className={classes.main_text} key={sub.id}>
                            {props.blogData.content[index]
                              ? props.blogData.content[index].subContent.map(
                                  (s) =>
                                    s.name_type === "code" ? (
                                      <div className={classes.margin_bottom} key={s.sub_id}>
                                        <CopyBlock
                                          language="jsx"
                                          text={s.content_subcontent}
                                          showLineNumbers={lineNumbers}
                                          theme={dracula}
                                          wrapLines={true}
                                          codeBlock
                                        />
                                      </div>
                                    ) : s.name_type === "image" ? (
                                      <div className={classes.image_container} key={s.sub_id}>

                                        <Image
                                          className={classes.image}
                                          src={s.content_subcontent}
                                          width={3000}
                                          height={800}
                                          alt="image"
                                          quality="100"
                                          ></Image>
                                        </div>
                                    ) : (
                                      <div style={{ margin: "1rem 0" }} key={s.sub_id}>
                                        {parse(s.content_subcontent)}
                                      </div>
                                    )
                                )
                              : ""}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {isMobile && (
                <div className={classes.width_100}>
                  <div className={classes.real_content}>
                    {props.blogData.subContent.map((sub, index) => {
                      return (
                        <div
                          className={classes.boxRef}
                          key={`mobile_content_${sub.id}`}
                          id={`anchor_${index}`}
                        >
                          <h2 className={classes.title}>{sub.name}</h2>
                          <div className={classes.main_text} key={sub.id}>
                            {props.blogData.content[index]
                              ? props.blogData.content[index].subContent.map(
                                  (s) =>
                                    s.name_type === "code" ? (
                                      <div
                                        className={classes.margin_bottom}
                                        key={s.sub_id}
                                      >
                                        <CopyBlock
                                          language="jsx"
                                          text={s.content_subcontent}
                                          showLineNumbers={lineNumbers}
                                          theme={dracula}
                                          wrapLines={true}
                                          codeBlock
                                        />
                                      </div>
                                    ) : s.name_type === "image" ? (
                                      <div
                                        className={classes.image_container}
                                        key={s.sub_id}
                                      >
                                        <Image
                                          className={classes.image}
                                          src={s.content_subcontent}
                                          width={3000}
                                          height={800}
                                          alt="image"
                                          quality="100"
                                        ></Image>
                                      </div>
                                    ) : (
                                      <div
                                        style={{ margin: "1rem 0" }}
                                        key={s.sub_id}
                                      >
                                        {parse(s.content_subcontent)}
                                      </div>
                                    )
                                )
                              : ""}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* END CONTENT*/}

              {/* START SIDEBAR DESKTOP */}

              {!isMobile && (
                <div className={classes.table_content}>
                  <div className={classes.sticky_table_content}>
                    {props.blogData.subContent.map((sub, index) => {
                      return (
                        <div key={`sidebar_${sub.id}`}>
                          <p
                            id={`table_of_content_id_anchor_${index}`}
                            className={
                              activeIntersection ===
                                  `table_of_content_id_anchor_${index}`
                                ? classes.activeid
                                : classes.main_text
                                    
                            }
                            onClick={(e) => {
                              e.preventDefault();

                              document.querySelector(`#anchor_${index}`).scrollIntoView({ behavior: "smooth" });
                              setActiveIntersection(
                                `table_of_content_id_anchor_${index}`
                                
                              );
                            }}
                          >
                            {sub.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* END SIDEBAR DESKTOP */}
            </div>
            <Collaborate></Collaborate>
            {isMobile && <MobileNav></MobileNav>}
            <Footer></Footer>
          </Container>
        </Layout>
      </ThemeProvider>
    );
}

export async function getStaticPaths(){
   
   return {
     fallback: "blocking",
     paths: [
       {
         params: { blogId: "sdfasdfadsf" },
       },
     ],
   };
}
export async function getStaticProps(context){
    return {
      props: {
        blogData: {
          id: "sdfasdfadsf",
          color: ["#FFA6D6", "#A091FF"],
          description:
            "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
          publish_date: "2022-01-01",
          tags: ["Other"],
          subContent: [
            {
              id: "adf",
              name: "Bending light with refraction",
            },
            {
              id: "2ghdf",
              name: "Chromatic Dispersion",
            },
            {
              id: "fdgasdf",
              name: "Saturating and expanding",
            },
            {
              id: "fdshsd",
              name: "Adding volume and shininess",
            },
            {
              id: "bfdhds",
              name: "Bending",
            },
            {
              id: "hfgdfg",
              name: "Conclusion",
            },
            {
              id: "54tdgfsa",
              name: "Conclusion",
            },
          ],
          content: [
            {
              id: "1",
              subContent: [
                {
                  sub_id: "315hwfdga",
                  name_type: "text",
                  content_subcontent: `
                    Vercel is the platform for frontend developers, providing the speed and 
                    reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice. <br><br>
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.
                    <br><br>
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.
                                `,
                },
                {
                  sub_id: "2_akldfa4575tregdslkf",
                  name_type: "text",
                  content_subcontent: `
                    Vercel is the platform for frontend developers, providing the speed and 
                    reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice. <br><br>
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.
                    <br><br>
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.
                                `,
                },
                {
                  sub_id: "9657wregfgdf",
                  name_type: "code",
                  content_subcontent: `int main(void){
  puts("Hello adsfasdffasfasdfasdf!");
  return EXIT_SUCCESS;
}
                                `,
                },
                {
                  sub_id: "o78954iegfsgfd",
                  name_type: "image",
                  content_subcontent: "/img/avatar.png",
                },
                {
                  sub_id: "jgfbntr24",
                  name_type: "image",
                  content_subcontent: "/img/certificate/pnc.png",
                },
              ],
            },
            {
              id: "2",
              subContent: [
                {
                  sub_id: "5784564wgfdv",
                  name_type: "text",
                  content_subcontent: `
                    Vercel is the platform for frontend developers, providing the speed and 
                    reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice. <br><br>
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.
                    <br><br>
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.
                                `,
                },
                {
                  sub_id: "68562hfdbfd",
                  name_type: "image",
                  content_subcontent: "/img/avatar.png",
                },
              ],
            },
          ],
          title: "Welcome message",
          writerId: "kfj92u3r0",
        },
      },
    };

}
export default BlogDetail;
