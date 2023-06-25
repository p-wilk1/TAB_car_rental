import React from 'react';
import styles from '../sectionUserPanel/UserReservations.module.css';

const testReservations = [
	{
		id: 2137,
		car: {
			brand: 'Porsche',
			model: 'Panamera',
			registration: 'abc123',
		},
		price: 25000,
		startDate: '21 05 2005',
		endDate: '28 05 2007',
	},
	{
		id: 2000,
		car: {
			brand: 'Honda',
			model: 'Civic',
			registration: 'def456',
		},
		price: 5800,
		startDate: '21 25 2025',
		endDate: '28 15 2077',
	},
];

export default function UserReservations() {
	return (
		<div className={styles.userReservationsContainer}>
			<ul className={styles.reservationsList}>
				{testReservations.map((reservation) => (
					<li key={reservation.id}>
						<p>
							{`${reservation.car.brand} ${reservation.car.model} ${reservation.car.registration}`}
						</p>
						<br />
						<p>
							{`Data odbioru: ${reservation.startDate} Data oddania: ${reservation.endDate} Pełna cena: ${reservation.price}zł`}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}
