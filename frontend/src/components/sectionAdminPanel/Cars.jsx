import React, {useEffect, useState} from 'react';
import CarsStyle from "./Cars.module.css";
import api from "../../api/axiosConfig.js";
import ButtonMultipurpose from "../shared/ButtonMultipurpose.jsx";
import {useTable} from "react-table";

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
                                        <ButtonMultipurpose>
                                            edit
                                        </ButtonMultipurpose>
                                        <ButtonMultipurpose>
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