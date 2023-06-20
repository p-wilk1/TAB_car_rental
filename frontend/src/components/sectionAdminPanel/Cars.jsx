import React, {useEffect, useState} from 'react';
import CarsStyle from "./Cars.module.css";
import api from "../../api/axiosConfig.js";
import ButtonMultipurpose from "../shared/ButtonMultipurpose.jsx";

const Cars = () => {
    let i = 0;

    const [cars,setCars] = useState()

    const getCars = async ()=>{
        try{
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
            <section className={CarsStyle.dashboard}>
                <div className={CarsStyle.dashContent}>
                    <div className="overview">
                    </div>

                    <div className={CarsStyle.activity}>
                        <div className={CarsStyle.title}>
                            <i className="uil uil-clock-three"></i>
                            <span className={CarsStyle.text}>Aktualne samochody</span>
                        </div>

                        <div className={CarsStyle.activityData2}>
                            <span className={CarsStyle.dataTitle}>Marka</span>
                            <span className={CarsStyle.dataTitle}>Model</span>
                            <span className={CarsStyle.dataTitle}>Rejestracja</span>
                            <span className={CarsStyle.dataTitle}>Przebieg[km]</span>
                            <span className={CarsStyle.dataTitle}> R.produkcji</span>
                            <span className={CarsStyle.dataTitle}>Cena[zl]</span>
                            <span className={CarsStyle.dataTitle}>Biuro</span>
                        </div>

                        {
                            cars?.map((car,i)=>{
                                return(
                                    <div className={CarsStyle.activityData}>
                                        <div className={CarsStyle.data}>

                                            <span className={CarsStyle.dataList}>{car.brand}</span>

                                        </div>
                                        <div className={CarsStyle.data}>

                                            <span className={CarsStyle.dataList}>{car.model}</span>

                                        </div>
                                        <div className={CarsStyle.data}>

                                            <span className={CarsStyle.dataList}>{car.registrationNumber}</span>

                                        </div>
                                        <div className={CarsStyle.data}>

                                            <span className={CarsStyle.dataList}>{car.carInfo.mileage}</span>

                                        </div>
                                        <div className={CarsStyle.data}>

                                            <span className={CarsStyle.dataList}>{car.carInfo.productionYear}</span>

                                        </div>
                                        <div className={CarsStyle.data}>

                                            <span className={CarsStyle.dataList}>{car.pricePerDay}</span>
                                        </div>
                                        <div className={CarsStyle.data}>
                                            <span className={CarsStyle.dataList}>{car.office.officeName}</span>
                                        </div>



                                    </div>

                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    );
};

export default Cars;