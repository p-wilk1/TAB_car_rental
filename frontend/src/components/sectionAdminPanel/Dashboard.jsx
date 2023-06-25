import React, {useEffect, useState} from 'react';
import DashboardStyle from './Dashboard.module.css'
import api from "../../api/axiosConfig.js";
import {useContext} from "react";
import AuthContext from "../../context/AuthProvider.jsx";
import ReservationStyle from "./Reservations.module.css";
import {useTable} from "react-table";
import ButtonMultipurpose from "../shared/ButtonMultipurpose.jsx";


const RESERVATIONS_URL = "api/res"

const Dashboard = () => {
    const{auth} = useContext(AuthContext)
    const[reservationsNumber,setReservationsNumber] = useState()
    const[customersNumber,setCustomersNumber] = useState()
    const[carsNumber,setCarsNumber] = useState()
    const[loaded, isLoaded] = useState(false)


    const [reservations,setReservations] = useState()


    const headers = {
        Authorization: `Bearer ${auth.accessToken}`
    }

    const getReservations = async () => {
        try {
            const response = await api.get(RESERVATIONS_URL, { headers });
            const filteredData = response.data.filter(item => item.customer.firstName !== "Admin");
           const sortedData =  sortDataByStartDate(filteredData);
            setReservations(sortedData);
        } catch (err) {
            console.log(err)
        }
    };

    const sortDataByStartDate = (data) => {
        data.sort((a, b) => {
            const startDateA = new Date(a.startDate);
            const startDateB = new Date(b.startDate);
            return startDateB - startDateA;
        });

        return data.slice(0,5);
    };

    const getCarsNumber =async () =>{
        try{
            const response = await api.get("/api/car/all",{headers})
            setCarsNumber(response.data.length)
            isLoaded(true)

        }catch(err){
            //console.log(err);
        }
    }

    const getCustomersNumber =async () =>{
        const response = await api.get("/api/customer/all",{headers})
        const filteredData = response.data.filter(item => item.firstName !=="Admin")
        setCustomersNumber(filteredData.length)
        isLoaded(true)
    }

    const getReservationsNumber = async ()=>{
        const response3 = await api.get("/api/res",{headers})
        setReservationsNumber(response3.data.length)
        isLoaded(true)
    }
useEffect(()=>{
    getReservationsNumber()
    getCustomersNumber()
    getCarsNumber()
    getReservations()
},[])


    const columns = React.useMemo(()=>[
        {
            Header:"Imie",
            accessor: "customer.firstName"
        },
        {
            Header:"Nazwisko",
            accessor: "customer.lastName"
        },

        {
            Header:"Marka",
            accessor: "car.brand",

        },
        {
            Header:"Model",
            accessor: "car.model",

        },
        {
            Header:"Miejsce wypozyczenia",
            accessor: "pickupLocation.officeName",

        },
        {
            Header:"Miejsce oddania",
            accessor: "returnLocation.officeName",

        },
        {
            Header:"Data wypozyczenia",
            accessor: "startDate",

        },
        {
            Header:"Data oddania",
            accessor: "endDate",

        },
    ],[]);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data:reservations ||[]});

    return (
        <>

            <section className={DashboardStyle.dashboard}>
                <div className={DashboardStyle.dashContent}>
                    {
                        loaded ? (
                            <div className="overview">
                                <div className={DashboardStyle.title}>
                                    <i className="uil uil-tachometer-fast-alt"></i>
                                    <span className={DashboardStyle.text}>Panel</span>
                                </div>

                                <div className={DashboardStyle.boxes}>
                                    <div className={DashboardStyle.box}>
                                        <i className="uil uil-thumbs-up"></i>
                                        <span className={DashboardStyle.text}>Liczba użytkowników</span>
                                        <span className={DashboardStyle.number}>{customersNumber}</span>
                                    </div>
                                    <div className={DashboardStyle.box}>
                                        <i className="uil uil-comments"></i>
                                        <span className={DashboardStyle.text}>Liczba samochodów</span>
                                        <span className={DashboardStyle.number}>{carsNumber}</span>
                                    </div>
                                    <div className={DashboardStyle.box}>
                                        <i className="uil uil-share"></i>
                                        <span className={DashboardStyle.text}>Liczba rezerwacji</span>
                                        <span className={DashboardStyle.number}>{reservationsNumber}</span>
                                    </div>
                                </div>
                            </div>
                        ): (
                            <div>loading</div>
                        )
                    }

                    <div className={DashboardStyle.activity}>
                        <div className={DashboardStyle.title}>
                            <i className="uil uil-clock-three"></i>
                            <span className={DashboardStyle.text}>Ostatnia aktywność</span>
                        </div>
                    </div>
                    {
                        //TODO STYLIZOWANIE
                    }
                    <div className={DashboardStyle}>
                        <table {...getTableProps()}>
                            <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row);
                                //TUTAJ MOZNA DOSTAC ID SAMOCHODU
                                console.log(row.original)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell,index) => (
                                            <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                        ))}
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>


             </div>
            </section>
        </>
    );
};

export default Dashboard;