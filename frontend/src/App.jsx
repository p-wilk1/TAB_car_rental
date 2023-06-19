import Home from "./routes/Home.jsx";
import { Route, Routes } from "react-router";
import Offer from "./routes/Offer.jsx";
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import { AuthProvider } from "./context/AuthProvider";
import UserPanel from "./routes/UserPanel.jsx";
import SectionAbout from "./components/sectionAbout/SectionAbout.jsx";
import AboutHeader from "./components/sectionAbout/AboutHeader.jsx";
import ColumnContainerAbout from "./components/sectionAbout/ColumnContainerAbout.jsx";
import Details from "./routes/Details.jsx";
import { CarsProvider } from "./context/CarsContext.jsx";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CarsProvider>
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
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/UserPanel" element={<UserPanel />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </CarsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
