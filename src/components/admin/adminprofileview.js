import React, { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Profilephotoav = () => {
    // const [enrollmentno, setEnro] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [contactno, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [emailid, setEmail] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const params = useParams();
    const navigate = useNavigate();
    const [imgname, setName] = React.useState('');
    const [photo, setPhoto] = React.useState("");
    const [fetchphoto, setfetchphoto] = React.useState("");

    useEffect(() => {
        getUserDetails();
        getalllist();
    }, [])

    const userid = JSON.parse(localStorage.getItem("user"))._id;
    console.warn(userid)
    const getUserDetails = async () => {

        let result = await fetch(`http://localhost:5000/update_users/${params.id}`);
        result = await result.json();

        // setEnro(result.enrollmentno)
        setFname(result.fname)
        setLname(result.lname)
        setContact(result.contactno)
        setPassword(result.password)
        setEmail(result.emailid)

        sessionStorage.setItem("emailid", JSON.stringify(result._id));
        sessionStorage.setItem("password", JSON.stringify(result.password));

    }

    const updateuser = async () => {
        let result = fetch(`http://localhost:5000/update_users/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ fname, lname, contactno, emailid }),
            headers: {
                'Content-Type': "application/json"
            }
        });
        result = (await result).json()
        console.warn(result)
        alert("updated")
        navigate('/adminphotolist');
    }

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const addProduct = async () => {
        // return console.log(imgname);

        const formdata = new FormData();
        formdata.append("photo", photo);
        formdata.append("userid", userid);

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        const result = await axios.post(
            "http://localhost:5000/addprofileimage",
            formdata, config
        );
        alert("image inserted");
        navigate("/adminphotolist");

    }

    const getalllist = async () => {
        let result = await fetch(`http://localhost:5000/getPhotosbyuploadid/${params.id}`);
        result = await result.json();
        console.log(result)
        setfetchphoto(result)
    }

    const handlechange = (e) => {
        setPhoto(e.target.files[0]);
    }

    return (
        <section class="categories" id="categories">

            <h1 class="heading"><span>Profile</span> </h1>

            <div class="box-container">

                <div class="box">

                    
                    <p>First Name :</p><input className="inputbox" style={{ backgroundColor: "GrayText", width: "50%" }} value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder="Enter First Name"></input>
                    <p>Last Name :</p><input className="inputbox" style={{ backgroundColor: "GrayText", width: "50%" }} value={lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder="Enter Last Name"></input>
                    <p>Contact Number :</p><input className="inputbox" style={{ backgroundColor: "GrayText", width: "50%" }} value={contactno} onChange={(e) => setContact(e.target.value)} type="text" placeholder="Enter Contact Number"></input>
                    <p>Emailid :</p><input className="inputbox" style={{ backgroundColor: "GrayText", width: "50%" }} value={emailid} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email id"></input>
                    <p>Profile Image :</p>
                    <form>
                        <input type="file" className="inputbox" name="upload_file" onChange={handlechange} ></input>
                    </form>
                    <p><Link to="/changepasswordadmin">Change password ???</Link></p>
                    <p><Link to="/profileimagead">Manage Profile Images ??</Link></p>
                    <button style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} onClick={updateuser} className="btnsn" type="button">Update</button>
                    <button style={{ padding: "5px", width: "100px", backgroundColor: "orange", border: "none", borderRadius: "10px", cursor: "pointer" }} onClick={addProduct} className="btnsn" type="button">Add Image</button>

                </div>
            </div>
        </section>
    )

}


export default Profilephotoav;