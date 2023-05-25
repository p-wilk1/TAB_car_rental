import NavbarCSS from "./Navbar.module.css";
import ButtonMultipurpose from "./ButtonMultipurpose";

export default function Navbar() {
  return (
    <header>
      <nav className={NavbarCSS.navigationContainer}>
        <a href="#">
          <ButtonMultipurpose>(LOGO)</ButtonMultipurpose>
          {/* <img
            src="./src/assets/sogood-rentals-logo-transparent.png"
            className={NavbarCSS.logo}
          ></img> */}
        </a>
        <ul className={NavbarCSS.navigationList}>
          <li>
            <a href="#">Oferta</a>
          </li>
          <li>
            <a href="#">O nas</a>
          </li>
          <li>
            <a href="#">Dlaczego my?</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
          <li>
            <ButtonMultipurpose url='#'>
                Zaloguj się
            </ButtonMultipurpose>
          </li>
        </ul>
      </nav>
    </header>
  );
}
