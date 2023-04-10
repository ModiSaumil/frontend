import React from "react";
import {Navigate,Outlet} from 'react-router-dom';
import Nav from "./Nav";

const Sec_com=()=>{
    const auth = localStorage.getItem("email");

    return auth?<><Outlet /></>:
    <Navigate to="/Login" />
}

export default Sec_com;