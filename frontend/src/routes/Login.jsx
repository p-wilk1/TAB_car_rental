import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import AuthContext, { useAuth } from "../context/AuthProvider.jsx";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthProvider";

const LOGIN_URL = "api/customer/login";

/*
email: drabik@gmail.com
haslo: Mikro123!
imie: Gabriel
nazwisko: Drabik
nr: 123456789
pesel: 98010683519
kod pocztowy: 32300
reszta chuj
*/

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  // const { setAuth } = useAuth();
  const { setAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  //const[success,setSuccess] = useState(false)

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, passwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        LOGIN_URL,
        JSON.stringify({ email: email, password: passwd }),
        {
          headers: { "Content-Type": "application/json" },
          //withCredentials: true
        }
      );
      const accessToken = response?.data;

      //setting auth token
      setAuth({  accessToken });
      //saving token to storage
      sessionStorage.setItem("token", accessToken)
      navigate("/offer");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Incorrect data. Try again");
      }
      emailRef.current.focus();
    }
  };

  return (
    <section>
      <p>{errMsg}</p>
      <h1>Logowanie</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor="password">Hasło:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPasswd(e.target.value)}
          value={passwd}
          required
        />
        <button>Zaloguj się</button>
      </form>
      <p>
        Nie masz konta?
        <span>
          <Link to={"/Register"}>Załóż konto</Link>
        </span>
      </p>
    </section>
  );
};

export default Login;
