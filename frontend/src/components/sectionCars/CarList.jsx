import CarListCSS from './CarList.module.css';
import CarCard from './CarCard';
import { useCars } from '../../context/CarsContext';
import Spinner from '../shared/Spinner';

function CarList({ maxLength = 6 }) {
	const { cars, isLoading } = useCars();
	const carsSliced = [...cars.slice(0, maxLength)];

	if (isLoading) return <Spinner />;

	return (
		<ul className={CarListCSS.carList}>
			{carsSliced?.map((car, i) => {
				return (
					<li key={i}>
						<CarCard car={car}></CarCard>
					</li>
				);
			})}
		</ul>
	);
}

export default CarList;
