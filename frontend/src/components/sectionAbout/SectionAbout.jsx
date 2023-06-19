import Navbar from "../sectionHeader/Navbar";
import SectionAboutCSS from "./SectionAbout.module.css";

function SectionAbout({ children }) {
  return (
    <div className={SectionAboutCSS.sectionAbout}>
      <Navbar></Navbar>
      {children}
    </div>
  );
}

export default SectionAbout;
