import React from 'react';
import ReservationStyle from "./Reservations.module.css"
import ButtonMultipurpose from "../shared/ButtonMultipurpose.jsx";
import {useTable} from "react-table";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../../context/AuthProvider.jsx";
import api from "../../api/axiosConfig.js";
import {count} from "react-table/src/aggregations.js";

const RESERVATIONS_URL = "api/res"

const Reservations = () => {
    const{auth} = useContext(AuthContext)
    const [reservations,setReservations] = useState()

    const headers = {
        Authorization: `Bearer ${auth.accessToken}`
    }
    const getReservations = async () => {
        try {
            const response = await api.get(RESERVATIONS_URL, { headers });
            const filteredData = response.data.filter(item => item.customer.firstName !== "Admin");

            const reservationsWithCost = filteredData.map(reservation => {
                const rentalCost = calculateRentalCost(reservation);
                return { ...reservation, rentalCost };
            });

            setReservations(reservationsWithCost);
        } catch (err) {
            // Obsługa błędu
        }
    };

    function calculateRentalCost(data) {
        const startDate = new Date(data.startDate);
        const endDate = new Date(data.endDate);

        const formattedStartDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const formattedEndDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

        const timeDiff = Math.abs(formattedEndDate - formattedStartDate);
        const numDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        const rentalCost = numDays * parseInt(data.car.pricePerDay);
        console.log(rentalCost)

        return rentalCost;
    }

    console.log(reservations)

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
        {
            Header: "Kwota[pln]",
            accessor: "rentalCost"
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