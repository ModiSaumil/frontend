import React from "react";
import {Navigate,Outlet} from 'react-router-dom';
import Nav from "./Nav";

const PrivateComponent=()=>{
    const auth = localStorage.getItem("user");

    return auth?<><Nav/><Outlet /></>:
    <Navigate to="/SignUp" />
}

export default PrivateComponent;