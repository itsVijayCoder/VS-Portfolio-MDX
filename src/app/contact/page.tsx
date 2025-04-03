import ContactForm from '@/components/contact-form';

export default function Contact() {
  return (
    <section className='pt-40 pb-24'>
      <div className='container max-w-3xl'>
        <h2 className='title text-4xl font-bold'>
          Let&apos;s talk about your project
        </h2>
        <p className='text-muted-foreground mt-2 text-lg leading-8'>
          We help companies and individuals build out their digital presence.
        </p>

        <ContactForm />
      </div>
    </section>
  );
}
