import axiosInstance from "../../../Api/Api";

import type { RegisterPayload, UserRecord } from "../types/auth.types";

const getUsers = async (): Promise<UserRecord[]> => {
  const response = await axiosInstance.get<UserRecord[]>("/users");

  return response.data;
};

const createUser = async (payload: RegisterPayload): Promise<UserRecord> => {
  const response = await axiosInstance.post<UserRecord>("/users", payload);

  return response.data;
};

export const authService = {
  getUsers,
  createUser,
};
