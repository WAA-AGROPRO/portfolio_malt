import "./Contact.scss"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w9eszsf', 'template_mnujzsc', form.current, 'aHEIFD2aCuOAb90Uc')
    .then((result) => {
        console.log(result.text);
        window.alert('Votre message a été envoyé avec succès!');
        form.current.reset();
    }, (error) => {
        console.log(error.text);
        window.alert('Une erreur est survenue, veuillez réessayer.');
        form.current.reset();
    });
  }


  return (
    <div className="contact">
      <div className="contact__container">
        <h1 className="contact__title">Contact</h1>
        <h2 className="contact__legend">Parlez-nous de votre projet !</h2>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Nom" name="name" id='name' value={form.name} required />
              <label htmlFor="name" className="form__label">Nom</label>

          </div>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Email" name="email" id='email' value={form.email} required />
              <label htmlFor="name" className="form__label">Email</label>
            </div>
            <div className="form__group field">
            <input type="input" className="form__field" placeholder="Telephone" name="telephone" value={form.telephone} id='phone' required />
              <label htmlFor="name" className="form__label">Téléphone</label>
            </div>
            <div className="form__group field">
            <input type="input" className="form__field" placeholder="Sujet" name="subject" id='subject' value={form.subject} />
              <label htmlFor="name" className="form__label">Sujet</label>
            </div>
            <div className="form__group field">
            <textarea type="input" className="form__field resize" placeholder="Message" name="message" value={form.message} id='sujet' />
              <label htmlFor="name" className="form__label">Message</label>
            </div>
            <button className="contact__form__button" type="submit">Envoyer</button>
        </form>     
      </div>

    </div>
  )
}

export default ContactForm