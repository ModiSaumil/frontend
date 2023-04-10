import React, { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom";

const Profilephotogview = () => {
    // const [enrollmentno, setEnro] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [contactno, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [emailid, setEmail] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const params = useParams();
    const navigate = useNavigate();
    const [photos, setPhoto] = React.useState([]);

    const auth = localStorage.getItem("user");
    const userid = JSON.parse(localStorage.getItem("user"))._id;


    useEffect(() => {
        getUserDetails();
        getalllist();

    }, [])

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
        navigate('/photolist');
    }

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const getalllist = async () => {
        let resultp = await fetch(`http://localhost:5000/getprofilePhotosbyuploadid/${userid}`);
        resultp = await resultp.json();
        console.log(resultp)
        setPhoto(resultp)
    }

    return (
        <section class="categories" id="categories" style={{ marginTop: "5%" }}>

            <h1 class="heading"><span>Profile</span> </h1>

            <div class="box-container">

                <div class="box">
                    {
                        photos.length > 0 ? photos.map((item, index) => (

                            <img src={`http://localhost:5000/${item.photo}`} alt="aree yaarrrr" />


                        ))
                            : <p><strong>No Profile Images
                                Found!</strong></p>
                    }
                    {/* <input className="inputbox" value={enrollmentno} onChange={(e) => setEnro(e.target.value)} type="text" placeholder="Enter Enrollment Number"></input> */}
                    <p>First Name :</p> <input className="inputbox" style={{ backgroundColor: "GrayText", width: "50%" }} value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder="Enter First Name" readOnly></input>
                    <p>Last Name :</p><input className="inputbox" style={{ backgroundColor: "GrayText", width: "50%" }} value={lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder="Enter Last Name" readOnly></input>
                    <p>Contact Number :</p><input className="inputbox" style={{ backgroundColor: "GrayText", width: "50%" }} value={contactno} onChange={(e) => setContact(e.target.value)} type="text" placeholder="Enter Contact Number" readOnly></input>
                    <p>Emailid :</p><input className="inputbox" style={{ backgroundColor: "GrayText", width: "50%" }} value={emailid} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email id" readOnly></input>
                    <p><Link to="/changepassword">Change password ???</Link></p>
                    <button style={{ padding: "5px", width: "70px", backgroundColor: "orange", border: "none", borderRadius: "10px", cursor: "pointer" }} className="btnsn" type="button"><Link to={"/profileg/" + JSON.parse(auth)._id}>Update</Link></button>
                </div>
            </div>
        </section>
    )

}


export default Profilephotogview;