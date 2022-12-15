const Footer = () => {
  return (
    <footer className=" text-center small text-muted py-3">
      <p className="m-0">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <a href="/" className="text-muted">
          Dagbana Republic
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
