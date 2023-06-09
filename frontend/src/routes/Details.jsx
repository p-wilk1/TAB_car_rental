import { useParams } from "react-router";
import { useCars } from "../context/CarsContext";
import { useEffect, useState } from "react";
import Spinner from "../components/shared/Spinner";
import Navbar from "../components/sectionHeader/Navbar";
import styles from "./Details.module.css";
import ReservationCard from "../components/carDetails/ReservationCard";
import Footer from "../components/sectionFooter/Footer";
import api from "../api/axiosConfig";

const testImg = "https://www.topgear.com/sites/default/files/2022/07/6_0.jpg";
const imgPath = "../../../public/carImages/car4.png";

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
  const { id } = useParams();
  const { isLoading, cars } = useCars();

  const displayCar = cars.filter((car) => car.id === Number(id));
  // console.log(currentCar[0]);
  const { brand, carInfo, imagePath, model, registrationNumber } =
    displayCar[0];

  // const [imageSrc, setImageSrc] = useState('');
  // useEffect(() => {
  // 	api.get('api/files', {
  // 		params: {
  // 			filePath: imagePath[0].imagePath,
  // 		},
  // 	}).then((response) => {
  // 		setImageSrc(response.data);
  // 	});
  // }, [imagePath]);
  if (isLoading) return <Spinner />;

  return (
    <>
      <div className={styles.detailsPage}>
        <Navbar />
        <div className={styles.carDetails}>
          <div className={styles.row1}>
            <div className={styles.column1of2}>
              <img src={`../../../public/carImages/car${id}.png`} alt="boks" />
            </div>
            <div className={styles.column1of2}>
              <ReservationCard car={displayCar} />
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
