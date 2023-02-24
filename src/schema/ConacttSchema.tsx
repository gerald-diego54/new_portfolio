import z from "zod";

export const ContactSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
    subject: z.string(),
    message: z.string(),
});

export type IContactSchema = z.infer<typeof ContactSchema>;
