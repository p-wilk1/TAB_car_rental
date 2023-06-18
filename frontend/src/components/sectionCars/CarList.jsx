import CarListCSS from './CarList.module.css';
import CarCard from './CarCard';

function CarList({ cars },{img2}) {
	return (
		<ul className={CarListCSS.carList} id="oferta">
			{cars?.map((car, i) => {
				return (
					<li key={i}>
						<CarCard
							price={car.pricePerDay}
							brand={car.brand}
							model={car.model}
							seats={car.carInfo.seatsNumber}
							gearbox={car.carInfo.gearboxType}
							mileage={car.carInfo.mileage}
							fuel={car.carInfo.fuelType}
							img={img2}
						></CarCard>
					</li>
				);
			})}
		</ul>
	);
}

export default CarList;
