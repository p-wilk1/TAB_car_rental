import Navbar from "./components/sectionHeader/Navbar";
import Footer from "./components/sectionFooter/Footer";
import ColumnContainerHeader from "./components/sectionHeader/ColumnContainerHeader";
import SectionAbout from "./components/sectionAbout/SectionAbout";
import AboutHeader from "./components/sectionAbout/AboutHeader";
import ColumnContainerAbout from "./components/sectionAbout/ColumnContainerAbout";

function App() {
  return (
    <>
      <Navbar />
        <ColumnContainerHeader/>
      <SectionAbout>
          <AboutHeader/>
          <ColumnContainerAbout/>
      </SectionAbout>


      <Footer/>
    </>
    );
}

export default App;
