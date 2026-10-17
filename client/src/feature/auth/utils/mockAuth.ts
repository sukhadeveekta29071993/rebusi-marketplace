import type { GoogleCredentialPayload, UserRecord } from "../types/auth.types";

export const DEMO_OTP = "123456";

export const createMockToken = (): string => {
  return `rebusi-demo-${Date.now()}`;
};

export const sanitizeUser = (userRecord: UserRecord) => {
  const { password: _password, googleId: _googleId, ...user } = userRecord;
  void _password;
  void _googleId;

  return user;
};

export const decodeGoogleCredential = (
  credential: string,
): GoogleCredentialPayload => {
  const parts = credential.split(".");

  if (parts.length !== 3) {
    throw new Error("Invalid Google credential.");
  }

  const base64Url = parts[1];

  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

  const paddedBase64 = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");

  const decoded = window.atob(paddedBase64);

  const jsonPayload = decodeURIComponent(
    Array.from(decoded)
      .map(
        (character) =>
          `%${character.charCodeAt(0).toString(16).padStart(2, "0")}`,
      )
      .join(""),
  );

  return JSON.parse(jsonPayload) as GoogleCredentialPayload;
};
