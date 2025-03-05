"use client";

import React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: 2,
          p: 2,
        }}
      >
        <Typography
          variant="h4"
          textAlign="left"
          mb={2}
          sx={{ textTransform: "uppercase" }}
        >
          Sign in
        </Typography>

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 1,
            backgroundColor: "#1a1a1a",
            textTransform: "uppercase",
            borderRadius: "8px",
          }}
        >
          Sign in
        </Button>

        <Typography variant="body2" textAlign="center" mt={2}>
          Don’t have an account?{" "}
          <Link
            href="/pages/security/signup"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Sign up
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
