import { useParams } from "react-router";
import Footer from "../components/sectionFooter/Footer";
import Navbar from "../components/sectionHeader/Navbar";
import { useCars } from "../context/CarsContext";

function ReservationMaker() {
  const carId = useParams();
  const { cars } = useCars();
  console.log(cars);
  const carsDisplay = cars.filter((car) => car.id === Number(carId));
  const carDisplay = carsDisplay[0];
  const { brand, carInfo, imagePath, model, registrationNumber } = carDisplay;

  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  );
}

export default ReservationMaker;
