import type { User } from "../types/auth.types";

const AUTH_USER_KEY = "rebusi-user";
const AUTH_TOKEN_KEY = "rebusi-token";

export const getStoredUser = (): User | null => {
  try {
    const storedUser = localStorage.getItem(AUTH_USER_KEY);

    if (!storedUser) {
      return null;
    }

    return JSON.parse(storedUser) as User;
  } catch {
    localStorage.removeItem(AUTH_USER_KEY);

    return null;
  }
};

export const getStoredToken = (): string | null => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

export const setAuthStorage = (user: User, token: string): void => {
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));

  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const clearAuthStorage = (): void => {
  localStorage.removeItem(AUTH_USER_KEY);
  localStorage.removeItem(AUTH_TOKEN_KEY);
};
