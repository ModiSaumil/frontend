import React, { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom";

const Changepasswordadmin = () => {
    const [password, setPassword] = useState("");
    const[oldpass,setOldpass] = useState("")
    const [passwordType, setPasswordType] = useState("password");
    const params = useParams();
    const navigate = useNavigate();
   

    const emailid = JSON.parse(sessionStorage.getItem("emailid"));
    const pass = JSON.parse(sessionStorage.getItem("password"))

    console.warn(emailid)

    useEffect(() => {
        
        
    }, [])

    const updateuser = async () => {

        if (oldpass===pass) {
            alert("old password not matched.. try again..")
        } else {
            let result = fetch(`http://localhost:5000/update_users/${emailid}`, {
            method: 'Put',
            body: JSON.stringify({password }),
            headers: {
                'Content-Type': "application/json"
            }
        });
        result = (await result).json()
        console.warn(result)
        alert("updated")
        navigate('/adminphotolist');   
        }
    }

    const togglePassword =()=>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      }

    return (
        <div className="divsgn" style={{marginTop:"10%"}}>
            <h1 className="register">Profile</h1>
            {/* <input className="inputbox" value={enrollmentno} onChange={(e) => setEnro(e.target.value)} type="text" placeholder="Enter Enrollment Number"></input> */}
            {/* <input className="inputbox" value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder="Enter First Name"></input>
            <input className="inputbox" value={lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder="Enter Last Name"></input>
            <input className="inputbox" value={contactno} onChange={(e) => setContact(e.target.value)} type="text" placeholder="Enter Contact Number"></input>
            <input className="inputbox" value={emailid} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email id"></input> */}
            <input className="inputbox" type={passwordType} value={oldpass} onChange={(e)=>setOldpass(e.target.value)} placeholder="Enter old Password"></input>
            <input className="inputbox" type={passwordType} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter new Password"></input>
            <input className="inputbox" type={passwordType} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter confirm new Password"></input>
            
            
            {/* <button className="btnsn" onClick={togglePassword}>
                     { passwordType==="password"? <a>view</a> :<a>hide</a> }
                     </button> */}
                     
            <button style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} onClick={updateuser} className="btnsn" type="button">Update</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={"/adminphotolist"}><button style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} type="button" className="btnsn">cancel</button></Link>

        </div>
    )

}


export default Changepasswordadmin;