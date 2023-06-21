import { useParams } from "react-router";
import { useCars } from "../context/CarsContext";
import { useEffect } from "react";
import Spinner from "../components/shared/Spinner";
import Navbar from "../components/sectionHeader/Navbar";
import styles from "./Details.module.css";
import ReservationCard from "../components/carDetails/ReservationCard";
import Footer from "../components/sectionFooter/Footer";

const testImg = "https://www.topgear.com/sites/default/files/2022/07/6_0.jpg";

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
  const { cars } = useCars();
  const { id } = useParams();

  const currentCar = cars.filter((car) => car.id === Number(id));
  //   useEffect(() => {
  //     getCar(id);
  //   }, [id, getCar]);

  const { brand, carInfo, imagePath, model, registrationNumber } =
    currentCar[0];

  console.log(currentCar);
  //   if (isLoading) return <Spinner />;

  return (
    <>
      <div className={styles.detailsPage}>
        <Navbar />
        <div className={styles.carDetails}>
          <div className={styles.row1}>
            <div className={styles.column1of2}>
              <img src={testImg} alt="boks" />
            </div>
            <div className={styles.column1of2}>
              <ReservationCard car={testCar} />
            </div>
          </div>
          <div className={styles.carHeader}>
            <h1>{`${brand} model
        ${model}`}</h1>
          </div>
          <div className={styles.row2}>
            <div className={styles.column1of2}>
              <ul className={styles.detailsTable}>
                <li>
                  <p>Kolor: {carInfo.color}</p>
                </li>
                <li>
                  <p>Ilość drzwi: {carInfo.doorsNumber}</p>
                </li>
                <li>
                  <p>Typ paliwa: {carInfo.fuelType}</p>
                </li>
                <li>
                  <p>Skrzynia biegów: {carInfo.gearboxType}</p>
                </li>
                <li>
                  <p>Przebieg: {carInfo.mileage}km</p>
                </li>
                <li>
                  <p>Ilość siedzeń: {carInfo.seatsNumber}</p>
                </li>
                <li>
                  <p>Nr rejestracyjny: {registrationNumber}</p>
                </li>
              </ul>
            </div>
            <div className={styles.column1of2}>
              <h2 className={styles.carDesc}>{carInfo.description}</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
