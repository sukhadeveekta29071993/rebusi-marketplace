import { Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import Card from "../../../components/common/Card/Card";
import Input from "../../../components/common/Input/Input";
import type { ResetPasswordForm } from "../../../feature/auth/types/auth.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "../../../feature/auth/schemas/authSchemas";
import { authService } from "../../../feature/auth/services/authServices";
import Button from "../../../components/common/Button/Button";

interface ResetPasswordState {
  userId?: string;
}
const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as ResetPasswordState | null;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordForm>({
    resolver: yupResolver(resetPasswordSchema),

    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  if (!state?.userId) {
    return <Navigate to="/forgot-password" replace />;
  }

  const onSubmit = async (data: ResetPasswordForm) => {
    try {
      await authService.updatePassword(state.userId!, data.password);

      navigate("/login", {
        replace: true,

        state: {
          passwordResetSuccess: true,
        },
      });
    } catch {
      setError("root", {
        message: "Unable to reset password. Please try again.",
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
                <i className="bi bi-shield-lock"></i>
              </div>
              <h2>Reset Password</h2>

              <p className="mb-0">
                Create a new secure password for your account.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                id="newPassword"
                type="password"
                label="New Password"
                placeholder="Enter new password"
                autoComplete="new-password"
                {...register("password")}
                error={errors.password?.message}
              />
              <div className="mt-3">
                <Input
                  id="confirmNewPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                  {...register("confirmPassword")}
                  error={errors.confirmPassword?.message}
                />
              </div>
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
                Reset Password
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
