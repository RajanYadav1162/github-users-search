const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 text-primary-content bg-neutral ">
      <p className="text-md font-semibold font-serif">
        copyright &copy; {year} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
