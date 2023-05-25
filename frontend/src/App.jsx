import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ColumnContainerHeader from "./components/ColumnContainerHeader";

function App() {
  return (
    <>
      <section style={{   backgroundSize:'cover', backgroundPosition:'center',backgroundAttachment:'fixed'}}>
      <Navbar />
      <ColumnContainerHeader/>
      {/* <Carousel /> */}
      
      </section>
      <Footer/>
    </>
    );
}

export default App;
