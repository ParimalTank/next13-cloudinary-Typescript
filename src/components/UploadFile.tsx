"use client"

import React, { useState } from 'react'
import { ChangeEvent } from 'react';

export const UploadFile = () => {

    const [file, setFile] = useState<File | null>(null);
    const [name, setName] = useState("")

    // const onsubmit = (e: any) => {
    //     e.preventDefault();

    //     const formData = new FormData()


    //     formData.append("file", file);

    //     formData.append("description", description)

    //     console.log("This is file Data", file);
    // }

    const handleUpload = async (e: any) => {
        e.preventDefault();

        if (file) {
            console.log("Uploading file...");

            const formData = new FormData();
            formData.append("name", name);
            formData.append("file", file);

            try {
                // You can write the URL of your server or any other endpoint used for file upload
                const result = await fetch("http://localhost:3000/api/product", {
                    method: "POST",
                    body: formData,
                });

                const data = await result.json();

                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
    }

    const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {

        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    }

    return (
        <div>
            <form>
                Product Name :
                <input
                    onChange={e => setName(e.target.value)}
                    type="text"
                ></input>
                <br />
                <input type="file" onChange={e => handleSetImage(e)} />

                <button type="submit" onClick={handleUpload}>Submit</button>
            </form>
        </div>
    )
}
