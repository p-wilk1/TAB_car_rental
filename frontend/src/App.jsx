import Home from "./routes/Home.jsx";
import {Route, Routes} from "react-router";
import Offer from "./routes/Offer.jsx";

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/Offer" element={<Offer/>}/>
			</Routes>

		</div>
	);
}

export default App;
