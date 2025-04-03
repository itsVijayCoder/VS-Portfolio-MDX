'use server'
import { z } from 'zod'
import { ContactFormSchema } from './schemas'
import ContactFormEmail from '@/emails/contact-form-email'
import { Resend } from 'resend'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
// type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>

// const reactElement = ContactFormEmail({ name="vijay", email="", message })
// console.log(reactElement) // Should be a React element, not a Promise

// const resend = new Resend(process.env.RESEND_API_KEY)

const resend = new Resend(process.env.RESEND_API_KEY)
export const sendEmail = async (data: ContactFormInputs) => {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data
    const { data, error } = await resend.emails.send({
      //   from: 'hello@hamedbahram.io',
      from: 'onboarding@resend.dev',
      // to: [email],
      to: 'bvijays1258@gmail.com',
      cc: ['hello@hamedbahram.io'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: await ContactFormEmail({ name, email, message })
    })

    if (!data || error) {
      console.log(error)
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}

// export async function subscribe(data: NewsletterFormInputs) {
//     const result = NewsletterFormSchema.safeParse(data)

//     if (result.error) {
//       return { error: result.error.format() }
//     }

//     try {
//       const { email } = result.data
//       const { data, error } = await resend.contacts.create({
//         email: email,
//         audienceId: process.env.RESEND_AUDIENCE_ID as string
//       })

//       if (!data || error) {
//         throw new Error('Failed to subscribe')
//       }

//       // TODO: Send a welcome email

//       return { success: true }
//     } catch (error) {
//       return { error }
//     }
//   }
