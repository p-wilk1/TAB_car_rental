/* eslint-disable react/prop-types */
// import AuthContext, { useAuth } from "../../context/AuthProvider";
import { useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import ButtonMultipurpose from '../shared/ButtonMultipurpose';
import styles from './ReservationCard.module.css';

function ReservationCard({ car }) {
	//   const { auth } = useAuth();
	const { auth } = useContext(AuthContext);
	console.log(car);

	return (
		<div className={styles.ReservationCard}>
			<h2>Cena za dobę: {car[0].pricePerDay}zł</h2>
			<h2>
				Kontakt do odbioru:{' '}
				{`${car[0].office.officeName}, email ${car[0].office.email}, nr telefonu ${car[0].office.phoneNumber}`}
			</h2>
			{auth.accessToken ? (
				<ButtonMultipurpose to={`/reservation/${car[0].id}`}>
					Rezerwacja
				</ButtonMultipurpose>
			) : (
				<ButtonMultipurpose to={`/login`}>
					Zaloguj się, by zarezerwować
				</ButtonMultipurpose>
			)}
		</div>
	);
}

export default ReservationCard;
