import React, { useState } from "react";
import { Button, Box, Paper, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <Paper
        sx={{
          minHeight: "40vh",
          maxWidth: "540px",
          margin: "auto",
          marginTop: "25vh",
          p: "32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="column" spacing={2}>
          <TextField
            fullWidth
            required
            label="Email"
            variant="outlined"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            required
            label="Password"
            variant="outlined"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            // Need to make api call to make authentication
            onClick={() => navigate("/dashboard")}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Layout>
  );
}

export default Login;
