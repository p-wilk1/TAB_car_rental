import Header from '../shared/Header';
import CarFilters from './CarFilters';
import CarList from './CarList';
import SectionCarsCSS from './SectionCars.module.css';

function SectionCars({ cars }) {
	return (
		<div className={SectionCarsCSS.sectionCars}>
			<Header>Nasze samochody</Header>
			<CarFilters />
			<CarList cars={cars} />
		</div>
	);
}

export default SectionCars;
