import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";

const Resetpassotp = () => {
    // const [enrollmentno, setEnro] = useState("");
    // const [fname, setFname] = useState("");
    // const [lname, setLname] = useState("");
    const [emailid, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [newpassword, setPasswordnew] = useState("");

    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const auth = localStorage.getItem("email");
        if (auth) {
            navigate("/resetpassotp")
        }
    }, [navigate])

    //const getUserDetails = async () => {
    // const userid = JSON.parse(localStorage.getItem("data"))._id;
    //let result = await fetch(`http://localhost:5000/update_users/${params.id}`);
    //result = await result.json();

    // setEnro(result.enrollmentno)
    // setFname(result.fname)
    // setLname(result.lname)
    // setContact(result.contactno)
    //setPassword(result.password)
    //setEmail(result.emailid)
    // }

    // const updateuser = async () => {
    //     let result = fetch(`http://localhost:5000/updateUserbyemailid/`, {
    //         method: 'Put',
    //         body: JSON.stringify({ emailid, password }),
    //         headers: {
    //             'Content-Type': "application/json"
    //         }
    //     });
    // result = (await result).json()
    //     console.warn(result)
    //     alert('password updated..')
    //     navigate('/Login');
    //     localStorage.clear();
    // }

    const updatepass = async () => {

        if (password === newpassword && password !== "" && newpassword !== "") {
            setEmail(localStorage.getItem("email"))
            console.warn(newpassword)
            const email = JSON.parse(localStorage.getItem("email"))
            let result = await fetch(`http://localhost:5000/APIPASS/${email}`, {
                method: 'put',
                body: JSON.stringify({ password }),
                headers: {
                    'Content-Type': "application/json"
                }
            });
            result = await result.json();
            alert('password updated..')
            localStorage.clear();
            navigate('/Login');
        } else {
            alert("password not matched...")
        }
    }



    return (

        <section class="features" id="features">

            <h1 class="heading"> Reset <span> password </span> </h1>

            <input className="inputbox" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password"></input>

            <input className="inputbox" value={newpassword} onChange={(e) => setPasswordnew(e.target.value)} type="password" placeholder="Enter new Password"></input>

            <input style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} onClick={updatepass} type="submit" value="Login" className="btn" ></input>


        </section>




    )

}


export default Resetpassotp;