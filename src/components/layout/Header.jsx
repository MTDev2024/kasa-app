import { NavLink } from "react-router-dom";
import header_logo from "../../assets/logo/header_logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={header_logo} alt="Logo Kasa" className="header__logo" />
      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="header__link">
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
