import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const ManageProfileimagead = () => {
    const [photo, setPhoto] = React.useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getalllist();

    }, [])


    const getalllist = async () => {
        const userid = JSON.parse(localStorage.getItem("user"))._id;
        let result = await fetch(`http://localhost:5000/getprofilePhotosbyuploadid/${userid}`);
        result = await result.json();
        setPhoto(result)
    }
    console.warn("photo", photo);

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/deleteprophoto/${id}`, {
            method: "Delete"
        });
        result = await result.json()
        if (result) {
            getalllist();
        }
    }


    return (
        <div style={{ marginTop: "10%" }}>
            <h3>All Photos list</h3>
            <table className='tablecss'>
                <thead>
                    <tr className='trcss'>
                        <th>SR No.</th>
                        <th>Images</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        photo.length > 0 ? photo.map((item, index) => (
                            <tr key={item._id} className='trcss img'>
                                <td className='tdcss'>{index + 1}</td>
                                <td className='tdcss'>{item ?
                                    <img src={`http://localhost:5000/${item.photo}`} alt={item.imgname} />

                                    :
                                    <span>deleted</span>
                                }</td>
                                <td className='tdcss'>
                                    <button style={{ padding: "5px", width: "70px", backgroundColor: "orange", border: "none", borderRadius: "10px", cursor: "pointer" }} onClick={() => deleteProduct(item._id)}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                </td>
                            </tr>
                        ))
                            : <tr> <td><strong>No Records
                                Found!</strong></td></tr>
                    }
                </tbody>
            </table>
        </div >
    )
}

export default ManageProfileimagead;

