import Navbar from "../components/sectionHeader/Navbar";
import Footer from "../components/sectionFooter/Footer";
import ColumnContainerHeader from "../components/sectionHeader/ColumnContainerHeader";
import SectionAbout from "../components/sectionAbout/SectionAbout";
import CarList from "../components/sectionCars/CarList";
import { useContext, useEffect, useState } from "react";
import SectionCars from "../components/sectionCars/SectionCars";
import Header from "../components/shared/Header";
import AboutHeader from "../components/sectionAbout/AboutHeader";
import ColumnContainerAbout from "../components/sectionAbout/ColumnContainerAbout";
import api from "../api/axiosConfig";
import ButtonMultipurpose from "../components/shared/ButtonMultipurpose.jsx";
import AuthContext from "../context/AuthProvider";
// import AuthContext, { useAuth } from "../context/AuthProvider.jsx";

const Home = () => {
  const [cars, setCars] = useState();

  const { auth } = useContext(AuthContext);

  // const { auth } = useAuth();
  // console.log(useAuth());
  let photo;
  //   console.log(auth);

  const getCars = async () => {
    try {
      //TODO ZDJECIA NIE DZIALAJA
      const res = await api.get("api/car/all");

      setCars(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <>
      <Navbar auth={auth} />
      <ColumnContainerHeader />

      <SectionCars>
        <Header>Nasze samochody</Header>
        <CarList cars={cars} />
        <ButtonMultipurpose to="offer">Zobacz więcej</ButtonMultipurpose>
      </SectionCars>

      <SectionAbout>
        <AboutHeader />
        <ColumnContainerAbout />
      </SectionAbout>

      <Footer />
    </>
  );
};

export default Home;
