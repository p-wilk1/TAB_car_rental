import Home from "./routes/Home.jsx";
import {Route, Routes} from "react-router";
import Offer from "./routes/Offer.jsx";
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import {AuthProvider} from "./context/AuthProvider";
import UserPanel from "./routes/UserPanel.jsx";
import AdminPanel from "./routes/AdminPanel.jsx";

function App() {

	return (
		<div className="App">
			<AuthProvider>
			<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/Offer" element={<Offer/>}/>
					<Route path="/Login" element={<Login/>}/>
					<Route path="/Register" element={<Register/>}/>
					<Route path="/UserPanel" element={<UserPanel/>}/>
					<Route path="/AdminPanel/" element={<AdminPanel/>}/>
			</Routes>
			</AuthProvider>

		</div>
	);
}

export default App;
