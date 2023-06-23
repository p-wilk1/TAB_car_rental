/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import ButtonMultipurpose from '../shared/ButtonMultipurpose';
import CarAttribute from './CarAttribute';
import styles from './CarCard.module.css';
import api from '../../api/axiosConfig';

const testImg = 'https://www.topgear.com/sites/default/files/2022/07/6_0.jpg';
const CarCard = ({ car }) => {
	const { brand, carInfo, model, pricePerDay, imagePath } = car;

	console.log(car);
	console.log(imagePath);
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
		<div className={styles.carCard}>
			<img src={testImg} alt={'essa'}></img>

			<h2>
				{brand} {model}
			</h2>
			<p>{pricePerDay}zł/doba</p>
			<div className={styles.carAttributes}>
				<CarAttribute
					emoji="🐎"
					text={carInfo.mileage / 100 + 'km przebiegu'}
				/>
				<CarAttribute emoji="👍" text={carInfo.gearboxType} />
				<CarAttribute
					emoji="💺"
					text={carInfo.seatsNumber + ' miejsc siedzących'}
				/>
				<CarAttribute emoji="🛢" text={carInfo.fuelType} />
			</div>
			<ButtonMultipurpose to={`/details/${car.id}`}>
				Szczegóły
			</ButtonMultipurpose>
		</div>
	);
};

export default CarCard;
