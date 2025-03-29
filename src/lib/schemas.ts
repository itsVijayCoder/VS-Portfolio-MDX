import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is Required.' })
    .min(2, { message: 'Must be at least 2 Character.' }),
  email: z
    .string()
    .min(1, { message: 'Email is Required.' })
    .email('Invalid Email.'),
  message: z.string().min(1, { message: 'Message is Required.' })
})

export const NewsletterFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is Required.' })
    .email('Invalid Email.')
})
