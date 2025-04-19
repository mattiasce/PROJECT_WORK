import BtnForm from "./BtnForm";

export default function ContactForm() {
    
    return (
        <form id="contact-form" className="m-2 p-4 w-full text-center">
            <input type="text" id="nome" name="nome" required placeholder="Inserisci tuo nome" className='w-[100%] my-2 p-4' />
            <hr className="border-black" />

            <input type="email" id="email" name="email" required placeholder="Inserisci la tua email" className='w-[100%] my-2 p-4' />
            <hr className="border-black" />

            <textarea id="messaggio" name="messaggio" rows="5" required placeholder="Scrivi il tuo messaggio" className='w-[100%] my-2 p-4' />
            <BtnForm>Invia</BtnForm>
        </form>
    );
}