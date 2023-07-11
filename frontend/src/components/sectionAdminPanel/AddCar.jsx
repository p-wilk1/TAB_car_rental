import React from "react";
import { useNavigate } from "react-router";
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../context/AuthProvider.jsx";
import api from "../../api/axiosConfig.js";
import styles from "./AddCar.module.css";
import { Link } from "react-router-dom";

const AddCar = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  //EMAIL
  const typeRef = useRef();

  //type
  const [type, setType] = useState("");
  const [typeFocus, setTypeFocus] = useState(false);

  //model
  const [model, setModel] = useState("");
  const [modelFocus, setModelFocus] = useState(false);

  //brand
  const [brand, setBrand] = useState("");
  const [brandFocus, setBrandFocus] = useState(false);

  //registration number
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [registrationNumberFocus, setRegistrationNumberFocus] = useState(false);

  //price
  const [price, setPricePerDay] = useState("0");
  const [priceFocus, setPriceFocus] = useState(false);

  //image
  const [imagePath, setImagePath] = useState(null);
  const [imagePathFocus, setImagePathFocus] = useState(false);

  //seatsNumber
  const [seatsNumber, setSeatsNumber] = useState("2");
  const [seatsNumberFocus, setSeatsNumberFocus] = useState(false);

  //doorsNumber
  const [doorsNumber, setDoorsNumber] = useState("2");
  const [doorsNumberFocus, setdoorsNumberFocus] = useState(false);

  //gearbox
  const [gearboxType, setGearboxType] = useState("Manualna");

  //color
  const [color, setColor] = useState("");
  const [colorFocus, setColorFocus] = useState(false);

  //description
  const [description, setDescription] = useState("");
  const [descriptionFocus, setDescriptionFocus] = useState(false);

  //production year
  const [productionYear, setProductionYear] = useState("");
  const [productionFocus, setProductionFocus] = useState(false);

  //mileage
  const [mileage, setMileage] = useState("");
  const [mileageFocus, setMileageFocus] = useState(false);

  //fuel type
  const [fuelType, setFuelType] = useState("benzyna");

  //office
  const [office, setOffice] = useState("Office A");

  const [errMsg, setErrMsg] = useState("");

  const handleGearboxTypeChange = (event) => {
    setGearboxType(event.target.value);
  };

  const handleSeatsNumberChange = (event) => {
    setSeatsNumber(event.target.value);
  };
  const handleDoorsNumberChange = (event) => {
    setDoorsNumber(event.target.value);
  };
  const handleFuelTypeChange = (event) => {
    setFuelType(event.target.value);
  };

  const handleOfficeChange = (event) => {
    setOffice(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    const filePath = file.name;
    console.log(filePath);
    setImagePathFocus(file);
    setImagePath(filePath);
  };

  useEffect(() => {
    setErrMsg("");
  }, [
    model,
    type,
    brand,
    registrationNumber,
    price,
    imagePath,
    seatsNumber,
    doorsNumber,
    gearboxType,
    office,
  ]);

  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Bearer ${auth.accessToken}`,
    location: "",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/api/car/add",

        JSON.stringify({
          type: type,
          model: model,
          brand: brand,
          registrationNumber: registrationNumber,
          pricePerDay: price,
          imagePath: imagePath,
          seatsNumber: seatsNumber,
          doorsNumber: doorsNumber,
          gearboxType: gearboxType,
          color: color,
          description: description,
          productionYear: productionYear,
          mileage: mileage,
          fuelType: fuelType,
        }),

        {
          headers: headers,
        }
      );

      let officeId = 1;
      if (office === "Office A") {
        officeId = 1;
      } else if (office === "Office B") {
        officeId = 2;
      } else {
        officeId = 3;
      }

      const carId = response.headers.location.split("/").pop();

      const reponse2 = await api.patch(
        `/api/car/relocation?carId=${carId}&officeId=${officeId}`,
        {},
        {
          headers: headers,
        }
      );

      navigate("/admin/cars");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
        console.log(response);
        console.log(err);
      } else if (err.response?.status === 400) {
        let errorMessage = "";
        // console.log(err.response.data)
        for (let pop in err.response.data) {
          errorMessage += err.response.data[pop] + "<br/>";
        }
        setErrMsg(errorMessage);
        console.log(err);
        console.log(response);
      } else {
        console.log(err);
      }
    }
  };

  //console.log(gearboxType)
  console.log(imagePath);
  return (
    <>
      <div className={styles.registerPage}>
        <p>{errMsg}</p>
        <h1>Dodawanie nowego samochodu</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.column1of2}>
              <label htmlFor="type">Typ:</label>
              <br />
              <input
                type="text"
                id={type}
                ref={typeRef}
                autoComplete="off"
                // aria-invalid={validEmail ? 'false' : 'true'}
                aria-describedby="uidnote"
                required
                onChange={(e) => setType(e.target.value)}
                onFocus={() => setTypeFocus(true)}
                onBlur={() => setTypeFocus(false)}
              />
            </div>
            <div className={styles.column1of2}>
              <label htmlFor="model">Model:</label>
              <br />
              <input
                type="text"
                id={model}
                autoComplete="off"
                required
                onChange={(e) => setModel(e.target.value)}
                onFocus={() => setModelFocus(true)}
                onBlur={() => setModelFocus(false)}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1of2}>
              <label htmlFor="brand">Marka:</label>
              <br />
              <input
                type="text"
                id={brand}
                autoComplete="off"
                required
                onChange={(e) => setBrand(e.target.value)}
                onFocus={() => setBrandFocus(true)}
                onBlur={() => setBrandFocus(false)}
              />
            </div>
            <div className={styles.column1of2}>
              <label htmlFor="registrationNumber">Numer rejestracji:</label>
              <br />
              <input
                type="text"
                id={registrationNumber}
                autoComplete="off"
                required
                onChange={(e) => setRegistrationNumber(e.target.value)}
                onFocus={() => setRegistrationNumberFocus(true)}
                onBlur={() => setRegistrationNumberFocus(false)}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1of2}>
              <label htmlFor="price">Cena za dobe:</label>
              <br />
              <input
                type="text"
                id={price}
                autoComplete="off"
                required
                onChange={(e) => setPricePerDay(e.target.value)}
                onFocus={() => setPriceFocus(true)}
                onBlur={() => setPriceFocus(false)}
              />
            </div>
            <div className={styles.column1of2}>
              <label htmlFor="country">Zdjecie:</label>
              <br />
              <input
                type="file"
                name="carImage"
                required
                accept="image/*"
                onChange={handleImageUpload}
                alt="dodaj zdjecie samochodu"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1of2}>
              <label htmlFor="city">Liczba miejsc:</label>
              <br />
              <select
                id={seatsNumber}
                value={seatsNumber}
                onChange={handleSeatsNumberChange}
              >
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className={styles.column1of2}>
              <label htmlFor="streetName">Liczba drzwi:</label>
              <br />
              <select
                id={doorsNumber}
                value={doorsNumber}
                onChange={handleDoorsNumberChange}
              >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1of2}>
              <label htmlFor="gearboxType">Typ skrzyni biegów:</label>
              <br />
              <select
                id={gearboxType}
                value={gearboxType}
                onChange={handleGearboxTypeChange}
              >
                <option value="manualna">Manualna</option>
                <option value="automat">Automatyczna</option>
              </select>
            </div>
            <div className={styles.column1of2}>
              <label htmlFor="color">
                Kolor:
                <br />
              </label>
              <input
                type="text"
                id={color}
                autoComplete="off"
                required
                onChange={(e) => setColor(e.target.value)}
                onFocus={() => setColorFocus(true)}
                onBlur={() => setColorFocus(false)}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1of2}>
              <label htmlFor="description">Opis:</label>
              <br />
              <input
                type="text"
                id={description}
                autoComplete="off"
                required
                onChange={(e) => setDescription(e.target.value)}
                onFocus={() => setDescriptionFocus(true)}
                onBlur={() => setDescriptionFocus(false)}
              />
            </div>
            <div className={styles.column1of2}>
              <label htmlFor="productionYear">Rok produkcji:</label>
              <br />
              <input
                type="text"
                id={productionYear}
                autoComplete="off"
                required
                onChange={(e) => setProductionYear(e.target.value)}
                onFocus={() => setProductionFocus(true)}
                onBlur={() => setProductionFocus(false)}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1of2}>
              <label htmlFor="mileage">Przebieg[tys.km]:</label>
              <br />
              <input
                type="text"
                id={mileage}
                autoComplete="off"
                required
                onChange={(e) => setMileage(e.target.value)}
                onFocus={() => setMileageFocus(true)}
                onBlur={() => setMileageFocus(false)}
              />
            </div>
            <div className={styles.column1of2}>
              <label htmlFor="fuelType">Typ paliwa:</label>
              <br />
              <select
                id={fuelType}
                value={fuelType}
                onChange={handleFuelTypeChange}
              >
                <option value="benzyna">Benzyna</option>
                <option value="diesel">Diesel</option>
                <option value="hybryda">Hybryda</option>
                <option value="elektrk">Elektryczny</option>
                <option value="gaz">Gaz</option>
              </select>
            </div>
          </div>
          <div className={styles.row}>
            <label htmlFor="localization">Miejsce alokacji:</label>
            <br />
            <select id={office} value={office} onChange={handleOfficeChange}>
              <option value="Office A">Office A</option>
              <option value="Office B">Office B</option>
              <option value="Office C">Office C</option>
            </select>
          </div>
          <div className={styles.signUpButton}>
            <button>Dodaj samochód</button>
          </div>
        </form>

        <button className={styles.backButton}>
          <Link to="/admin/cars">Wróć</Link>
        </button>
      </div>
    </>
  );
};

export default AddCar;
