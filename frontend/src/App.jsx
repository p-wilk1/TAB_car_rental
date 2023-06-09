import Home from './routes/Home.jsx';
import { Route, Routes } from 'react-router';
import Offer from './routes/Offer.jsx';
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import { AuthProvider } from './context/AuthProvider';
import UserPanel from './routes/UserPanel.jsx';
import SectionAbout from './components/sectionAbout/SectionAbout.jsx';
import AboutHeader from './components/sectionAbout/AboutHeader.jsx';
import ColumnContainerAbout from './components/sectionAbout/ColumnContainerAbout.jsx';
import Details from './routes/Details.jsx';
import { CarsProvider } from './context/CarsContext.jsx';
import AdminDashboard from './routes/AdminDashboard.jsx';
import AdminCars from './routes/AdminCars.jsx';
import AdminUsers from './routes/AdminUsers.jsx';
import AdminReservations from './routes/AdminReservations.jsx';
import ReservationMaker from './routes/ReservationMaker.jsx';
import { ReservationsProvider } from './context/ReservationContext.jsx';
import EditUser from "./components/sectionAdminPanel/EditUser.jsx";
import AdminUserEdit from "./routes/AdminUserEdit..jsx";
import AdminAddCar from "./routes/AdminAddCar.jsx";
import AdminEditCar from "./routes/AdminEditCar.jsx";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<CarsProvider>
					<ReservationsProvider>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/Offer" element={<Offer />} />
							<Route
								path="/About"
								element={
									<SectionAbout>
										<AboutHeader />
										<ColumnContainerAbout />
									</SectionAbout>
								}
							/>
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/user" element={<UserPanel />} />
							<Route
								path="/reservation/:carId"
								element={<ReservationMaker />}
							/>
							<Route path="/details/:id" element={<Details />} />
							<Route
								path="/admin/dashboard"
								element={<AdminDashboard />}
							/>
							<Route path="/admin/cars" element={<AdminCars />} />
							<Route
								path="/admin/users"
								element={<AdminUsers />}
							/>
							<Route
								path="/admin/reservations"
								element={<AdminReservations />}
							/>
							<Route
								path="/admin/users/edit/:userId"
								element={<AdminUserEdit/>}


							/>
							<Route
								path="/admin/cars/add"
								element={<AdminAddCar/>}
							/>
							<Route
								path="/admin/cars/edit/:carId"
								element={<AdminEditCar/>}
							/>
						</Routes>
					</ReservationsProvider>
				</CarsProvider>
			</AuthProvider>
		</div>
	);
}

export default App;
