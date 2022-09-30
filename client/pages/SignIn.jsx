import * as React from "react";
import Box from "@mui/material/Box";

import { TextField, Typography } from "@mui/material";

const SignIn = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: "150px",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h2" color="primary">
        Sign in
      </Typography>
      <TextField
        id="outlined-email-input"
        label="Enter your email"
        type="email"
        autoComplete="current-password"
        variant="outlined"
      />
      <TextField
        id="outlined-password-input"
        label="Enter your password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
    </Box>
  );
};

export default SignIn;
