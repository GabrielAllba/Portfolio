import { Box } from "@mui/system";

import Gradient from "rgt";
import classes from './index.module.css'
import Badge from "components/ui/Badge/Badge";
import {BsArrowUpRight} from 'react-icons/bs'
import { Container } from "@mui/material";
import Link from 'next/link'
function Hero(){
    return (
      <Container maxWidth="lg">
        <Box sx={{ height: "42rem", width: "100%" }}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "inline-block",
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={classes.avatar_container}>
              <img
                className={classes.avatar}
                src='/img/avatar.png'
              ></img>
            </div>
            <h1 className={classes.title}>
              <Gradient dir="left-to-right" from="#6D9EE7" to="#86ABE5">
                Full Stack{" "}
              </Gradient>
              Web Developer &{" "}
              <Gradient dir="left-to-right" from="#FFBA60" to="#FFD399">
                {" "}
                DevOps{" "}
              </Gradient>
              Enthusiasts
            </h1>
            <p className={classes.sub_title}>
              Love design, code and organized something
            </p>
            <div className={classes.social_media}>
              <Link href="/" target="_blank">
                <Badge>LinkedIn</Badge>
              </Link>
              <Link href="/">
                <Badge>GitHub</Badge>
              </Link>
              <Link href="/">
                <Badge>CV</Badge>
              </Link>
            </div>
          </Box>
        </Box>
      </Container>
    );
}
export default Hero