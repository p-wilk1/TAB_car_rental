import Navbar from '../components/sectionHeader/Navbar';
import Footer from '../components/sectionFooter/Footer';
import ColumnContainerHeader from '../components/sectionHeader/ColumnContainerHeader';
import SectionAbout from '../components/sectionAbout/SectionAbout';
import CarList from '../components/sectionCars/CarList';
import {useContext, useEffect, useState} from 'react';
import SectionCars from '../components/sectionCars/SectionCars';
import Header from '../components/shared/Header';
import CarFilters from '../components/sectionCars/CarFilters';
import AboutHeader from '../components/sectionAbout/AboutHeader';
import ColumnContainerAbout from '../components/sectionAbout/ColumnContainerAbout';
import api from '../api/axiosConfig';
import ButtonMultipurpose from "../components/shared/ButtonMultipurpose.jsx";
import {Link} from "react-router-dom";
import AuthContext from "../context/AuthProvider.jsx";

const Home = () => {
    const [cars, setCars] = useState();

    const{auth} = useContext(AuthContext)
    let photo;
    console.log(auth)

    const getCars = async ()=>{
        try{
            //TODO ZDJECIA NIE DZIALAJA
            const response = await api.get("api/car/all")

            setCars(response.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getCars()
    },[])
    return (
        <>
            <Navbar auth={auth} />
            <ColumnContainerHeader />
            <SectionAbout>
                <AboutHeader />
                <ColumnContainerAbout />
            </SectionAbout>
            <SectionCars>
                <Header>Nasze samochody</Header>
                <CarFilters />
                <CarList cars={cars} img2={photo} />
                <Link to={"/Offer"}>
                    <ButtonMultipurpose>
                        Zobacz więcej
                    </ButtonMultipurpose>
                </Link>

            </SectionCars>

            <Footer />
        </>
    );
}

export default Home;