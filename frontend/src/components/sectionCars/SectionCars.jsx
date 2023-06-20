import Header from "../shared/Header";
import CarFilters from "./CarFilters";
import CarList from "./CarList";
import styles from "./SectionCars.module.css";

function SectionCars({ children }) {
  return <div className={styles.sectionCars}>{children}</div>;
}

export default SectionCars;
