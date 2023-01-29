import React from "react";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import { motion } from "framer-motion";

import classes from './Loading.module.css'

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div className={classes.lds_ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
