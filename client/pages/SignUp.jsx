import { Box, TextField, Typography } from "@mui/material";

import React from "react";

const SignUp = () => {
  const handleSubmit = () => {};
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
          Sign up
        </Typography>
        <TextField
          id="outlined-name-input"
          label="Enter your name"
          type="name"
          variant="outlined"
        />
        <TextField
          id="outlined-email-input"
          label="Enter your email"
          type="Email"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Enter your password"
          type="password"
          variant="outlined"
          onSubmit={handleSubmit}
        />
      </Box>
    </Box>
  );
};

export default SignUp;
