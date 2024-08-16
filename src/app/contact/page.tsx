import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <main className="min-h-screen max-w-5xl m-auto">
      <h1 className="text-5xl text-center font-bold">
        Receive a free consultation?
      </h1>

      <div className="my-5 space-y-4">
        <p className="font-light text-lg">
          Would you like to know what we can do for you?
        </p>

        <p className="font-light text-lg">
          Fill out the form below and we will contact you within 48 hours for a
          free analysis.
        </p>

        <p className="font-light text-lg">
          No costs, no obligations, no annoying sales pitch. Guaranteed.
        </p>

        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
