// import AuthContext, { useAuth } from "../../context/AuthProvider";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import ButtonMultipurpose from "../shared/ButtonMultipurpose";
import styles from "./ReservationCard.module.css";

function reservationCard({ car }) {
  const { office, pricePerDay } = car;
  //   const { auth } = useAuth();
  const { auth } = useContext(AuthContext);

  return (
    <div className={styles.reservationCard}>
      <h2>Cena za dobę: {pricePerDay}zł</h2>
      <h2>
        Kontakt do odbioru:{" "}
        {`${office.officeName}, email ${office.email}, nr telefonu ${office.phoneNumber}`}
      </h2>
      <ButtonMultipurpose>Rezerwacja</ButtonMultipurpose>
    </div>
  );
}

export default reservationCard;
