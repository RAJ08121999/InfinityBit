import { z } from "zod";

export const userFormSchema = z.object({
  firstname: z.string().min(2, "firstname should have atleast 2 chars"),
  lastname: z.string().min(3, "lastname should have atleast 3 chars"),
  email: z.string().email("invalid email"),
  age: z.coerce.number().min(18, "age must be atleast 18").max(60, "age should be atmost 60"),
  password: z
    .string()
    .min(8, "password should have atleast 8 characters")
    .regex(/[A-Z]/, "Password should have atleast 1 uppercase")
    .regex(/[a-z]/, "Password should have atleast 1 lowercase")
    .regex(/[0-9]/, "Password should have atleast 1 digit")
    .regex(/[^A-Za-z0-9]/, "password should have atleast 1 special character"),
  confirmPassword: z.string(),
  phone: z.string().min(10, "phone number must have atleast 10 characters"),
  gender: z.enum(["male", "female", "others"], {
    errorMap: () => ({ message: "please select a valid gender" }),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password does not match",
  path: ["confirmPassword"],
});

export type UserFormSchema = z.infer<typeof userFormSchema>;
export type FormErrors = Partial<Record<keyof UserFormSchema, string[]>>;
