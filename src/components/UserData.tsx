"use client"
import React, { useState } from 'react'
export const UserData = () => {

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
    })

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Data submitted")
        console.log(formData);
    }
    console.log(formData)
    return (
        <div>
            <form>
                email : <input type="email" name='email' defaultValue={formData.email} onChange={handleChange} />
                username : <input type="text" name='username' defaultValue={formData.username} onChange={handleChange} />
                password : <input type="password" name='password' defaultValue={formData.password} onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}