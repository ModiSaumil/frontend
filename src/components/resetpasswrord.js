import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Resetpass = () => {
    // const [enrollmentno, setEnro] = useState("");
    // const [fname, setFname] = useState("");
    // const [lname, setLname] = useState("");
    // const [contactno, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [emailid, setEmail] = useState("");
    const [otptext, setOtp] = useState("");
    const [otp_gen, setGen] = useState("");



    const params = useParams();
    const navigate = useNavigate();

    const auth = localStorage.getItem("data");

    useEffect(() => {
        // getUserDetails();
    }, [])

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

    const handlefpass = async () => {
        console.warn("email: ", emailid)

        let result_check = await fetch('http://localhost:5000/email_check', {

            method: 'post',
            body: JSON.stringify({ emailid }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result_check = await result_check.json();
        console.warn(result_check);
        if (result_check.emailid === emailid) {



            // console.warn(randomNumber)
            let result = await fetch('http://localhost:5000/send_email', {

                method: 'post',
                body: JSON.stringify({ emailid }),
                headers: {
                    'Content-Type': 'application/json'
                }

            });
            result = await result.json();
            if (result) {
                localStorage.setItem("email", JSON.stringify(emailid))
                sessionStorage.setItem("otp", JSON.stringify(result.randomNumber));
                setGen(sessionStorage.getItem("otp"));
            }




        }
        else {
            alert("enter correct details..")
        }

    }

    const checkotp = async () => {
        if (otptext === otp_gen) {
            sessionStorage.clear();
            navigate('/resetpassotp');

        }
        else {
            alert("enter correct otp...");
        }
    }

    // const updatepass = async () =>{
    //     let result = await fetch('http://localhost:5000/updateUserbyemailid', {
    //         method: 'put',
    //         body: JSON.stringify({ emailid, password }),
    //         headers: {
    //             'Content-Type': "application/json"
    //         }
    //     });
    //     result = (await result).json()
    //     console.warn(result)
    //     alert('password updated..')
    //     navigate('/Login');
    // }


    return (
        <div>
            <section class="features" id="features">

                <h1 class="heading"> Reset <span> password </span> </h1>

                <input className="inputbox" value={emailid} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email id"></input>

                <button onClick={handlefpass} className="btnsn" type="button">get otp</button>

                <input name="otpfield" className="inputbox" value={otptext} onChange={(e) => setOtp(e.target.value)} type="text" placeholder="Enter OTP" ></input>

                <button style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} onClick={checkotp} className="btnsn" type="button">confirm</button>


            </section>
        </div>
    )

}

export default Resetpass;
