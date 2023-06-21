import ButtonMultipurposeCSS from "./ButtonMultipurpose.module.css";
import { Link } from "react-router-dom";

function ButtonMultipurpose({ to, children, onClick},) {

    const handleLogOut = () =>{
        sessionStorage.clear()

    }

  return (
      !onClick ? (
          <Link to={to}>
              <button className={ButtonMultipurposeCSS.btn}>{children}</button>
          </Link>
          ):(
          <Link to={to}>
              <button className={ButtonMultipurposeCSS.btn} onClick={handleLogOut}>{children}</button>
          </Link>
      )

  );
}

export default ButtonMultipurpose;
