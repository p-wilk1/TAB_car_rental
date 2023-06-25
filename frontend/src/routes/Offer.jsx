import Navbar from '../components/sectionHeader/Navbar.jsx';
import CarList from '../components/sectionCars/CarList.jsx';
import Spinner from '../components/shared/Spinner.jsx';
import { useCars } from '../context/CarsContext.jsx';
import CarFilters from '../components/sectionCars/CarFilters.jsx';
import Header from '../components/shared/Header.jsx';
import Footer from '../components/sectionFooter/Footer.jsx';
import styles from './Offer.module.css';

const Offer = () => {
	const { isLoading, cars } = useCars();
	if (isLoading) return <Spinner />;

	return (
		<div className={styles.offer}>
			<Navbar />
			<Header>Nasze samochody</Header>
			{/* <CarFilters></CarFilters> */}
			<CarList maxLength={cars.length}></CarList>
			<Footer></Footer>
		</div>
	);
};

export default Offer;
