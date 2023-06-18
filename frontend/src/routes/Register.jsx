import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import api from '../api/axiosConfig';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASSWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const PHONE_REGEX = /^[1-9]\d{8}$/;
const PESEL_REGEX = /^\d{11}$/;
const ZIPCODE_REGEX =/^\d{5}$/;
const REGISTER_URL = "api/customer/login"


const Register = () => {

    //EMAIL
    const emailRef = useRef()
    const[email,setEmail] = useState("")
    const[validEmail, setValidEmail] = useState(false)
    const[emailFocus, setEmailFocus] = useState(false)

    //PASSWORD
    const[passwd,setPasswd] = useState("")
    const[validPasswd, setValidPasswd] = useState(false)
    const[passwdFocus, setPasswdFocus] = useState(false)

    //CONFIRM PASSWORD
    const[matchPasswd, setMatchPasswd] = useState("")
    const[validMatch, setValidMatch] = useState(false)
    const[matchFocus, setMatchFocus] = useState(false)

    //FIRST NAME
    const[name,setName] = useState("")

    //LAST NAME
    const[lastName,setLastName]= useState("")

    //PHONE
    const[phone,setPhone]= useState("")
    const[validPhone, setValidPhone] = useState(false)
    const[phoneFocus, setPhoneFocus] = useState(false)

    //SECURITY NUMBER(Pesel)
    const[securityNumber,setSecurityNumber] = useState("")
    const[validSecurityNumber, setValidSecurityNumber] = useState(false)
    const[securityNumberFocus, setSecurityNumberFocus] = useState(false)

    //COUNTRY
    const[country,setCountry]= useState("")

    //CITY
    const[city,setCity] = useState("")

    //STREET
    const[street, setStreet]= useState("")

    //BUILDING NUMBER
    const[buildNumber,setBuildNumber]= useState("")

    //ZIPCODE
    const[zipcode,setZipcode] = useState("")

    //STATE
    const[state, setState]= useState("")

    const[errMsg, setErrMsg] = useState("")
    const[success, setSuccess] = useState(false)

    useEffect(()=>{
        emailRef.current.focus()
        setValidEmail(EMAIL_REGEX.test(email))
    },[email])
    useEffect(()=>{
        setValidPasswd(PASSWD_REGEX.test(passwd))
        setValidMatch(passwd === matchPasswd)
    },[passwd,matchPasswd])

    useEffect(()=>{
        setErrMsg("")
    },[email,passwd,matchPasswd])

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            const response = await api.post(REGISTER_URL,
                JSON.stringify(
                    {
                        firstName: name,
                        lastName: lastName,
                        phoneNumber: phone,
                        email:email,
                        pesel:securityNumber,
                        password: passwd,
                        confirmPassword: matchPasswd,
                        country: country,
                        city: city,
                        streetName: street,
                        buildingNumber: buildNumber,
                        zipCode: zipcode,
                        state: state

                    }
                ),
                {
                    headers: {'Content-Type': "application/json"},
                }
                )
        }catch (err){

            if(!err?.response){
                setErrMsg("No Server Response")
            }//else if()
        }
    }


    return (
        <section>
            <p>
                {errMsg}
            </p>
                <h1>Rejestracja</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" >
                        Email:
                    </label>
                    <input
                        type={email}
                        id={email}
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                        onFocus={()=> setEmailFocus(true)}
                        onBlur={()=>setEmailFocus(false)}
                    />
                    <label htmlFor="password">
                        Hasło
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e)=>setPasswd(e.target.value)}
                        required
                        onFocus={()=>setPasswdFocus(true)}
                        onBlur={()=>setPasswdFocus(false)}


                    />
                    <label htmlFor="confirm_passwd">
                        Powtórz hasło
                    </label>
                    <input
                        type="password"
                        id="confirm_passwd"
                        onChange={(e)=>setMatchPasswd(e.target.value)}
                        required
                        onFocus={()=>setMatchFocus(true)}
                        onBlur={()=>setMatchFocus(false)}


                    />
                    <button disabled={!validEmail || !validPasswd || !validMatch}>Sign Up</button>
                </form>
            <p>
                Posiadasz konto?
                <Link to={"/Login"}>Zaloguj się</Link>
            </p>

        </section>
    );
};

export default Register;