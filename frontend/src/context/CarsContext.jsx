import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useReducer,
} from 'react';
import api from '../api/axiosConfig';

const CarsContext = createContext();

const initialState = {
	cars: [],
	isLoading: false,
	currentCar: {},
	error: '',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'loading':
			return { ...state, isLoading: true };
		case 'cars/loaded':
			return { ...state, isLoading: false, cars: action.payload };
		case 'car/loaded':
			return { ...state, isLoading: false, currentCar: action.payload };
		case 'car/created':
			return {
				...state,
				isLoading: false,
				currentCar: action.payload,
				cars: [...state.cars, action.payload],
			};
		case 'car/deleted':
			return {
				...state,
				isLoading: false,
				currentCar: {},
				cars: state.cars.filter((car) => car.id !== action.payload),
			};
		case 'rejected':
			return { ...state, isLoading: false, error: action.payload };
		default:
			throw new Error('Unknown action type');
	}
};

const CarsProvider = ({ children }) => {
	const [{ cars, isLoading, currentCar }, dispatch] = useReducer(
		reducer,
		initialState
	);

	useEffect(() => {
		const fetchCars = async () => {
			dispatch({ type: 'loading' });
			try {
				const res = await api.get('api/car/all');
				const data = res.data;
				console.log('fetchowane samochody:', res.data);
				dispatch({ type: 'cars/loaded', payload: data });
			} catch {
				dispatch({
					type: 'rejected',
					payload: 'There was an error loading cars',
				});
			}
		};
		fetchCars();
	}, []);

	// const getCar = async (id) => {
	// 	console.log('starting to fetch new car');
	// 	if (Number(id) === currentCar.id) return;
	// 	dispatch({ type: 'loading' });
	// 	try {
	// 		const res = await api.get('api/car', {
	// 			params: {
	// 				carId: id,
	// 			},
	// 		});
	// 		console.log('response:', res);
	// 		dispatch({ type: 'car/loaded', payload: res.data });
	// 	} catch {
	// 		dispatch({
	// 			type: 'rejected',
	// 			payload: 'There was an error loading cars',
	// 		});
	// 	}
	// };

	const getCar = useCallback(
		async (id) => {
			if (Number(id) === currentCar.id) return;
			dispatch({ type: 'loading' });
			try {
				const res = await api.get('api/car', {
					params: {
						carId: id,
					},
				});
				console.log('Feczuje pojedynczy samochod!!!');
				dispatch({ type: 'car/loaded', payload: res.data });
			} catch {
				dispatch({
					type: 'rejected',
					payload: 'There was an error loading cars',
				});
			}
		},
		[currentCar.id]
	);

	const createCar = async (newCar) => {
		dispatch({ type: 'loading' });
		try {
			const res = await api.post('api/car/add', newCar);
			const data = await res.data();
			dispatch({ type: 'car/created', payload: data });
		} catch {
			dispatch({
				type: 'rejected',
				payload: 'There was an error loading cars',
			});
		}
	};

	const deleteCar = async (id) => {
		dispatch({ type: 'loading' });
		try {
			await api.delete(`api/car/${id}`);
			dispatch({ type: 'car/deleted', payload: id });
		} catch {
			dispatch({
				type: 'rejected',
				payload: 'There was an error loading cars',
			});
		}
	};

	return (
		<CarsContext.Provider
			value={{
				cars,
				isLoading,
				currentCar,
				createCar,
				deleteCar,
				getCar,
			}}
		>
			{children}
		</CarsContext.Provider>
	);
};

const useCars = () => {
	const context = useContext(CarsContext);
	if (context === undefined)
		throw new Error('Cars context was used outside the CarsProvider');
	return context;
};

export { CarsProvider, useCars };
