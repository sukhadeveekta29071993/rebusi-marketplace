import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import type { RegisterForm } from "../../../feature/auth/types/auth.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../feature/auth/schemas/authSchemas";
import { authService } from "../../../feature/auth/services/authServices";
import Card from "../../../components/common/Card/Card";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import Input from "../../../components/common/Input/Input";
import Checkbox from "../../../components/common/Checkbox/Checkbox";
import Button from "../../../components/common/Button/Button";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const handleSubmitRegisterForm = async (data: RegisterForm) => {
    try {
      const email = data.email.trim().toLowerCase();
      const existingEmail = await authService.getUserByEmail(email);
      if (existingEmail) {
        setError("email", {
          message: "An account with this email already exists.",
        });
        return;
      }
      const existingPhone = await authService.getUserByPhone(data.phone);
      if (existingPhone) {
        setError("phone", {
          message: "An account with this mobile number already exists.",
        });

        return;
      }
      navigate("/verify-email", {
        state: {
          email,
          purpose: "registration",
          registrationData: {
            ...data,
            email,
          },
        },
      });
    } catch {
      setError("root", {
        message: "Unable to process registration. Please try again.",
      });
    }
  };
  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-7 col-xl-6">
          <Card dark className="shadow-lg">
            <div className="text-center mb-4 p-2">
              <AuthHeader />
              <h2>Create Account</h2>

              <p className="mb-0">
                Join ReBusi and discover new business opportunities.
              </p>
            </div>
            <form onSubmit={handleSubmit(handleSubmitRegisterForm)}>
              <div className="row g-3">
                <div className="col-12">
                  <Input
                    id="name"
                    type="text"
                    label="Full Name"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    {...register("name")}
                    error={errors.name?.message}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                </div>

                <div className="col-md-6">
                  <Input
                    id="phone"
                    type="phone"
                    label="Mobile Number"
                    placeholder="Enter your 10 digit number"
                    inputMode="numeric"
                    maxLength={10}
                    autoComplete="tel"
                    {...register("phone")}
                    error={errors.phone?.message}
                  />
                </div>

                <div className="col-md-6">
                  <Input
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Create password"
                    autoComplete="new-password"
                    {...register("password")}
                    error={errors.password?.message}
                  />
                </div>

                <div className="col-md-6">
                  <Input
                    id="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm password"
                    autoComplete="new-password"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword?.message}
                  />
                </div>
              </div>
              <Checkbox
                id="registerTerms"
                label="I agree to the terms and conditions."
                wrapperClassName="mt-3"
                error={errors.acceptTerms?.message}
                {...register("acceptTerms")}
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
                Create Account
              </Button>
            </form>
            <p className="text-center mt-4 mb-0">
              Already have an account ?{" "}
              <Link to="/login" className="fw-semibold">
                Sign In
              </Link>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
