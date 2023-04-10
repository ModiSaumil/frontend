import React, { useState, useEffect } from 'react';
import { mockComponent } from 'react-dom/test-utils';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Login = () => {

    const [password, setPassword] = useState("");
    const [emailid, setEmail] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
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
    }, [navigate])

    const handleLogin = async () => {
        console.warn("email , password : ", emailid, password)
        let result = await fetch('http://localhost:5000/login', {

            method: 'post',
            body: JSON.stringify({ emailid, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
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
    return (
        <div>


            <section class="home" id="home">

            <div class="content">
                    <h3>UKA<span>TARSADIA</span>UNIVERSITY</h3>
                    <p>NAAC accredited 'B+' Grade with CGPA 2.74</p>
                </div>

            </section>


            <section class="features" id="features">

                <h1 class="heading"> Log <span> In </span> </h1>

                <input className="inputbox" type="text" placeholder="Enter Email id" onChange={(e) => setEmail(e.target.value)} value={emailid} required></input>
                {error && !emailid && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}

                <input className="inputbox" type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password} required></input>
                {error && !password && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}
                <p><Link to="/resetpass">Forgot password ?</Link></p>


                <input style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} type="submit" value="Login" className="btn" onClick={handleLogin}></input>


            </section>
        </div>

    )
}

export default Login;