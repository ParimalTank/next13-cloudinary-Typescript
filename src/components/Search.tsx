"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Search = () => {

    const [user, setUser] = useState([]);

    const userData = async () => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((response: any) => {
        //         return response.json();
        //     })
        //     .then((response: any) => {
        //         setUser(response);
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })

        await axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response: any) => {
                console.log(response);
                setUser(response);
                return response;
            })
    }

    useEffect(() => {
        userData();
    }, [])

    console.log("this is user data", user);

    const data = [{ name: 'Comoros', code: 'KM' }, { name: 'Congo', code: 'CG' }, { name: 'Congo, The Democratic Republic of the', code: 'CD' }, { name: 'Cook Islands', code: 'CK' }, { name: 'Costa Rica', code: 'CR' }, { name: 'Cote D\'Ivoire', code: 'CI' }, { name: 'Croatia', code: 'HR' }, { name: 'Cuba', code: 'CU' }, { name: 'Cyprus', code: 'CY' }]

    const search = 'on';
    const filterData = data.filter(item => item.name.includes(search));
    console.log(filterData);

    // Session Storage set and Get data
    // sessionStorage.setItem("firstName", "Smith");

    // const firstName = sessionStorage.getItem("firstName");
    // console.log("This is FirstName", firstName);

    // const lastName = "Hello World"
    // localStorage.setItem("firstName", lastName);

    // const getLocalStorage = localStorage.getItem("firstName");
    // console.log(getLocalStorage);

    // local storage data does not expire while in session storage data is expired when page closed.
    // Cookies are primarily for reading server-side, local storage can only be read by the client-side

    return (
        <>
            This is filter Data ""
        </>
    )
}
