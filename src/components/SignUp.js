import React, { useState, useEffect } from 'react';
import { mockComponent } from 'react-dom/test-utils';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Signinpage = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [contactno, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [emailid, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [instname, setInst] = useState("");

    const [error, setError] = useState(false);
    // const [EnroError, setEnroError] = useState('');
    const [fnameError, setFirstnameError] = useState('');
    const [lnameError, setLastnameError] = useState('');
    const [emailidError, setEmailError] = useState('');
    const [contactnoError, setContactnoError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const params = useParams();
    const navigate = useNavigate();
    // const role = [
    //     { label: "Viewer"},
    //     { label: "Photographer"},
    //   ];

    useEffect(() => {
        const auth = localStorage.getItem("role");
        console.log(auth);
        if (auth) {
            if (auth === "admin") {
                navigate("/adminphotolist")
            }
            else if (auth === "viewer") {
                navigate("/home")
            }
            else if (auth === "photog") {
                navigate("/photoadd")
            }
            else {
                navigate("/Login")
            }
        }
    })


    const collectData = async () => {
        console.warn(fname, lname, emailid, password, contactno, role, instname);

        if (
            !fname ||
            !lname ||
            !emailid ||
            !contactno ||
            !role ||
            !instname

        ) {
            setError(true);
            return false;
        }

        else {
            let result = await fetch('http://localhost:5000/registration', {
                method: 'post',
                body: JSON.stringify({ fname, lname, emailid, password, contactno, role, instname }),
                headers: {
                    'Content-Type': 'application/json'
                },

            });
            result = await result.json()
            console.warn(result);
            localStorage.setItem("user", JSON.stringify(result));
            if (result.role === "admin") {
                localStorage.setItem("user", JSON.stringify(result));
                localStorage.setItem("role", "admin");
                navigate("/adminphotolist")
            }
            else if (result.role === "viewer") {
                localStorage.setItem("user", JSON.stringify(result));
                localStorage.setItem("role", "viewer");
                navigate("/home")
            }
            else if (result.role === "photog") {
                localStorage.setItem("user", JSON.stringify(result));
                localStorage.setItem("role", "photog");
                navigate("/photoadd")
            }
            else {
                alert("enter correct details..")
            }

        }

    }
    // if (!validator.isEmail(emailid)) {
    //     setEmailError('Please Enter valid email!');
    //     return;
    // }

    // if (params.id) {

    //     if (
    //         !fname ||
    //         !lname ||
    //         !emailid ||
    //         !contactno
    //     ) {
    //         setError(true);
    //         return false;
    //     }

    //     let result = await fetch(`http://localhost:5000/member/updatemember/${params.id}`, {
    //         method: "PATCH",
    //         body: JSON.stringify({
    //             fname,
    //             lname,
    //             emailid,
    //             contactno,
    //             role
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "authorization": token
    //         }
    //     });

    //     result = await result.json();

    //     console.log("update called");

    //     if (result) {
    //         swal({
    //             title: 'Update photographer',
    //             text: 'photographer Updated Successfully!',
    //             icon: 'success'
    //         });

    //         navigate("/admin/ManageMember");
    //     } else {
    //         swal({
    //             title: 'Update photographer',
    //             text: 'photographer Updation Failed!',
    //             icon: 'warning'
    //         });
    //     }
    // }

    // else {

    //     if (
    //         !fname ||
    //         !lname ||
    //         !emailid ||
    //         !contactno ||
    //         !password
    //     ) {
    //         setError(true);
    //         return false;
    //     }

    //     let result = await fetch('http://localhost:5000/member/register', {
    //         method: 'post',
    //         body: JSON.stringify({
    //             enrollmentno,
    //             fname,
    //             lname,
    //             emailid,
    //             contactno,
    //             password,
    //             role,
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "authorization": token
    //         }
    //     });

    //     result = await result.json();

    //     console.log(result);

    //     if (result === "Emailid Already exists!") {
    //         swal({
    //             title: 'Registration',
    //             text: 'Emailid Already Exists!',
    //             icon: 'warning'
    //         });
    //     } else {
    //         swal({
    //             title: 'Registration',
    //             text: 'Registration Successfully!',
    //             icon: 'success'
    //         });
    //         localStorage.setItem('user', JSON.stringify(result.result)); //Used to store data in local storage.(It will remain until you remove menually.)
    //     }
    // }

    //validate enrollment no
    // const validateEnrono = (e) => {
    //     var pattern = new RegExp(/^[789]\d{9}$/);
    //     if (!pattern.test(enrollmentno)) {
    //         setEnroError('Only 10 numbers are allowed!');
    //         return;
    //     } else {
    //         setEnroError('');
    //     }
    // };

    //validate first name
    const validateFirstName = (e) => {
        var pattern = new RegExp(/[A-Za-z]+/);
        if (!pattern.test(fname)) {
            setFirstnameError('Please Enter Valid Fitstname!');
            return;
        } else {
            setFirstnameError('');
        }
    };

    //Validate Lastname
    const validateLastName = (e) => {
        var pattern = new RegExp(/[A-Za-z]+/);
        if (!pattern.test(lname)) {
            setLastnameError('Please Enter Valid Lastname!');
            return;
        } else {
            setLastnameError('');
        }
    };

    //Validate Contactno
    const validateContactno = (e) => {
        var pattern = new RegExp(/^[789]\d{8}$/);
        if (!pattern.test(contactno)) {
            setContactnoError('Only 10 numbers are allowed!');
            return;
        } else {
            setContactnoError('');
        }
    };

    const validatePassword = (e) => {
        var pattern = new RegExp(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/
        );
        if (!pattern.test(password)) {
            setPasswordError(
                'Only 8 characters are allowed, include 1 number,1 uppercase and lowercase letter and 1 special character!'
            );
            return;
        } else {
            setPasswordError('');
        }
    };

    // let result = await fetch('http://localhost:5000/registration', {
    //     method: 'post',
    //     body: JSON.stringify({ enrollmentno, fname, lname, emailid, password, contactno, role }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },

    // });
    // result = await result.json()
    // console.warn(result);
    // localStorage.setItem("user", JSON.stringify(result));
    // navigate('/');



    return (
        <div>


            <section class="home" id="home">

            <div class="content">
                    <h3>UKA<span>TARSADIA</span>UNIVERSITY</h3>
                    <p>NAAC accredited 'B+' Grade with CGPA 2.74</p>
                </div>

            </section>


            <section class="features" id="features">

                <h1 class="heading"> Sign <span> Up </span> </h1>

                <input className="inputbox" value={fname} onChange={(e) => { setFname(e.target.value); validateFirstName(); }} type="text" placeholder="Enter First Name" required></input>
                <span
                    className='invalid-input'
                    style={{
                        fontWeight: 'bold',
                        color: 'red'
                    }}
                >
                    {fnameError}
                </span>
                {/* print empty field message */}
                {error && !fname && (
                    <span
                        className='invalid-input'
                        style={{
                            fontWeight: 'bold',
                            color: 'red'
                        }}
                    >
                        Please fill out this field!
                    </span>
                )}


                <input className="inputbox" value={lname} onChange={(e) => { setLname(e.target.value); validateLastName(); }} type="text" placeholder="Enter Last Name" required></input>
                {/* print invalid input message */}
                <span
                    className='invalid-input'
                    style={{
                        fontWeight: 'bold',
                        color: 'red'
                    }}
                >
                    {lnameError}
                </span>

                {/* print empty field message */}
                {error && !lname && (
                    <span
                        className='invalid-input'
                        style={{
                            fontWeight: 'bold',
                            color: 'red'
                        }}
                    >
                        Please fill out this field!
                    </span>
                )}
                <input className="inputbox" value={contactno} onChange={(e) => { setContact(e.target.value); validateContactno(); }} type="text" placeholder="Enter Contact Number" required></input>
                {/* print invalid input message */}
                <span
                    className='invalid-input'
                    style={{
                        fontWeight: 'bold',
                        color: 'red'
                    }}
                >
                    {contactnoError}
                </span>

                {/* print empty field message */}
                {error && !contactno && (
                    <span
                        className='invalid-input'
                        style={{
                            fontWeight: 'bold',
                            color: 'red'
                        }}
                    >
                        Please fill out this field!
                    </span>
                )}

                <input className="inputbox" value={emailid} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email id"></input>
                {/* print invalid input message */}
                <span
                    className='invalid-input'
                    style={{
                        fontWeight: 'bold',
                        color: 'red'
                    }}
                >
                    {emailidError}
                </span>

                {/* print empty field message */}
                {error && !emailid && (
                    <span
                        className='invalid-input'
                        style={{
                            fontWeight: 'bold',
                            color: 'red'
                        }}
                    >
                        Please fill out this field!
                    </span>
                )}
                {/* <input className="inputbox" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password"></input> */}

                {
                    params.id ?
                        <>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                className='inputbox'
                                title='Enter Password'
                                disabled={true}
                            />
                        </> :
                        <>

                            <input
                                type='password'
                                placeholder='Enter Password'
                                className='inputbox'
                                title='Enter Password'
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    validatePassword();
                                }}
                                required
                            />

                            {/* print invalid input message */}
                            <span
                                className='invalid-input'
                                style={{
                                    fontWeight: 'bold',
                                    color: 'red'
                                }}
                            >
                                {passwordError}
                            </span>

                            {/* print empty field message */}
                            {error && !password && (
                                <span
                                    className='invalid-input'
                                    style={{
                                        fontWeight: 'bold',
                                        color: 'red'
                                    }}
                                >
                                    Please fill out this field!
                                </span>
                            )}
                        </>
                }


                <select id="role" value={role} defaultValue="Select Role"
                    onChange={(e) => setRole(e.target.value)} className="inputbox">
                    <option value="">Select Role</option>
                    <option value={'viewer'}>Viewer</option>
                    <option value={'photog'}>Photographer</option>
                </select>

                <select id="inst" value={instname} defaultValue="Select institute"
                    onChange={(e) => setInst(e.target.value)} className="inputbox">
                    <option value="">Select Institute</option>
                    <option value={'AMTICST'}>Asha M. Tarsadia Institute of Computer Science and Technology</option>
                    <option value={'BMIIT'}>Babu Madhav Institute Of Information Technology</option>
                    <option value={'CGBIBT'}> C. G. Bhakta Institute of Biotechnology</option>
                    <option value={'CGPIT'}>Chhotubhai Gopalbhai patel Institute Of Technology</option>
                    <option value={'DP'}>Diwaliba Polytechnic</option>
                    <option value={'DCO'}>Diwaliba College of Optometry</option>
                    <option value={'DOM'}>Department of Mathemetics</option>
                    <option value={'DOP'}>Department of Physics</option>
                    <option value={'DOC'}>Department of Chemistry</option>
                    <option value={'DOE'}>Department of English</option>
                    <option value={'BVPCommerce'}>Bhulabhai Vanmalibhai Patel Institute of Commerce</option>
                    <option value={'BVPComputer'}>Bhulabhai Vanmalibhai Patel Institute of Computer Science</option>
                    <option value={'MPC'}>Maliba Pharmacy College</option>
                    <option value={'MBNC'}>Maniba Bhula Nursing College</option>
                    <option value={'RBSA'}>Raman Bhakta School of Architecture</option>
                    <option value={'SRIMCA'}>Shrimad Rajchandra Institute of Management and Computer Application</option>
                    <option value={'BVPIM'}>Bhulabhai Vanmalibhai Patel Institute of Management</option>
                    <option value={'KIASRC'}>Kishorbhai Institute of Agriculture Sciences and Research Centre</option>
                    <option value={'SRCP'}>Shrimad Rajchandra College of Physiotherapy</option>
                    <option value={'JFDT'}>JAYMIN SCHOOL OF FASHION DESIGN & TECHNOLOGY</option>
                    <option value={'GSID'}>Godavariba School of Interior Design</option>
                    <option value={'SRIMCAMBA'}>SRIMCA- MBA</option>
                    <option value={'DOH'}>Department Of Humanities</option>
                    <option value={'DCVPCP'}>Dr. Chunibhai Vallabhbhai Patel College of Pharmacy</option>                
                </select>

                <input style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} type="submit" value="Submit" className="btn" onClick={collectData}></input>


            </section>
        </div>

    )
}

export default Signinpage;