import ButtonMultipurpose from '../shared/ButtonMultipurpose';
import CarAttribute from './CarAttribute';
import CarCardCSS from './CarCard.module.css';
import images from '/src/images.jsx';

const CarCard = ({
	price,
	brand,
	model,
	seats,
	gearbox,
	mileage,
	fuel,
	img,
}) => {

	return (

		<div className={CarCardCSS.carCard}>
			<img src={img} alt={"essa"}></img>

			<h2>
				{brand} {model}
			</h2>
			<p>{price}zł/doba</p>
			<div className={CarCardCSS.carAttributes}>
				<CarAttribute
					emoji="🐎"
					text={mileage / 100 + 'km przebiegu'}
				/>
				<CarAttribute emoji="👍" text={gearbox} />
				<CarAttribute emoji="💺" text={seats + ' miejsc siedzących'} />
				<CarAttribute emoji="🛢" text={fuel} />
			</div>
			<ButtonMultipurpose url="#">Szczegóły</ButtonMultipurpose>
		</div>
	);
};

export default CarCard;
