import NavbarCSS from './Navbar.module.css';
import ButtonMultipurpose from '../shared/ButtonMultipurpose';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useReservations } from '../../context/ReservationContext';

export default function Navbar() {
	// const { auth } = useAuth();
	let claim;
	const { auth, setAuth } = useContext(AuthContext);
	const [logOut, setLogOut] = useState(false);
	const { reservations } = useReservations();
	const handleLogOut = () => {
		sessionStorage.clear();
		setLogOut(true);
	};
	useEffect(() => {
		console.log(reservations);
		setAuth({ accessToken: null });
	}, [auth.accessToken]);
	if (auth.accessToken) {
		const token = jwtDecode(auth.accessToken);
		claim =
			token[
				'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
			];
	}

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
						<Link to={'/Offer'}>Oferta</Link>
					</li>
					<li>
						<Link to={'/About'}>O nas</Link>
					</li>
					<li>
						<a href="#">Dlaczego my?</a>
					</li>
					<li>
						<a href="#">Kontakt</a>
					</li>
					{auth.accessToken ? (
						<>
							{claim === 'Admin' ? (
								<li>
									<ButtonMultipurpose to={'/admin/dashboard'}>
										Moj profil
									</ButtonMultipurpose>
								</li>
							) : (
								<li>
									<ButtonMultipurpose to={'/user'}>
										Moj profil
									</ButtonMultipurpose>
								</li>
							)}
							<li>
								<ButtonMultipurpose
									to={'/'}
									onClick={handleLogOut}
								>
									Wyloguj
								</ButtonMultipurpose>
							</li>
						</>
					) : (
						<li>
							<ButtonMultipurpose to="/Login">
								Zaloguj się
							</ButtonMultipurpose>
						</li>
					)}
					{/* <ButtonMultipurpose to="login">Zaloguj się</ButtonMultipurpose> */}
				</ul>
			</nav>
		</header>
	);
}
