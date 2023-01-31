import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form } from "react-router-dom";
import Alert from "@mui/material/Alert";

import classes from './index.module.css'
import { Card } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "store";
import { useEffect } from "react";
import { getAuthToken } from "util/auth";
import { useRouter } from "next/router";

export default function SignIn() {
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [response, setResponse] = useState(null)
  const dispatch = useDispatch()
  
  const router = useRouter()

  useEffect(() => {
        var token_item = localStorage.getItem("token");
        var expiration_item = localStorage.getItem("expiration");

        console.log(token_item);
        console.log(expiration_item);
    
  }, []);

  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    const data = {
      email: formdata.get('email'),
      password: formdata.get('password')
    }


    setIsSubmitting(true);
    

    const result = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });


    const res = await result.json()
    console.log(res)

    if(res.status===200){
      router.push('/admin/home')
    }
    
    

    setResponse(res)

    setIsSubmitting(false);
    
    
  };
  
  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          background="primary.main"
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          {response!=null && !response.errors && <Alert style={{marginBottom: '1rem'}} severity="success">{response.message}</Alert>}
          {response!=null && response.errors && <Alert style={{marginBottom: '1rem'}} severity="error">{response.errors.credentials}</Alert>}
          <Card variant="outlined" style={{ padding: "2rem" }}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                disabled={isSubmitting}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Card>
        </Box>
      </Container>
    </div>
  );
}
