type props = {
  heroTitle: string;
  heroDescription: string;
  heroButton: string;
  heroButtonAction: () => void;
};

const Presentation = ({
  heroTitle,
  heroDescription,
  heroButton,
  heroButtonAction,
}: props) => {
  return (
    <>
      <h2 className="text-2xl font-bold">{heroTitle}</h2>
      <p className="text-sm font-[family-name:var(--font-geist-mono)]">
        {heroDescription}
      </p>
      <a
        onClick={() => heroButtonAction()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {heroButton}
      </a>
    </>
  );
};

export default Presentation;
