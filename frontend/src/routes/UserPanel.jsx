import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
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
const USERS_URL = "api/customer/all";

const UserPanel = () => {
  const { auth, setAuth } = useContext(AuthContext);
  // const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [reservations, setReservations] = useState([]);

  const headers = useMemo(
    () => ({
      Authorization: `Bearer ${auth.accessToken}`,
    }),
    [auth.accessToken]
  );

  // const getUsers = useCallback(async () => {
  //   try {
  //     const response = await api.get(USERS_URL, { headers });
  //     const filteredData = response.data.filter(
  //       (item) => item.firstName !== "Admin"
  //     );
  //     setUsers(filteredData);
  //   } catch (err) {
  //     //console.log(err);
  //   }
  // }, [headers, setUsers]);

  // useEffect(() => {
  //   getUsers();
  // }, [getUsers]);

  // console.log(users);

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
          headers,
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
  }, [setUser, claim, headers]);

  useEffect(() => {
    try {
      api.get(RESERVATIONS_URL).then((res) => {
        const filtered = res.data.filter(
          (reservation) => reservation.customer.id == claim
        );
        setReservations(filtered);
      });
    } catch (err) {
      console.log(err);
    }
  }, [setReservations, claim]);

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
