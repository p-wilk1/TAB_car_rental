import React, {useEffect, useState} from 'react';
import UserStyle from "./Users.module.css";
import api from "../../api/axiosConfig.js";

const Users = () => {

    const [users,setUsers] = useState()

    const getUsers = async ()=>{
        try{
            const response = await api.get("api/car/all")
            setUsers(response.data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getUsers()
    },[])

    return (
        <>
            <section className={UserStyle.dashboard}>
                <div className={UserStyle.dashContent}>
                    <div className="overview">
                    </div>

                    <div className={UserStyle.activity}>
                        <div className={UserStyle.title}>
                            <i className="uil uil-clock-three"></i>
                            <span className={UserStyle.text}>Aktualni uzytkownicy</span>
                        </div>


                        {
                            users?.map((user,i)=>{
                                return(
                                    <div className={UserStyle.activityData}>
                                        <div className={UserStyle.data}>
                                            {i === 0 && <span className={UserStyle.dataTitle}>Imie</span>}
                                            <span className={UserStyle.dataList}>{user.brand}</span>

                                        </div>
                                        <div className={UserStyle.data}>
                                            {i === 0 && <span className={UserStyle.dataTitle}>Nazwisko</span>}
                                            <span className={UserStyle.dataList}>{user.model}</span>

                                        </div>
                                        <div className={UserStyle.data}>
                                            {i === 0 && <span className={UserStyle.dataTitle}>Telefon</span>}
                                            <span className={UserStyle.dataList}>{user.registrationNumber}</span>

                                        </div>
                                        <div className={UserStyle.data}>
                                            {i === 0 && <span className={UserStyle.dataTitle}>email</span>}
                                            <span className={UserStyle.dataList}>{user.carInfo.mileage}</span>

                                        </div>
                                        <div className={UserStyle.data}>
                                            {i === 0 && <span className={UserStyle.dataTitle}>nr.pesel</span>}
                                            <span className={UserStyle.dataList}>{user.carInfo.productionYear}</span>

                                        </div>
                                        <div className={UserStyle.data}>
                                            {i === 0 && <span className={UserStyle.dataTitle}>Cena[zl]</span>}
                                            <span className={UserStyle.dataList}>{user.pricePerDay}</span>
                                        </div>
                                        <div className={UserStyle.data}>
                                            {i === 0 && <span className={UserStyle.dataTitle}>Biuro</span>}
                                            <span className={UserStyle.dataList}>{user.office.officeName}</span>
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

export default Users;