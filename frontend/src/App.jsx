import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ColumnContainerHeader from "./components/ColumnContainerHeader";
import SectionAbout from "./components/sectionAbout/SectionAbout";
import HeaderCard from "./components/HeaderCard";
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
