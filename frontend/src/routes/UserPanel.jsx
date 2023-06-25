import React, { useContext, useEffect, useState } from 'react';
import styles from '../routes/UserPanel.module.css';
import Navbar from '../components/sectionHeader/Navbar';
import Footer from '../components/sectionFooter/Footer';
import GeneralInfo from '../components/sectionUserPanel/GeneralInfo';
import UserReservations from '../components/sectionUserPanel/UserReservations';
import AuthContext from '../context/AuthProvider';
import jwtDecode from 'jwt-decode';
import api from '../api/axiosConfig';

const USER_URL = 'api/customer';

const UserPanel = () => {
	const { auth, setAuth } = useContext(AuthContext);
	const { user, setUser } = useState({});
	let claim;
	useEffect(() => {
		setAuth({ accessToken: null });
	}, [auth.accessToken, setAuth]);

	if (auth.accessToken) {
		const token = jwtDecode(auth.accessToken);
		claim =
			token[
				'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
			];
	}
	console.log(claim);

	useEffect(() => {
		try {
			api.get(USER_URL, {
				params: {
					userId: claim,
				},
			}).then((res) => {
				console.log('response:', res);
				setUser(res.data);
			});
		} catch (err) {
			console.log(err);
		}
	}, [setUser, claim]);

	console.log(user);

	// const [imageSrc, setImageSrc] = useState('');
	// useEffect(() => {
	// 	api.get('api/files', {
	// 		params: {
	// 			filePath: imagePath[0].imagePath,
	// 		},
	// 	}).then((response) => {
	// 		setImageSrc(response.data);
	// 	});
	// }, [imagePath]);

	return (
		<>
			<Navbar />
			{auth.accessToken && (
				<main className={styles.userPanelMain}>
					<GeneralInfo userId={claim} />
					<h2>Twoje rezerwacje:</h2>
					<UserReservations userId={claim} />
				</main>
			)}
			<Footer />
		</>
	);
};

export default UserPanel;
