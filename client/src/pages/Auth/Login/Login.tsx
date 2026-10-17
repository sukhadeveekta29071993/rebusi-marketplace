import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import Button from "../../../components/common/Button/Button";
import Card from "../../../components/common/Card/Card";
import Input from "../../../components/common/Input/Input";

import {
  emailLoginSchema,
  otpLoginSchema,
} from "../../../feature/auth/schemas/authSchemas";

import { authService } from "../../../feature/auth/services/authServices";

import { loginSuccess } from "../../../feature/auth/slices/authSlice";

import type {
  EmailLoginForm,
  OtpLoginForm,
  User,
} from "../../../feature/auth/types/auth.types";

import {
  createMockToken,
  decodeGoogleCredential,
  DEMO_OTP,
  sanitizeUser,
} from "../../../feature/auth/utils/mockAuth";

import { useAppDispatch } from "../../../store/hooks";
import Checkbox from "../../../components/common/Checkbox/Checkbox";

type LoginType = "otp" | "email";

interface LocationState {
  from?: string;
  registrationSuccess?: boolean;
  passwordResetSuccess?: boolean;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [loginType, setLoginType] = useState<LoginType>("otp");

  const [otpSent, setOtpSent] = useState(false);

  const [otp, setOtp] = useState("");

  const [phoneForOtp, setPhoneForOtp] = useState("");

  const [otpLoading, setOtpLoading] = useState(false);

  const [otpError, setOtpError] = useState("");

  const [googleError, setGoogleError] = useState("");

  const locationState = location.state as LocationState | null;

  const redirectPath = locationState?.from ?? "/";

  const emailForm = useForm<EmailLoginForm>({
    resolver: yupResolver(emailLoginSchema),

    defaultValues: {
      email: "",
      password: "",
      acceptTerms: false,
    },
  });

  const otpForm = useForm<OtpLoginForm>({
    resolver: yupResolver(otpLoginSchema),

    defaultValues: {
      phone: "",
      acceptTerms: false,
    },
  });

  const completeLogin = (user: User) => {
    dispatch(
      loginSuccess({
        user,
        token: createMockToken(),
      }),
    );

    navigate(redirectPath, {
      replace: true,
    });
  };

  const handleEmailLogin = async (data: EmailLoginForm) => {
    emailForm.clearErrors("root");

    try {
      const userRecord = await authService.getUserByEmail(
        data.email.trim().toLowerCase(),
      );

      if (!userRecord || userRecord.password !== data.password) {
        emailForm.setError("root", {
          message: "Invalid email or password.",
        });

        return;
      }
      if (userRecord.provider === "google" && !userRecord.password) {
        emailForm.setError("root", {
          message:
            "This account uses Google Sign-In. Please continue with Google.",
        });
        return;
      }

      completeLogin(sanitizeUser(userRecord));
    } catch {
      emailForm.setError("root", {
        message: "Unable to login. Please try again.",
      });
    }
  };

  const handleSendOtp = async (data: OtpLoginForm) => {
    setOtpError("");
    setOtpLoading(true);

    try {
      const user = await authService.getUserByPhone(data.phone);

      if (!user) {
        setOtpError("No account found with this mobile number.");

        return;
      }

      setPhoneForOtp(data.phone);
      setOtpSent(true);
    } catch {
      setOtpError("Unable to send OTP. Please try again.");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setOtpError("");

    if (!/^\d{6}$/.test(otp)) {
      setOtpError("Enter a valid 6 digit OTP.");

      return;
    }

    if (otp !== DEMO_OTP) {
      setOtpError(`Invalid OTP. Development OTP is ${DEMO_OTP}.`);

      return;
    }

    try {
      const userRecord = await authService.getUserByPhone(phoneForOtp);

      if (!userRecord) {
        setOtpError("User not found.");
        return;
      }

      completeLogin(sanitizeUser(userRecord));
    } catch {
      setOtpError("Unable to verify OTP. Please try again.");
    }
  };

  const handleGoogleSuccess = async (response: CredentialResponse) => {
    setGoogleError("");

    try {
      if (!response.credential) {
        setGoogleError("Google authentication failed.");

        return;
      }

      const googleUser = decodeGoogleCredential(response.credential);

      if (!googleUser.email) {
        setGoogleError("Google account email is not available.");

        return;
      }

      const email = googleUser.email.trim().toLowerCase();

      let userRecord = await authService.getUserByEmail(email);

      if (!userRecord) {
        userRecord = await authService.createGoogleUser({
          name: googleUser.name ?? email.split("@")[0],

          email,

          googleId: googleUser.sub,

          avatar: googleUser.picture,
        });
      }

      completeLogin(sanitizeUser(userRecord));
    } catch {
      setGoogleError("Unable to continue with Google. Please try again.");
    }
  };

  const switchLoginType = (type: LoginType) => {
    setLoginType(type);

    setOtpSent(false);
    setOtp("");
    setOtpError("");
    setGoogleError("");

    emailForm.clearErrors();
    otpForm.clearErrors();
  };

  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-7 col-xl-6">
          <Card dark className="shadow-lg">
            <div className="text-center mb-4 p-2">
              <AuthHeader />
              <h2>Welcome Back</h2>

              <p className="mb-0">Login to continue your ReBusi journey.</p>
            </div>

            {locationState?.registrationSuccess && (
              <div className="alert alert-success" role="alert">
                Account verified successfully. You can now login.
              </div>
            )}
            {locationState?.passwordResetSuccess && (
              <div className="alert alert-success" role="alert">
                Password reset successfully. Please login with your new
                password.
              </div>
            )}
            <div className="btn-group w-100 mb-4" role="group">
              <Button
                type="button"
                className={` ${loginType === "otp" ? "btn-primary" : "btn-outline"}`}
                onClick={() => switchLoginType("otp")}
              >
                Mobile Otp
              </Button>

              <Button
                type="button"
                className={` ${loginType === "email" ? "btn-primary" : "btn-outline"}`}
                onClick={() => switchLoginType("email")}
              >
                Email
              </Button>
            </div>

            {loginType === "otp" && (
              <>
                {!otpSent ? (
                  <form onSubmit={otpForm.handleSubmit(handleSendOtp)}>
                    <Input
                      id="phone"
                      type="tel"
                      label="Mobile Number"
                      placeholder="Enter 10 digit mobile number"
                      maxLength={10}
                      {...otpForm.register("phone")}
                      error={otpForm.formState.errors.phone?.message}
                    />

                    <Checkbox
                      id="otpTerms"
                      label="I agree to the terms and conditions."
                      wrapperClassName="mt-3"
                      error={otpForm.formState.errors.acceptTerms?.message}
                      {...otpForm.register("acceptTerms")}
                    />
                    {otpError && (
                      <div className="alert alert-danger mt-3" role="alert">
                        {otpError}
                      </div>
                    )}
                    <Button
                      type="submit"
                      loading={otpLoading}
                      className="w-100 mt-4"
                    >
                      Send Otp
                    </Button>
                  </form>
                ) : (
                  <div>
                    <p>
                      Enter the otp sent to <strong>+91 {phoneForOtp}</strong>
                    </p>
                    <Input
                      id="otp"
                      inputMode="numeric"
                      placeholder="Enter 6 digit otp"
                      maxLength={6}
                      value={otp}
                      onChange={(event) =>
                        setOtp(event.target.value.replace(/\D/g, ""))
                      }
                    />
                    <div className="form-text mt-2">
                      Development OTP: {DEMO_OTP}
                    </div>
                    {otpError && (
                      <div className="alert alert-danger mt-3" role="alert">
                        {" "}
                        {otpError}
                      </div>
                    )}
                    <Button
                      type="button"
                      className="w-100 mt-4"
                      onClick={handleVerifyOtp}
                    >
                      Verify OTP
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-link w-100 mt-2"
                      onClick={() => {
                        setOtpSent(false);
                        setOtp("");
                        setOtpError("");
                      }}
                    >
                      Change Mobile Number
                    </Button>
                  </div>
                )}
              </>
            )}

            {loginType === "email" && (
              <form onSubmit={emailForm.handleSubmit(handleEmailLogin)}>
                <Input
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="Enter Your Email"
                  {...emailForm.register("email")}
                  error={emailForm.formState.errors.email?.message}
                />
                <div className="mt-3">
                  <Input
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    {...emailForm.register("password")}
                    error={emailForm.formState.errors.password?.message}
                  />
                  <div className="d-flex justify-content-between gap-3 mt-3 align-items-start">
                    <Checkbox
                      id="emailTerms"
                      label="I agree to the terms."
                      error={emailForm.formState.errors.acceptTerms?.message}
                      {...emailForm.register("acceptTerms")}
                    />
                    <Link to="/forgot-password" className="text-nowrap">
                      Forgot Password?
                    </Link>
                  </div>
                  {emailForm.formState.errors.root?.message && (
                    <div className="alert alert-danger mt-3" role="alert">
                      {emailForm.formState.errors.root.message}
                    </div>
                  )}
                  <Button
                    type="submit"
                    loading={emailForm.formState.isSubmitting}
                    className="w-100 mt-4"
                  >
                    Sign In
                  </Button>
                </div>
              </form>
            )}
            <div className="d-flex align-items-center gap-3 my-4">
              <hr className="flex-grow-1 border-secondary" />
              <span className="text-white-50 small">OR</span>
              <hr className="flex-grow-1 border-secondary" />
            </div>
            <div className="d-flex justify-content-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() =>
                  setGoogleError(
                    "Google authentication failed. Please try again.",
                  )
                }
                theme="filled_black"
                size="large"
                shape="rectangular"
                text="continue_with"
              />
            </div>
            {googleError && (
              <div className="alert alert-danger mt-3 mb-0" role="alert">
                {googleError}
              </div>
            )}
            <p className="text-center mt-4 mb-0">
              Don't have an account?{" "}
              <Link to="/register" className="fw-semibold">
                Register
              </Link>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
