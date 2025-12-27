import footer_logo from "../../assets/logo/footer_logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={footer_logo} alt="Kasa" className="footer__logo" />
      <p className="footer__text">
        © 2020 Kasa. <br className="footer__break" />
        All rights reserved
      </p>
    </footer>
  );
}
