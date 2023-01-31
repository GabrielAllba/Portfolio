import { Container } from '@mui/system';

import { ThemeProvider } from 'next-themes';
import Layout from 'components/layout/Layout'

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomCard  from 'components/ui/CustomCard/CustomCard';
import classes from './blogdetail.module.css'
import { useState, useEffect } from 'react';

function BlogDetail(props){
   const [mounted, setMounted] = useState(false);
   const [isMobile, setIsMobile] = useState(false);

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

   if(!mounted){
    return null
   }
   
  
    return (
      <ThemeProvider themes={["dark", "light"]} enableSystem={false}>
        <Layout>
          <Container maxWidth="lg" style={{ position: "relative" }}>
            <Card sx={{ maxWidth: "lg" }}>
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
                  <p className={classes.main_text}>
                    Written on {props.blogData.publish_date} by{" "}
                    {props.blogData.writerId}
                  </p>
                </CustomCard>
              </div>
            </div>
            <div className={classes.content_container}>

              {!isMobile && (
                <div className={classes.content}>
                  <CustomCard>
                    <div className={classes.real_content}>
                      <h1 className={classes.title}>{props.blogData.title}</h1>
                      <p className={classes.main_text}>
                        Written on {props.blogData.publish_date} by{" "}
                        {props.blogData.writerId}
                      </p>
                    </div>
                  </CustomCard>
                </div>
              )}
              {isMobile && (
                <div className={classes.width_100}>
                  <CustomCard>
                    <div className={classes.real_content}>
                      <h1 className={classes.title}>{props.blogData.title}</h1>
                      <p className={classes.main_text}>
                        Written on {props.blogData.publish_date} by{" "}
                        {props.blogData.writerId}
                      </p>
                    </div>
                  </CustomCard>
                </div>
              )}

              {!isMobile && (
                <div className={classes.table_content}>
                  <div className={classes.sticky_table_content}>
                    <h1 className={classes.title}>{props.blogData.title}</h1>
                    <p className={classes.main_text}>
                      Written on {props.blogData.publish_date} by{" "}
                      {props.blogData.writerId}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </Layout>
      </ThemeProvider>
    );
}

export async function getStaticPaths(){
   
   return {
     fallback: "blocking",
     paths: [{ 
        params: { blogId: "1" } 
    }],
   };
}
export async function getStaticProps(context){
    return {
      props: {
        blogData: {
          id: "1",
          color: ["#FFA6D6", "#A091FF"],
          content:
            "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.",
          description:
            "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
          publish_date: "2022-01-01",
          tags: ["Other"],
          title: "Welcome message",
          writerId: "1",
        },
      },
    };

}
export default BlogDetail;
