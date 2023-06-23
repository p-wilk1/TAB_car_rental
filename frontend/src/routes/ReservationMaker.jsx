import { useParams } from 'react-router';
import Footer from '../components/sectionFooter/Footer';
import Navbar from '../components/sectionHeader/Navbar';
import { useCars } from '../context/CarsContext';
import { useReservations } from '../context/ReservationContext';
import styles from './ReservationMaker.module.css';
import { useContext, useEffect, useState } from 'react';
import api from '../api/axiosConfig';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ButtonMultipurpose from '../components/shared/ButtonMultipurpose';
import AuthContext from '../context/AuthProvider';
import jwtDecode from 'jwt-decode';

const optionsOffice = [
	{ name: 'Office A', id: 1 },
	{ name: 'Office B', id: 2 },
	{ name: 'Office C', id: 3 },
];

const daysDifference = (date1, date2) => {
	const timeDifference = Math.abs(date2.getTime() - date1.getTime());
	return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
};

function ReservationMaker() {
	const carId = useParams();
	const { cars } = useCars();
	const { auth, setAuth } = useContext(AuthContext);
	const carsDisplay = cars.filter((car) => car.id === Number(carId.carId));
	const carDisplay = carsDisplay[0];
	const { brand, model, registrationNumber, pricePerDay } = carDisplay;

	const [pickupLocation, setPickupLocation] = useState(0);
	const [returnLocation, setReturnLocation] = useState();
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

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

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await api.post(
				'/api/res',
				JSON.stringify({
					startDate: startDate.toJSON(),
					endDate: endDate.toJSON(),
					carId: Number(carId.carId),
					pickupLocationId: Number(pickupLocation),
					returnLocationId: Number(returnLocation),
					discountId: null,
					customerId: Number(claim),
				}),
				{
					headers: { 'Content-Type': 'application/json' },
				}
			);
		} catch (err) {
			console.log(err);
		}
		// await createReservation(newReservation);
	};

	return (
		<>
			<Navbar />
			<div className={styles.reservationMakerMain}>
				<h1>
					Twoja rezerwacja na samochód{' '}
					<b>
						{brand} {model}, {registrationNumber}
					</b>
				</h1>
				<h2>
					Zweryfikuj dane i wybierz czas trwania oraz miejsce
					rezerwacji:
				</h2>
				<form className={styles.form}>
					<div className={styles.row}>
						<label>Wybierz datę rozpoczęcia rezerwacji: </label>
						<DatePicker
							id="startDate"
							onChange={(date) => setStartDate(date)}
							selected={startDate}
							dateFormat="yyyy/MM/dd"
						/>
					</div>
					<div className={styles.row}>
						<label>Wybierz datę zakończenia rezerwacji: </label>
						<DatePicker
							id="endDate"
							onChange={(date) => setEndDate(date)}
							selected={endDate}
							dateFormat="yyyy/MM/dd"
						/>
					</div>
					<div className={styles.row}>
						<label>Miejsce odbioru: </label>
						<br />
						<select
							value={pickupLocation}
							onChange={(e) => {
								setPickupLocation(e.target.value);
							}}
						>
							{optionsOffice.map((office) => (
								<option value={office.id} key={office.name}>
									{office.name}
								</option>
							))}
						</select>
					</div>
					<div className={styles.row}>
						<label>Miejsce oddania: </label>
						<br />
						<select
							value={returnLocation}
							onChange={(e) => setReturnLocation(e.target.value)}
						>
							{optionsOffice.map((office) => (
								<option value={office.id} key={office.name}>
									{office.name}
								</option>
							))}
						</select>
					</div>
					<p>
						Czas trwania rezerwacji:{' '}
						{daysDifference(startDate, endDate)} dni
					</p>
					<p>
						Pełny koszt rezerwacji:{' '}
						{pricePerDay * daysDifference(startDate, endDate)}zł
					</p>
				</form>
				<ButtonMultipurpose onClick={handleSubmit}>
					Rezerwuj
				</ButtonMultipurpose>
			</div>
			<Footer />
		</>
	);
}

export default ReservationMaker;
