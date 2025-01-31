type props = {
  headerTitle: string;
  footer: string;
};

const Footer = ({ headerTitle, footer }: props) => {
  return (
    <footer className="text-sm text-center">
      &copy; {new Date().getFullYear()} {headerTitle} . {footer}
    </footer>
  );
};

export default Footer;
