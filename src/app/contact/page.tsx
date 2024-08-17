import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <main className="min-h-screen lg:max-w-5xl max-w-sm m-auto">
      <h1 className="lg:text-5xl text-xl lg:text-center font-bold">
        Receive a free consultation?
      </h1>

      <div className="lg:my-5 my-2.5 lg:space-y-4 space-y-2">
        <p className="font-light lg:text-lg text-sm">
          Would you like to know what we can do for you?
        </p>

        <p className="font-light lg:text-lg text-sm">
          Fill out the form below and we will contact you within 48 hours for a
          free analysis.
        </p>

        <p className="font-light lg:text-lg text-sm">
          No costs, no obligations, no annoying sales pitch. Guaranteed.
        </p>

        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
