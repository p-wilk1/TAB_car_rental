import ButtonMultipurposeCSS from "./ButtonMultipurpose.module.css";
import { Link } from "react-router-dom";

function ButtonMultipurpose({ to, children, onClick},) {



  return (
      !onClick ? (
          <Link to={to}>
              <button className={ButtonMultipurposeCSS.btn}>{children}</button>
          </Link>
          ):(
          <Link to={to}>
              <button className={ButtonMultipurposeCSS.btn} onClick={onClick}>{children}</button>
          </Link>
      )

  );
}

export default ButtonMultipurpose;
