"use client";

import React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      receiveUpdates: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("Full name is required")
        .min(2, "Full name must be at least 2 characters"),
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
          Sign up
        </Typography>

        <TextField
          fullWidth
          id="fullName"
          name="fullName"
          label="Full Name"
          variant="outlined"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />

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
          Sign up
        </Button>

        <Typography variant="body2" textAlign="center" mt={2}>
          Already have an account?{" "}
          <Link
            href="/pages/security/login"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Sign in
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
