import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string(),
});

export const registrationSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirm_password: z.string(),
});

export const validateLogin = (data: any) => {
  try {
    return loginSchema.parse(data);
  } catch (error) {
    throw error;
  }
};

export const validateRegistration = (data: any) => {
  try {
    return registrationSchema.parse(data);
  } catch (error) {
    throw error;
  }
};
