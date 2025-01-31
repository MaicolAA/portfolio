type props = {
  contactTitle: string;
  contactDescription: string;
  contactButtonText: string;
};

const Contact = ({
  contactTitle,
  contactDescription,
  contactButtonText,
}: props) => {
  return (
    <>
      <section id="contact" className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">{contactTitle}</h3>
        <p>{contactDescription}</p>
        <a
          href="mailto:maicolaroyave10@gmail.com"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          {contactButtonText}
        </a>
      </section>
    </>
  );
};

export default Contact;
