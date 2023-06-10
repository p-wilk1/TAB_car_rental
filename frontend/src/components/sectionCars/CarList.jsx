import CarListCSS from './CarList.module.css';
import CarCard from './CarCard';

function CarList({ cars }) {
	return (
		<ul className={CarListCSS.carList} id="oferta">
			{cars?.map((car, i) => {
				return (
					<li key={i}>
						<CarCard
							price={car.pricePerDay}
							brand={car.Brand}
							model={car.Model}
							seats={car.SeatsNumber}
							gearbox={car.GearboxType}
							mileage={car.Mileage}
							fuel={car.FuelType}
						></CarCard>
					</li>
				);
			})}
		</ul>
	);
}

export default CarList;
