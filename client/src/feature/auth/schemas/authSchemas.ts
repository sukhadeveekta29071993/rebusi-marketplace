import * as yup from "yup";

export const emailLoginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),

  password: yup.string().required("Password is required"),

  acceptTerms: yup
    .boolean()
    .oneOf([true], "Please accept the terms and conditions")
    .required(),
});

export const otpLoginSchema = yup.object({
  phone: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10 digit mobile number"),

  acceptTerms: yup
    .boolean()
    .oneOf([true], "Please accept the terms and conditions")
    .required(),
});

export const registerSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .required("Name is required"),

  email: yup
    .string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),

  phone: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10 digit mobile number"),

  password: yup
    .string()
    .min(8, "Password must contain at least 8 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),

  acceptTerms: yup
    .boolean()
    .oneOf([true], "Please accept the terms and conditions")
    .required(),
});

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),
});

export const verifyEmailSchema = yup.object({
  otp: yup
    .string()
    .required("OTP is required")
    .matches(/^\d{6}$/, "OTP must be 6 digits"),
});

export const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .min(8, "Password must contain at least 8 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});
