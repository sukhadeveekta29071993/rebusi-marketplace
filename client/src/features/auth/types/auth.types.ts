export type LoginType = "email" | "otp";

export interface AuthUser {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  loginType: LoginType;
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
}
