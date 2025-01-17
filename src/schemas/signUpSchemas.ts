import { z } from "zod";

export const  userNameValidation=z
    .string()
    .min(2,'username must be atleast 2 characters')
    .max(20,'username must be less than 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/,'username  must not contain special characters')

export const signUpSchema=z.object({
    username:userNameValidation,
    email:z.string().email({message:'Invalid email address'}),
    password:z.string().min(6,{message:'password must be atleast 6 characters'})
})
