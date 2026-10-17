import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import type { ForgotPasswordForm } from "../../../feature/auth/types/auth.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "../../../feature/auth/schemas/authSchemas";
import { authService } from "../../../feature/auth/services/authServices";
import Card from "../../../components/common/Card/Card";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordForm>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmitForgotPassword = async (data: ForgotPasswordForm) => {
    try {
      const email = data.email.trim().toLowerCase();
      const user = await authService.getUserByEmail(email);

      if (!user) {
        setError("email", {
          message: "No account found with this email.",
        });

        return;
      }
      if (user.provider === "google") {
        setError("email", {
          message:
            "This account uses Google Sign-In. Please continue with Google.",
        });

        return;
      }
      navigate("/verify-email", {
        state: {
          email,
          userId: user.id,
          purpose: "reset-password",
        },
      });
    } catch {
      setError("root", {
        message: "Unable to process your request. Please try again.",
      });
    }
  };
  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-6 col-xl-5">
          <Card dark className="shadow-lg">
            <div className="text-center mb-4 p-2">
              <AuthHeader />
              <div className="fs-1  mb-3" style={{ color: "var(--orange)" }}>
                <i className="bi bi-key"></i>
              </div>
              <h2>Forgot Password?</h2>
              <p className="mb-0">
                Enter your registered email address to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit(handleSubmitForgotPassword)}>
              <Input
                id="forgotEmail"
                type="email"
                label="Email"
                placeholder="Enter your email"
                autoComplete="email"
                {...register("email")}
                error={errors.email?.message}
              />

              {errors.root?.message && (
                <div className="alert alert-danger mt-3" role="alert">
                  {errors.root.message}
                </div>
              )}
              <Button
                type="submit"
                loading={isSubmitting}
                className="w-100 mt-4"
              >
                Send OTP
              </Button>
            </form>
            <div className="text-center mt-4">
              <Link to="/login" className="text-decoration-none fw-semibold">
                Back to Sign In
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
