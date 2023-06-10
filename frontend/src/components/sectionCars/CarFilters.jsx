import CarFiltersCSS from './CarFilters.module.css';

const brands = ['Marki', 'Honda', 'Tesla', 'Toyota', 'Ford', 'Hyundai'];
const gearbox = ['Skrzynia biegów', 'Automatyczna', 'Ręczna'];
const body = [
	'Typ nadwozia',
	'Coupe',
	'Kabriolet',
	'Kombi',
	'Kompakt',
	'Liftback',
	'Sedan',
	'SUV',
];
const fuel = ['Paliwo', 'Benzyna', 'Diesel', 'Elektryczny', 'Hybryda'];
const seats = ['Ilość miejsc', 'Dwie osoby', 'Cztery osoby', 'Pięć lub więcej'];
function CarFilters() {
	return (
		<ul className={CarFiltersCSS.carFiltersList}>
			<li>
				<FilterSelect options={brands} />
			</li>
			<li>
				<FilterSelect options={gearbox} />
			</li>
			<li>
				<FilterSelect options={body} />
			</li>
			<li>
				<FilterSelect options={fuel} />
			</li>
			<li>
				<FilterSelect options={seats} />
			</li>
		</ul>
	);
}

const FilterSelect = ({ options }) => {
	return (
		<select>
			{options.map((o, i) => {
				return (
					<option key={i} value={o}>
						{o}
					</option>
				);
			})}
		</select>
	);
};

export default CarFilters;
