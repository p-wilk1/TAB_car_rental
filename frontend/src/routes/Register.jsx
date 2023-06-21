import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosConfig";
const REGISTER_URL = "api/customer/register";
import styles from "./RegisterStyle.module.css";
import { useNavigate } from "react-router";
import Navbar from "../components/sectionHeader/Navbar";
import Footer from "../components/sectionFooter/Footer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const PHONE_REGEX = /^[1-9]\d{8}$/;
const PESEL_REGEX = /^\d{11}$/;
const ZIPCODE_REGEX = /^\d{5}$/;

const Register = () => {
  const navigate = useNavigate();
  //EMAIL
  const emailRef = useRef();
  const [email, setEmail] = useState("");

  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  //PASSWORD
  const [passwd, setPasswd] = useState("");
  const [validPasswd, setValidPasswd] = useState(false);
  const [passwdFocus, setPasswdFocus] = useState(false);

  //CONFIRM PASSWORD
  const [matchPasswd, setMatchPasswd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  //FIRST NAME
  const [name, setName] = useState("");
  const [nameFocus, setNameFocus] = useState(false);

  //LAST NAME
  const [lastName, setLastName] = useState("");
  const [lastNameFocus, setLastNameFocus] = useState(false);

  //PHONE
  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  //SECURITY NUMBER(Pesel)
  const [securityNumber, setSecurityNumber] = useState("");
  const [validSecurityNumber, setValidSecurityNumber] = useState(false);
  const [securityNumberFocus, setSecurityNumberFocus] = useState(false);

  //COUNTRY
  const [country, setCountry] = useState("");
  const [countryFocus, setCountryFocus] = useState(false);

  //CITY
  const [city, setCity] = useState("");
  const [cityFocus, setCityFocus] = useState(false);

  //STREET
  const [street, setStreet] = useState("");
  const [streetFocus, setStreetFocus] = useState(false);

  //BUILDING NUMBER
  const [buildNumber, setBuildNumber] = useState("");
  const [buildNumberFocus, setBuildNumberFocus] = useState(false);

  //ZIPCODE
  const [zipcode, setZipcode] = useState("");
  const [validZipcode, setValidZipcode] = useState(false);
  const [zipcodeFocus, setZipcodeFocus] = useState(false);

  //STATE
  const [state, setState] = useState("");
  const [stateFocus, setStateFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //email
  useEffect(() => {
    emailRef.current.focus();
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  //password and confirm password
  useEffect(() => {
    setValidPasswd(PASSWD_REGEX.test(passwd));
    setValidMatch(passwd === matchPasswd);
  }, [passwd, matchPasswd]);

  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(phone));
  }, [phone]);
  useEffect(() => {
    setValidSecurityNumber(PESEL_REGEX.test(securityNumber));
  }, [securityNumber]);

  useEffect(() => {
    setValidZipcode(ZIPCODE_REGEX.test(zipcode));
  }, [zipcode]);

  useEffect(() => {
    setErrMsg("");
  }, [email, passwd, matchPasswd, zipcode, securityNumber, phone]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        REGISTER_URL,
        JSON.stringify({
          firstName: name,
          lastName: lastName,
          phoneNumber: phone,
          email: email,
          pesel: securityNumber,
          password: passwd,
          confirmPassword: matchPasswd,
          country: country,
          city: city,
          streetName: street,
          buildingNumber: buildNumber,
          zipCode: zipcode,
          state: state,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      navigate("/Login");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        let errorMessage = "";
        // console.log(err.response.data)
        for (let pop in err.response.data) {
          errorMessage += err.response.data[pop] + "<br/>";
        }
        setErrMsg(errorMessage);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.registerPage}>
        <p>{errMsg}</p>
        <h1>Rejestracja</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.column1of2}>
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type={email}
                id={email}
                ref={emailRef}
                autoComplete="off"
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote"
                onChange={(e) => setEmail(e.target.value)}
                required
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  emailFocus && email && !validEmail
                    ? "instructions"
                    : "offscreen"
                }
              >
                Wprowadz adres email.
                <br />
              </p>
            </div>
            <div className={styles.column1of2}>
              <label htmlFor="password">Hasło</label>
              <br />
              <input
                type="password"
                id="password"
                onChange={(e) => setPasswd(e.target.value)}
                required
                onFocus={() => setPasswdFocus(true)}
                onBlur={() => setPasswdFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  passwdFocus && passwd && !validPasswd
                    ? "instructions"
                    : "offscreen"
                }
              >
                Hasło musi sie skladac z minimum 8 znaków.
                <br />
                co najmniej jednej wielkiej litery,.
                <br />
                cyfry oraz znaku specjalnego
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1of2}>
              <label htmlFor="confirm_passwd">Powtórz hasło</label>
              <br />
              <input
                type="password"
                id="confirm_passwd"
                onChange={(e) => setMatchPasswd(e.target.value)}
                required
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                Musi odpowiadać pierwszemu polu wprowadzania hasła.
              </p>
            </div>
            <div className={styles.column1of2}>
              <label htmlFor="name">Imię:</label>
              <br />
              <input
                type="text"
                id={name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                required
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1of2}>
              <label htmlFor="lastName">Nazwisko:</label>
              <br />
              <input
                type="text"
                id={lastName}
                autoComplete="off"
                onChange={(e) => setLastName(e.target.value)}
                required
                onFocus={() => setLastNameFocus(true)}
                onBlur={() => setLastNameFocus(false)}
              />
            </div>
            <div className={styles.column1of2}>
              <label htmlFor="phone">Numer telefonu:</label>
              <br />
              <input
                type="tel"
                id={phone}
                autoComplete="off"
                onChange={(e) => setPhone(e.target.value)}
                required
                onFocus={() => setPhoneFocus(true)}
                onBlur={() => setPhoneFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  phoneFocus && !validPhone ? "instructions" : "offscreen"
                }
              >
                Wprowadz poprawny numer telefonu.
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1of2}>
              <label htmlFor="securityNumber">Numer pesel:</label>
              <br />
              <input
                type="text"
                id={securityNumber}
                autoComplete="off"
                onChange={(e) => setSecurityNumber(e.target.value)}
                required
                onFocus={() => setSecurityNumberFocus(true)}
                onBlur={() => setSecurityNumberFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  securityNumberFocus && !validSecurityNumber
                    ? "instructions"
                    : "offscreen"
                }
              >
                Wprowadz prawidlowy numer pesel.
              </p>
            </div>
            <div className={styles.column1of2}>
              <label htmlFor="country">Kraj:</label>
              <br />
              <input
                type="text"
                id="country"
                autoComplete="off"
                onChange={(e) => setCountry(e.target.value)}
                required
                onFocus={() => setCountryFocus(true)}
                onBlur={() => setCountryFocus(false)}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1of2}>
              <label htmlFor="city">Miasto:</label>
              <br />
              <input
                type="text"
                id="city"
                autoComplete="off"
                onChange={(e) => setCity(e.target.value)}
                required
                onFocus={() => setCityFocus(true)}
                onBlur={() => setCityFocus(false)}
              />
            </div>
            <div className={styles.column1of2}>
              <label htmlFor="streetName">Nazwa ulicy:</label>
              <br />
              <input
                type="text"
                id="streetName"
                autoComplete="off"
                onChange={(e) => setStreet(e.target.value)}
                required
                onFocus={() => setStreetFocus(true)}
                onBlur={() => setStreetFocus(false)}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1of2}>
              <label htmlFor="buildingNumber">Numer budynku:</label>
              <br />
              <input
                type="text"
                id="buildingNumber"
                autoComplete="off"
                onChange={(e) => setBuildNumber(e.target.value)}
                required
                onFocus={() => setBuildNumberFocus(true)}
                onBlur={() => setBuildNumberFocus(false)}
              />
            </div>
            <div className={styles.column1of2}>
              <label htmlFor="zipcode">
                Kod pocztowy:
                <br />
              </label>
              <input
                type="text"
                id="zipcode"
                autoComplete="off"
                onChange={(e) => setZipcode(e.target.value)}
                required
                onFocus={() => setZipcodeFocus(true)}
                onBlur={() => setZipcodeFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  zipcodeFocus && !validZipcode ? "instructions" : "offscreen"
                }
              >
                Wprowadz kod pocztowy w formacie XXXXX gdzie X to cyfra.
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1of2}>
              <label htmlFor="state">Stan:</label>
              <br />
              <input
                type="text"
                id="state"
                autoComplete="off"
                onChange={(e) => setState(e.target.value)}
                required
                onFocus={() => setStateFocus(true)}
                onBlur={() => setStateFocus(false)}
              />
            </div>
          </div>
          <div className={styles.signUpButton}>
            <button
              disabled={
                !validEmail ||
                !validPasswd ||
                !validMatch ||
                !validPhone ||
                !validSecurityNumber ||
                !validZipcode ||
                !name.length > 0 ||
                !lastName.length > 0 ||
                !country.length > 0 ||
                !city.length > 0 ||
                !street.length > 0 ||
                !buildNumber.length > 0 ||
                !state.length > 0
              }
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className={styles.signUpLogin}>
          <p>
            Posiadasz konto?
            <Link to={"/Login"}>Zaloguj się</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
