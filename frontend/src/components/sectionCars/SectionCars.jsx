import Header from '../shared/Header';
import CarFilters from './CarFilters';
import CarList from './CarList';
import SectionCarsCSS from './SectionCars.module.css';

function SectionCars({ children }) {
	return <div className={SectionCarsCSS.sectionCars}>{children}</div>;
}

export default SectionCars;
