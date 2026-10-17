import { Navigate, useLocation, useNavigate } from "react-router-dom";
import type {
  RegisterForm,
  VerifyEmailForm,
} from "../../../feature/auth/types/auth.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { verifyEmailSchema } from "../../../feature/auth/schemas/authSchemas";
import { DEMO_OTP } from "../../../feature/auth/utils/mockAuth";
import { authService } from "../../../feature/auth/services/authServices";
import Card from "../../../components/common/Card/Card";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";

type VeriFicationPurpose = "registration" | "reset-password";
interface VerificationState {
  email?: string;
  userId?: string;
  purpose?: VeriFicationPurpose;
  registrationData?: RegisterForm;
}
const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as VerificationState | null;
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<VerifyEmailForm>({
    resolver: yupResolver(verifyEmailSchema),
    defaultValues: {
      otp: "",
    },
  });
  if (!state?.email || !state.purpose) {
    return <Navigate to="/login" replace />;
  }

  const onSubmit = async (data: VerifyEmailForm) => {
    if (data.otp !== DEMO_OTP) {
      setError("otp", {
        message: "Invalid OTP.",
      });

      return;
    }

    if (state.purpose === "registration") {
      if (!state.registrationData) {
        setError("root", {
          message: "Registration information is missing.",
        });

        return;
      }

      try {
        await authService.register(state.registrationData);

        navigate("/login", {
          replace: true,

          state: {
            registrationSuccess: true,
          },
        });
      } catch (error) {
        setError("root", {
          message:
            error instanceof Error
              ? error.message
              : "Unable to create your account.",
        });
      }

      return;
    }

    if (state.purpose === "reset-password") {
      if (!state.userId) {
        setError("root", {
          message: "Unable to identify your account.",
        });

        return;
      }

      navigate("/reset-password", {
        replace: true,

        state: {
          userId: state.userId,
        },
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
                <i className="bi bi-envelope-check"></i>
              </div>
              <h2>Verify Email</h2>

              <p className="mb-0">
                Enter the 6 digit OTP sent to{" "}
                <strong className="text-white">{state.email}</strong>
              </p>
            </div>
            <div className="alert alert-warning" role="alert">
              Development OTP: <strong>{DEMO_OTP}</strong>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Input
                id="verificationOtp"
                type="text"
                label="OTP"
                placeholder="Enter 6 digit OTP"
                inputMode="numeric"
                maxLength={6}
                {...register("otp")}
                error={errors.otp?.message}
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
                Verify OTP
              </Button>
            </form>

            <div className="text-center mt-4">
              <span className="text-white-50">Didn't receive the OTP?</span>
              <Button type="button" className=" btn-primary p-0 ms-2">
                Resend OTP
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
