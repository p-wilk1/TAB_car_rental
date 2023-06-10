import Navbar from './components/sectionHeader/Navbar';
import Footer from './components/sectionFooter/Footer';
import ColumnContainerHeader from './components/sectionHeader/ColumnContainerHeader';
import SectionAbout from './components/sectionAbout/SectionAbout';
import CarList from './components/sectionCars/CarList';
import { useState } from 'react';
import SectionCars from './components/sectionCars/SectionCars';
import Header from './components/shared/Header';
import CarFilters from './components/sectionCars/CarFilters';
import AboutHeader from './components/sectionAbout/AboutHeader';
import ColumnContainerAbout from './components/sectionAbout/ColumnContainerAbout';

const initialCars = [
	{
		Type: 'Sedan',
		Model: 'Camry',
		Brand: 'Toyota',
		RegistrationNumber: 'ABC123',
		pricePerDay: 5099,
		SeatsNumber: 5,
		DoorsNumber: 4,
		GearboxType: 'Automatic',
		Color: 'Silver',
		Description: 'A comfortable and reliable sedan.',
		ProductionYear: 2021,
		Mileage: 25000,
		FuelType: 'Gasoline',
	},
	{
		Type: 'SUV',
		Model: 'CR-V',
		Brand: 'Honda',
		RegistrationNumber: 'DEF456',
		pricePerDay: 655,
		SeatsNumber: 5,
		DoorsNumber: 5,
		GearboxType: 'CVT',
		Color: 'White',
		Description: 'A spacious and versatile SUV.',
		ProductionYear: 2020,
		Mileage: 30000,
		FuelType: 'Gasoline',
	},
	{
		Type: 'Convertible',
		Model: 'Mustang',
		Brand: 'Ford',
		RegistrationNumber: 'GHI789',
		pricePerDay: 8075,
		SeatsNumber: 4,
		DoorsNumber: 2,
		GearboxType: 'Manual',
		Color: 'Red',
		Description: 'A sporty and exhilarating convertible.',
		ProductionYear: 2019,
		Mileage: 20000,
		FuelType: 'Gasoline',
	},
	{
		Type: 'Hatchback',
		Model: 'i30',
		Brand: 'Hyundai',
		RegistrationNumber: 'JKL012',
		pricePerDay: 4525,
		SeatsNumber: 5,
		DoorsNumber: 4,
		GearboxType: 'Automatic',
		Color: 'Blue',
		Description: 'A practical and efficient hatchback.',
		ProductionYear: 2022,
		Mileage: 10000,
		FuelType: 'Gasoline',
	},
	{
		Type: 'Electric',
		Model: 'Model 3',
		Brand: 'Tesla',
		RegistrationNumber: 'MNO345',
		pricePerDay: 900,
		SeatsNumber: 5,
		DoorsNumber: 4,
		GearboxType: 'Automatic',
		Color: 'Black',
		Description: 'An innovative and high-performance electric car.',
		ProductionYear: 2021,
		Mileage: 15000,
		FuelType: 'Electric',
	},
];

function App() {
	const [cars, setCars] = useState(initialCars);

	return (
		<>
			<Navbar />
			<ColumnContainerHeader />
			<SectionAbout>
				<AboutHeader />
				<ColumnContainerAbout />
			</SectionAbout>
			<SectionCars>
				<Header>Nasze samochody</Header>
				<CarFilters />
				<CarList cars={cars} />
			</SectionCars>

			<Footer />
		</>
	);
}

export default App;
