import ButtonMultipurposeCSS from "./ButtonMultipurpose.module.css";
import { Link } from "react-router-dom";

function ButtonMultipurpose({ to, children }) {
  return (
    <Link to={to}>
      <button className={ButtonMultipurposeCSS.btn}>{children}</button>
    </Link>
  );
}

export default ButtonMultipurpose;
