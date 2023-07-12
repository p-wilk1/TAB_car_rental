import CarListCSS from "./CarList.module.css";
import CarCard from "./CarCard";
import { useCars } from "../../context/CarsContext";
import Spinner from "../shared/Spinner";
import { useEffect, useState } from "react";
import api from "../../api/axiosConfig";

function CarList({ maxLength = 6 }) {
  //   const { cars, isLoading } = useCars();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await api.get("api/car/all");
        const data = res.data;
        setCars(data);
        console.log("fetchowane samochody 2:", data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCars();
  }, []);
  const carsSliced = [...cars.slice(0, maxLength)];

  //   if (isLoading) return <Spinner />;

  return (
    <ul className={CarListCSS.carList}>
      {carsSliced?.map((car, i) => {
        return (
          <li key={i}>
            <CarCard car={car}></CarCard>
          </li>
        );
      })}
    </ul>
  );
}

export default CarList;
