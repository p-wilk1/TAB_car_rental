import Navbar from "./components/sectionHeader/Navbar";
import Footer from "./components/sectionFooter/Footer";
import ColumnContainerHeader from "./components/sectionHeader/ColumnContainerHeader";
import SectionAbout from "./components/sectionAbout/SectionAbout";
import HeaderCard from "./components/sectionHeader/HeaderCard";
import Carousel from "./components/sectionHeader/Carousel";

function App() {
  return (
    <>
      <Navbar />
        <ColumnContainerHeader/>
      <SectionAbout>
      </SectionAbout>


      <Footer/>
    </>
    );
}

export default App;
