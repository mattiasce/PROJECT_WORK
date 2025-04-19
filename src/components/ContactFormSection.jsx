import ContactForm from "../components/ContactForm"

export default function ContactFormSection ({children}) {
    return (
        <section className='ContactFormSection min-h-screen md:flex gap-4 my-2 py-4 w-[80%] mx-auto text-black m-auto items-center content-center'>
          <div className='md:w-[50%]'>
            <h2 className='font-bold text-[4em] md:text-left leading-none tracking-tight'>{children}</h2>
          </div>
      
          <div className='md:w-[50%]'>
            <ContactForm />
          </div>
          
        </section>
    )
}