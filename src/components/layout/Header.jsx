import header_logo from "../../assets/logo/header_logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={header_logo} alt="Logo Kasa" className="header-logo" />
    </header>
  );
}

export default Header;
