import React from 'react';
import {useNavigate} from "react-router";
import {useEffect, useRef, useState} from "react";
import api from "../../api/axiosConfig.js";
import Navbar from "../sectionHeader/Navbar.jsx";
import styles from "../../routes/RegisterStyle.module.css";
import {Link} from "react-router-dom";
import Footer from "../sectionFooter/Footer.jsx";
import {useContext} from "react";
import AuthContext from "../../context/AuthProvider.jsx";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const PHONE_REGEX = /^[1-9]\d{8}$/;
const PESEL_REGEX = /^\d{11}$/;
const ZIPCODE_REGEX = /^\d{5}$/;

const EditUser = () => {
    const navigate = useNavigate();
    const{auth} = useContext(AuthContext)
    //EMAIL
    const emailRef = useRef();
    const [email, setEmail] = useState('');

    const regex = /\/(\d+)$/;
    const match = window.location.pathname.match(regex);

    const[user,setUser] = useState()

    //loading STATE
    const[loading,setLoading] = useState(false)

    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    //FIRST NAME
    const [name, setName] = useState('');
    const [nameFocus, setNameFocus] = useState(false);

    //LAST NAME
    const [lastName, setLastName] = useState('');
    const [lastNameFocus, setLastNameFocus] = useState(false);

    //PHONE
    const [phone, setPhone] = useState('');
    const [validPhone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

    //SECURITY NUMBER(Pesel)
    const [securityNumber, setSecurityNumber] = useState('');
    const [validSecurityNumber, setValidSecurityNumber] = useState(false);
    const [securityNumberFocus, setSecurityNumberFocus] = useState(false);

    //COUNTRY
    const [country, setCountry] = useState('');
    const [countryFocus, setCountryFocus] = useState(false);

    //CITY
    const [city, setCity] = useState('');
    const [cityFocus, setCityFocus] = useState(false);

    //STREET
    const [street, setStreet] = useState('');
    const [streetFocus, setStreetFocus] = useState(false);

    //PASSWORD
    const [passwd, setPasswd] = useState('');
    const [matchPasswd, setMatchPasswd] = useState('');

    //BUILDING NUMBER
    const [buildNumber, setBuildNumber] = useState('');
    const [buildNumberFocus, setBuildNumberFocus] = useState(false);

    //ZIPCODE
    const [zipcode, setZipcode] = useState('');
    const [validZipcode, setValidZipcode] = useState(false);
    const [zipcodeFocus, setZipcodeFocus] = useState(false);

    //STATE
    const [state, setState] = useState('');
    const [stateFocus, setStateFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //email
    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);


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
        setErrMsg('');
    }, [email, zipcode, securityNumber, phone]);
    const headers = {
        Authorization: `Bearer ${auth.accessToken}`

    }


    const getUser = async ()=>{
        try {
            const response = await api.get(`/api/customer?userId=${match[1]}`,{headers})
            console.log(response.data)
            setUser(response.data)
            setEmail(response.data.email)
            setName(response.data.firstName)
            setLastName(response.data.lastName)
            setPhone(response.data.phoneNumber)
            setSecurityNumber(response.data.security)
            setCountry(response.data.customerAdress.country)
            setCity(response.data.customerAdress.city)
            setStreet(response.data.customerAdress.streetName)
            setBuildNumber(response.data.customerAdress.buildingNumber)
            setZipcode( response.data.customerAdress.zipCode)
            setState(response.data.customerAdress.state)
            setLoading(true)

        }
        catch (err){
            console.log(err)
            setLoading(false)
        }


    }
    useEffect(()=>{
        getUser()
    },[])



    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(name,lastName,phone,email,securityNumber,country,city,street,buildNumber,zipcode,state)
        try {

            const response = await api.patch(`/api/customer/${match[1]}`,

                JSON.stringify(
                    {
                    firstName: name,
                    lastName: lastName,
                    phoneNumber: phone,
                    email: email,
                    //pesel: securityNumber,
                    country: country,
                    city: city,
                    streetName: street,
                    buildingNumber: buildNumber,
                    zipCode: zipcode,
                    state: state
                }
                ),
                {
                    headers:
                        {
                            'Content-Type': 'application/json; charset=utf-8',
                            'Authorization': `Bearer ${auth.accessToken}`
                        },



                }


            );



            navigate('/admin/users');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
                console.log(response)
                console.log(err)
            } else if (err.response?.status === 400) {
                let errorMessage = '';
                // console.log(err.response.data)
                for (let pop in err.response.data) {
                    errorMessage += err.response.data[pop] + '<br/>';
                }
                setErrMsg(errorMessage);
                console.log(err)
                console.log(response)
            }

            else{
                console.log(err)
            }
        }
    };

   // console.log(user)
    return (
        <>
            <Navbar />
            <div className={styles.registerPage}>
                <p>{errMsg}</p>
                <h1>Edycja danych uzytkownika</h1>
                {
                    loading ?(
                        <form onSubmit={handleSubmit} >
                            <div className={styles.row}>
                                <div className={styles.column1of2}>
                                    <label htmlFor="email">Email:</label>
                                    <br />
                                    <input
                                        type={email}
                                        id={email}
                                        ref={emailRef}
                                        value={user.email}
                                        autoComplete="off"
                                        aria-invalid={validEmail ? 'false' : 'true'}
                                        aria-describedby="uidnote"
                                        onChange={(e) => {
                                            user.email= e.target.value
                                            setEmail(e.target.value)
                                            console.log(email)

                                        } }
                                        required
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}

                                    />
                                </div>
                                <div className={styles.column1of2}>
                                    <label htmlFor="name">Imię:</label>
                                    <br />
                                    <input
                                        type="text"
                                        id={name}
                                        value={user.firstName}
                                        autoComplete="off"
                                        onChange={(e) => {
                                            user.firstName= e.target.value
                                            setName(e.target.value)
                                        }}
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
                                        value={user.lastName}
                                        autoComplete="off"
                                        onChange={(e) =>{
                                            user.lastName= e.target.value
                                            setLastName(e.target.value)
                                        } }
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
                                        value={user.phoneNumber}
                                        autoComplete="off"
                                        onChange={(e) =>{
                                            user.phoneNumber= e.target.value
                                            setPhone(e.target.value)
                                        }}
                                        required
                                        onFocus={() => setPhoneFocus(true)}
                                        onBlur={() => setPhoneFocus(false)}
                                    />
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.column1of2}>
                                    <label htmlFor="securityNumber">Numer pesel:</label>
                                    <br />
                                    <input
                                        type="text"
                                        id={securityNumber}
                                        value={user.pesel}
                                        autoComplete="off"
                                        onChange={(e) =>{
                                            user.pesel= e.target.value
                                            setSecurityNumber(e.target.value)
                                        }}
                                        required
                                        onFocus={() => setSecurityNumberFocus(true)}
                                        onBlur={() => setSecurityNumberFocus(false)}
                                    />
                                </div>
                                <div className={styles.column1of2}>
                                    <label htmlFor="country">Kraj:</label>
                                    <br />
                                    <input
                                        type="text"
                                        id="country"
                                        value={user.customerAdress.country}
                                        autoComplete="off"
                                        onChange={(e) => {
                                            user.customerAdress.country= e.target.value
                                            setCountry(e.target.value)
                                        }}
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
                                        value={user.customerAdress.city}
                                        autoComplete="off"
                                        onChange={(e) =>{
                                            user.customerAdress.city= e.target.value
                                            setCity(e.target.value)
                                        } }
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
                                        value={user.customerAdress.streetName}
                                        onChange={(e) =>{
                                            user.customerAdress.streetName= e.target.value
                                            setStreet(e.target.value)
                                        } }
                                        required
                                        onFocus={() => setStreetFocus(true)}
                                        onBlur={() => setStreetFocus(false)}
                                    />
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.column1of2}>
                                    <label htmlFor="buildingNumber">
                                        Numer budynku:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        id="buildingNumber"
                                        autoComplete="off"
                                        value={user.customerAdress.buildingNumber}
                                        onChange={(e) =>{
                                            user.customerAdress.buildingNumber= e.target.value
                                            setBuildNumber(e.target.value)
                                        } }
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
                                        value={user.customerAdress.zipCode}
                                        onChange={(e) =>{
                                            user.customerAdress.zipCode= e.target.value
                                            setZipcode(e.target.value)
                                        }}
                                        required
                                        onFocus={() => setZipcodeFocus(true)}
                                        onBlur={() => setZipcodeFocus(false)}
                                    />
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.column1of2}>
                                    <label htmlFor="state">Stan:</label>
                                    <br />
                                    <input
                                        type="text"
                                        id="state"
                                        value={user.customerAdress.state}
                                        autoComplete="off"
                                        onChange={(e) =>{
                                            user.customerAdress.state= e.target.value
                                            setState(e.target.value)
                                        }}
                                        required
                                        onFocus={() => setStateFocus(true)}
                                        onBlur={() => setStateFocus(false)}
                                    />
                                </div>
                            </div>
                            <div className={styles.signUpButton}>
                                <button>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    ):<div>Loading</div>
                }


                    <button className={styles.backButton}>
                        <Link to="/admin/users">
                        Cofnij
                        </Link>
                    </button>


            </div>
            <Footer />
        </>
    );
};

export default EditUser;