import { z } from "zod";

export const messageSchema=z.object({
    content:z
    .string()
    .min(10,{message:'Message must be atleast of 10 character'})
    .max(300,{message:'Message must be at max of 300 characters'})
})