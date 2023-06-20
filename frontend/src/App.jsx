import Home from "./routes/Home.jsx";
import {Route, Routes} from "react-router";
import Offer from "./routes/Offer.jsx";
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import {AuthProvider} from "./context/AuthProvider";
import UserPanel from "./routes/UserPanel.jsx";
import AdminDashboard from "./routes/AdminDashboard.jsx";
import AdminCars from "./routes/AdminCars.jsx";
import AdminUsers from "./routes/AdminUsers.jsx";


function App() {

	return (
		<div className="App">
			<AuthProvider>
			<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/Offer" element={<Offer/>}/>
					<Route path="/login" element={<Login/>}/>
					<Route path="/register" element={<Register/>}/>
					<Route path="/user" element={<UserPanel/>}/>
					<Route path="/admin/dashboard" element={<AdminDashboard/>}/>
					<Route path="/admin/cars" element={<AdminCars/>}/>
					<Route path="/admin/users" element={<AdminUsers/>}/>

			</Routes>
			</AuthProvider>

		</div>
	);
}

export default App;
