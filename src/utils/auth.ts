import { Session } from "next-auth";

/**
 * Checks if the user has the specified role
 */
export const hasRole = (session: Session | null, role: string): boolean => {
  if (!session || !session.user || !session.user.role) return false;
  return session.user.role === role;
};

/**
 * Checks if the user is an admin
 */
export const isAdmin = (session: Session | null): boolean => {
  return hasRole(session, "admin");
};

/**
 * Get the mock credentials for easy login in development
 */
export const getMockCredentials = () => {
  return [
    { email: "admin@example.com", password: "password123", role: "admin" },
    { email: "emma@example.com", password: "password123", role: "user" },
  ];
};
