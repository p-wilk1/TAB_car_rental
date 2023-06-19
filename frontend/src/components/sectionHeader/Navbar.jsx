import NavbarCSS from './Navbar.module.css';
import ButtonMultipurpose from '../shared/ButtonMultipurpose';
import {Link} from "react-router-dom";

export default function Navbar({auth}) {
	return (
		<header>
			<nav className={NavbarCSS.navigationContainer}>

				<Link to={"/"}><ButtonMultipurpose>(LOGO)</ButtonMultipurpose></Link>

					{/* <img
            src="./src/assets/sogood-rentals-logo-transparent.png"
            className={NavbarCSS.logo}
          ></img> */}
				<ul className={NavbarCSS.navigationList}>
					<li>
						<Link to={"/Offer"}>Oferta</Link>
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
						{auth.accessToken ? (
								<Link to={"/UserPanel"}>
									<ButtonMultipurpose url="#">
										Moj profil
									</ButtonMultipurpose>
								</Link>
							):(
						<Link to={"/AdminPanel"}>
							<ButtonMultipurpose url="#">
								Zaloguj się
							</ButtonMultipurpose>
						</Link>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
}
