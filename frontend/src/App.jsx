import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ColumnContainerHeader from "./components/ColumnContainerHeader";

function App() {
  return (
    <>
      <section  style={{backgroundColor:'rgb(224, 224, 224)'}}>
      <Navbar />
      <ColumnContainerHeader/>
      <Carousel />

      </section>
      <Footer/>
    </>
    );
}

export default App;
