import { z } from "zod";

export const registerSchema=z.object({
    name:z.string()
    .min(3)
    .regex(/^[a-z-]+$/,{
        message:'Must be lowercase letters without spaces'
    }),
    email:z.string()
    .email(),
    phone:z.string(),
    password:z.string()
    .min(5)

})