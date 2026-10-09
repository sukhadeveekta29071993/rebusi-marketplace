import type { AuthUser } from "../types/auth.types";

const AUTH_STORAGE_KEY = "rebusi_auth_user";

export const getStoredUser = (): AuthUser | null => {
  try {
    const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);

    if (!storedUser) {
      return null;
    }

    const user: unknown = JSON.parse(storedUser);

    if (
      typeof user !== "object" ||
      user === null ||
      !("name" in user) ||
      typeof user.name !== "string" ||
      !("loginType" in user) ||
      (user.loginType !== "email" && user.loginType !== "otp")
    ) {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      return null;
    }

    return user as AuthUser;
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
};

export const saveStoredUser = (user: AuthUser): void => {
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  } catch {
    // Storage may be unavailable or full.
  }
};

export const clearStoredUser = (): void => {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch {
    // Storage may be unavailable.
  }
};
