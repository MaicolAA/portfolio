type props = {
  aboutTitle: string;
  aboutDescription: string;
};

const AboutMe = ({ aboutTitle, aboutDescription }: props) => {
  return (
    <>
      <section id="about" className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">{aboutTitle}</h3>
        <p>{aboutDescription}</p>
      </section>
    </>
  );
};

export default AboutMe;
