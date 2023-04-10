import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Manageinstitute = () => {
    const navigate = useNavigate('');
    const [instname, setInst] = React.useState('');

    const addCategory = async () => {
        let result =await fetch("http://localhost:5000/addinstitute", {
                method:'post',
                body:JSON.stringify({instname}),
                headers:{
                    'Content-Type':'application/json'
                   },
        });
       result = await result.json()
       navigate('/manageInstitute')
       console.warn(result);
    }

    const handleInputChange = ()=>{
        
    }

    return (
        <div className="divsgn" style={{marginTop:"10%"}}>
            <h1 className="register">Add Institute</h1>
            <input className="inputbox" type="text" placeholder="enter institute.."
                value={instname} onChange={(e) => setInst(e.target.value)} />
               <button style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} onClick={addCategory} type="button" className="btnsn">Add institute</button>

        </div>
    )
       

}

export default Manageinstitute;