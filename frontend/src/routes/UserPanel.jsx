import React, { useContext, useEffect, useState } from "react";
import styles from "../routes/UserPanel.module.css";
import Navbar from "../components/sectionHeader/Navbar";
import Footer from "../components/sectionFooter/Footer";
import GeneralInfo from "../components/sectionUserPanel/GeneralInfo";
import UserReservations from "../components/sectionUserPanel/UserReservations";
import AuthContext from "../context/AuthProvider";
import jwtDecode from "jwt-decode";
import api from "../api/axiosConfig";

const RESERVATIONS_URL = "api/res";
const USER_URL = "api/customer";

const UserPanel = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const [user, setUser] = useState({});
  const [reservations, setReservations] = useState([]);

  let claim;
  useEffect(() => {
    setAuth({ accessToken: null });
  }, [auth.accessToken, setAuth]);

  if (auth.accessToken) {
    const token = jwtDecode(auth.accessToken);
    claim =
      token[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
      ];
  }
  console.log(`userId: ${claim}`);

  useEffect(() => {
    try {
      api
        .get(USER_URL, {
          params: {
            userId: claim,
          },
        })
        .then((res) => {
          console.log("response:", res);
          setUser(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [setUser, claim]);

  useEffect(() => {
    try {
      api.get(RESERVATIONS_URL).then((res) => {
        // console.log("response:", res.data);
        // console.log("claim", claim);
        // console.log("test", res.data[0].customer.id);
        // res.data.forEach((reservation) => console.log(reservation.customer.id));
        const filtered = res.data.filter(
          (reservation) => reservation.customer.id == claim
        );
        // console.log("fitlered:", filtered);
        setReservations(filtered);
      });
    } catch (err) {
      console.log(err);
    }
  }, [setReservations, claim]);
  //   console.log(reservations[0]);
  //   console.log(user);
  //   console.log(`rezerwacje: ${reservations[0]}`);
  return (
    <>
      <Navbar />
      {auth.accessToken && (
        <main className={styles.userPanelMain}>
          <GeneralInfo user={user} />
          <h2>Twoje rezerwacje:</h2>
          <UserReservations reservations={reservations} />
        </main>
      )}
      <Footer />
    </>
  );
};

export default UserPanel;
