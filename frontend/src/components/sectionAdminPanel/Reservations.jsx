import React from 'react';
import ReservationStyle from "./Reservations.module.css"
import ButtonMultipurpose from "../shared/ButtonMultipurpose.jsx";
import {useTable} from "react-table";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../../context/AuthProvider.jsx";
import api from "../../api/axiosConfig.js";

const RESERVATIONS_URL = "api/res"

const Reservations = () => {
    const{auth} = useContext(AuthContext)
    const [reservations,setReservations] = useState()

    const headers = {
        Authorization: `Bearer ${auth.accessToken}`
    }
    const getReservations = async ()=>{
        try{
            const response = await api.get(RESERVATIONS_URL,{headers})
            const filteredData = response.data.filter(item => item.customer.firstName !=="Admin")
            setReservations(filteredData);
        }catch(err){
            //console.log(err);
        }
    }
    useEffect(()=>{
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
            Header:"Numer telefonu",
            accessor: "customer.phoneNumber"
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
            Header:"Data rozpoczecia",
            accessor: "startDate",

        },
        {
            Header:"Data zakonczenia",
            accessor: "endDate",

        },

    ],[]);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data:reservations ||[]});

    return (
        <>
            <section className={ReservationStyle.dashboard}>
                <div className={ReservationStyle.dashContent}>
                    <div className="overview">
                    </div>

                    <div className={ReservationStyle.activity}>
                        <div className={ReservationStyle.title}>
                            <i className="uil uil-clock-three"></i>
                            <span className={ReservationStyle.text}>Aktualne rezerwacje</span>
                        </div>
                    </div>
                    {
                        //TODO STYLIZOWANIE
                    }
                    <div className={ReservationStyle}>
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
                                //console.log(row.original.id)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell,index) => (
                                            <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                        ))}
                                        {

                                        }
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

export default Reservations;