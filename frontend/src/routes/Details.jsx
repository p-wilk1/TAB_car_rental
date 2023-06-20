import { useParams } from "react-router";
import { useCars } from "../context/CarsContext";
import { useEffect } from "react";
import Spinner from "../components/shared/Spinner";
import Navbar from "../components/sectionHeader/Navbar";
import styles from "./Details.module.css";
import ReservationCard from "../components/carDetails/ReservationCard";

const testCar = {
  brand: "Porsche",
  carInfo: {
    color: "czerwony",
    description: "opis testowy",
    doorsNumber: 5,
    fuelType: "Gasoline",
    gearboxType: "Manual",
    mileage: 185000,
    productionYear: 2005,
    seatsNumber: 4,
  },
  imagePath: "",
  model: "911",
  office: {
    email: "testofficemail",
    officeAddress: null,
    officeName: "officeB",
    phoneNumber: 123456789,
  },
  pricePerDay: 2000,
  registrationNumber: "ABC2137",
};

function Details() {
  //   const { id } = useParams();
  //   const { currentCar, isLoading } = useCars();

  //   useEffect(() => {
  //     getCar(id);
  //   }, [id, getCar]);

  const {
    brand,
    carInfo,
    imagePath,
    model,
    office,
    pricePerDay,
    registrationNumber,
  } = testCar;

  //   if (isLoading) return <Spinner />;

  return (
    <div className={styles.detailsPage}>
      <Navbar />
      <div className={styles.carDetails}>
        <img src={imagePath} alt="koks" />
        <h1>{`${brand} model
        ${model}`}</h1>
        <div className={styles.detailsTable}>
          <p>Kolor: {carInfo.color}</p>
          <p>Ilość drzwi: {carInfo.doorsNumber}</p>
          <p>Typ paliwa: {carInfo.fuelType}</p>
          <p>Skrzynia biegów: {carInfo.gearboxType}</p>
          <p>Przebieg: {carInfo.mileage}km</p>
          <p>Ilość siedzeń: {carInfo.seatsNumber}</p>
          <p>Nr rejestracyjny: {registrationNumber}</p>
          <p>{carInfo.description}</p>
        </div>
        <ReservationCard car={testCar} />
      </div>
    </div>
  );
}

export default Details;
