import NavbarCSS from "./Navbar.module.css";
import ButtonMultipurpose from "../shared/ButtonMultipurpose";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import { useContext } from "react";

export default function Navbar() {
  // const { auth } = useAuth();
  const { auth } = useContext(AuthContext);

  return (
    <header>
      <nav className={NavbarCSS.navigationContainer}>
        <ButtonMultipurpose to="/">(LOGO)</ButtonMultipurpose>

        {/* <img
            src="./src/assets/sogood-rentals-logo-transparent.png"
            className={NavbarCSS.logo}
          ></img> */}
        <ul className={NavbarCSS.navigationList}>
          <li>
            <Link to={"/Offer"}>Oferta</Link>
          </li>
          <li>
            <Link to={"/About"}>O nas</Link>
          </li>
          <li>
            <a href="#">Dlaczego my?</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
          <li>
            {auth.accessToken ? (
              <ButtonMultipurpose to={"/UserPanel"}>
                Moj profil
              </ButtonMultipurpose>
            ) : (
              <ButtonMultipurpose to="/Login">Zaloguj się</ButtonMultipurpose>
            )}
            {/* <ButtonMultipurpose to="login">Zaloguj się</ButtonMultipurpose> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
