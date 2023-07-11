import React, {useEffect, useState} from 'react';
import CarsStyle from "./Cars.module.css";
import api from "../../api/axiosConfig.js";
import ButtonMultipurpose from "../shared/ButtonMultipurpose.jsx";
import {useTable} from "react-table";
import {useContext} from "react";
import AuthContext from "../../context/AuthProvider.jsx";
import {Link} from "react-router-dom";

const CARS_URL = "api/car/all"

const Cars = () => {
    const{auth} = useContext(AuthContext)

    const [cars,setCars] = useState()

    const getCars = async ()=>{
        try{
            const response = await api.get(CARS_URL)
            setCars(response.data.reverse());
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getCars()
    },[])

    const headers = {
        Authorization: `Bearer ${auth.accessToken}`
    }

    const handleDeleteCar = async (carId)=> {
        setCars(cars => cars.filter(car=> car.id !== carId));
        await api.delete(`/api/car/${carId}`, {headers})

    }

    //console.log(cars)

    const columns = React.useMemo(()=>[
        {
            Header:"Marka",
            accessor: "brand"
        },
        {
            Header:"Model",
            accessor: "model"
        },
        {
            Header:"Numer rejestracyjny",
            accessor: "registrationNumber"
        },
        {
            Header:"Cena",
            accessor: "pricePerDay",

        },
        {
            Header:"Przebieg[km]",
            accessor: "carInfo.mileage",

        },
        {
            Header:"Rok produkcji",
            accessor: "carInfo.productionYear",

        },
        {
            Header:"Biuro",
            accessor: "office.officeName",

        },

    ],[]);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data:cars ||[]});

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
                        <div>
                            //TODO ten button tez popraw

                                <ButtonMultipurpose to={"/admin/cars/add"}>
                                    dodaj auto
                                </ButtonMultipurpose>

                        </div>
                    </div>
                    {
                        //TODO STYLIZOWANIE
                    }
                    <div className={CarsStyle}>
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
                                        <ButtonMultipurpose to={`/admin/cars/edit/${row.original.id}`}>
                                            edit
                                        </ButtonMultipurpose>
                                        <ButtonMultipurpose onClick={()=>handleDeleteCar(row.original.id)}>
                                            delete
                                        </ButtonMultipurpose>
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

export default Cars;