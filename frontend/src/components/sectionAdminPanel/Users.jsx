import React, {useEffect, useState} from 'react';
import UserStyle from "./Users.module.css";
import api from "../../api/axiosConfig.js";
import CarsStyle from "./Cars.module.css";
import ButtonMultipurpose from "../shared/ButtonMultipurpose.jsx";
import {useTable} from "react-table";
import {useContext} from "react";
import AuthContext from "../../context/AuthProvider.jsx";

const USERS_URL = "api/customer/all"

const Users = () => {
    const{auth} = useContext(AuthContext)
    const [users,setUsers] = useState()

    const headers = {
        Authorization: `Bearer ${auth.accessToken}`
    }
    const getUsers = async ()=>{
        try{
            const response = await api.get(USERS_URL,{headers})
           const filteredData = response.data.filter(item => item.firstName !=="Admin")
            setUsers(filteredData);
        }catch(err){
            //console.log(err);
        }
    }

    const handleDeleteUser = async (userId)=> {
        setUsers(users => users.filter(user=> user.id !== userId));
        await api.delete(`/api/customer/${userId}`, {headers})

    }

    useEffect(()=>{
        getUsers()
    },[])


    console.log(users)
    const columns = React.useMemo(()=>[
        {
            Header:"Imie",
            accessor: "firstName"
        },
        {
            Header:"Nazwisko",
            accessor: "lastName"
        },
        {
            Header:"Numer telefonu",
            accessor: "phoneNumber"
        },
        {
            Header:"Email",
            accessor: "email",

        },
        {
            Header:"Marka",
            accessor: "reservationList[0].marka",

        },
        {
            Header:"Model",
            accessor: "reservationList[0].model",

        },
        {
            Header:"Data rozpoczecia",
            accessor: "reservationList[0].startDate",

        },
        {
            Header:"Data zakonczenia",
            accessor: "reservationList[0].endDate",

        },

    ],[]);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data:users ||[]});


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

                    </div>
                    {
                        //TODO STYLIZOWANIE
                    }
                    <div className={UserStyle}>
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
                                console.log(row.original.id)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell,index) => (
                                            <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                        ))}
                                        {

                                        }
                                        <ButtonMultipurpose to={`/admin/users/edit/${row.original.id}`}>
                                            edit
                                        </ButtonMultipurpose>
                                        <ButtonMultipurpose onClick={()=>handleDeleteUser(row.original.id)}>
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

export default Users;