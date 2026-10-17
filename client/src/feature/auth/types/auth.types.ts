export type LoginType = "email" | "otp" | "google";
export interface User {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  role?: string;
  provider: LoginType;
  avatar?: string;
}

export interface UserRecord extends User {
  password?: string;
  googleId: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface EmailLoginForm {
  email: string;
  password: string;
  acceptTerms: boolean;
}
export interface OtpLoginForm {
  phone: string;
  acceptTerms: boolean;
}

export interface RegisterForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface ForgotPasswordForm {
  email: string;
}

export interface VerifyEmailForm {
  otp: string;
}

export interface ResetPasswordForm {
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface GoogleCredentialPayload {
  sub: string;
  name?: string;
  email?: string;
  picture?: string;
}
