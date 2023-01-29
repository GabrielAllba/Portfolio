import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";

import Gradient from "rgt";
import classes from './index.module.css'

function Hero(){
    return (
      <Box sx={{ height: "42rem", width: "100%" }}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "inline-block",
            p: 1,
            mx: 1,
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
        </Box>
      </Box>
    );
}
export default Hero