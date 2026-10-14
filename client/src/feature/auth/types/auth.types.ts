export interface User {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  role?: string;
}

export interface UserRecord extends User {
  password?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  phone?: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
