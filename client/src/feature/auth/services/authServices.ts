import axiosInstance from "../../../Api/Api";

import type { RegisterForm, UserRecord } from "../types/auth.types";

const getUserByEmail = async (email: string): Promise<UserRecord | null> => {
  const response = await axiosInstance.get<UserRecord[]>("/users", {
    params: {
      email: email.trim().toLowerCase(),
    },
  });

  return response.data[0] ?? null;
};

const getUserByPhone = async (phone: string): Promise<UserRecord | null> => {
  const response = await axiosInstance.get<UserRecord[]>("/users", {
    params: {
      phone,
    },
  });

  return response.data[0] ?? null;
};

const register = async (data: RegisterForm): Promise<UserRecord> => {
  const email = data.email.trim().toLowerCase();

  const existingEmail = await getUserByEmail(email);

  if (existingEmail) {
    throw new Error("An account with this email already exists.");
  }

  const existingPhone = await getUserByPhone(data.phone);

  if (existingPhone) {
    throw new Error("An account with this mobile number already exists.");
  }

  const response = await axiosInstance.post<UserRecord>("/users", {
    name: data.name.trim(),
    email,
    phone: data.phone,
    password: data.password,
    role: "user",
    provider: "email",
  });

  return response.data;
};

const createGoogleUser = async (data: {
  name: string;
  email: string;
  googleId: string;
  avatar?: string;
}): Promise<UserRecord> => {
  const response = await axiosInstance.post<UserRecord>("/users", {
    name: data.name,
    email: data.email.toLowerCase(),
    role: "user",
    provider: "google",
    googleId: data.googleId,
    avatar: data.avatar,
  });

  return response.data;
};

const updatePassword = async (
  id: string,
  password: string,
): Promise<UserRecord> => {
  const response = await axiosInstance.patch<UserRecord>(`/users/${id}`, {
    password,
  });

  return response.data;
};

export const authService = {
  getUserByEmail,
  getUserByPhone,
  register,
  createGoogleUser,
  updatePassword,
};
