import React, { useState, useEffect } from 'react';
import { useNavigate , Link} from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate('');
    const [imgname, setName] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [instname, setInst] = React.useState('');
    const [error, setError] = React.useState(false);
    const [photo, setPhoto] = React.useState('');

    useEffect(() => {

        getcategories();
    }, []);

    const getinstitute = async () => {
        let result = await fetch('http://localhost:5000/getinst');
        result = await result.json();
        setInst(result.data);
        console.warn(result.data);
    }

    const getcategories = async () => {
        let result = await fetch('http://localhost:5000/getcategories');
        result = await result.json();
        setCategory(result.data);
        console.warn(result.data);
    }

    const addProduct = async () => {
        console.warn(imgname, tag);
        const userid = JSON.parse(localStorage.getItem("user"))._id;
        let result = await fetch("http://localhost:5000/addproduct", {
            method: 'post',
            body: JSON.stringify({ imgname, category, instname, tag, userid }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        alert("image uploaded..")
        navigate('/photolist')
        console.warn(result);
    }

    const handleInputChange = () => {

    }

    return (
        <div className="divsgn" style={{marginTop:"10%"}}>
            <h1 className="register">Add Photos</h1>
            <input className="inputbox" type="text" placeholder="enter image name"
                value={imgname} onChange={(e) => setName(e.target.value)} />
            <input className="inputbox" type="text" placeholder="enter tag"
                value={tag} onChange={(e) => setTag(e.target.value)} />

            {/* <select id="cat" value={cat} defaultValue="Select category"
                onChange={(e) => setCategory(e.target.value)} className="dropdownCategory">
                <option value="">Select category</option>
                <option value={'1'}>navratri</option>
                <option value={'2'}>newyear</option>
            </select> */}


            <select id='category' className='dropdownCategory' defaultValue="select category" value={category} onChange={(e) => setCategory(e.target.value)}>
                {category.length > 0 ? (
                    category.map((item, index) => (
                        <option
                            key={item._id}
                            value={item.category}
                        >
                            {item.category}
                        </option>
                    ))
                ) : (
                    <option value={0}>
                        No Records Found!
                    </option>
                )}
            </select>

            <select id='institite' className='dropdownCategory' defaultValue="select institute" value={instname} onChange={(e) => setInst(e.target.value)}>
                {instname.length > 0 ? (
                    instname.map((item, index) => (
                        <option
                            key={item._id}
                            value={item.instname}
                        >
                            {item.instname}
                        </option>
                    ))
                ) : (
                    <option value={0}>
                        No Records Found!
                    </option>
                )}
            </select>

            <form><input type="file" className="inputbox" name="upload_file"  ></input>
            </form>

            <button style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} onClick={addProduct} type="button" className="btnsn">Add photo</button>
            <Link to={"/photolist"}><button style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} type="button" className="btnsn">cancel</button></Link>

        </div>
    )
}

export default AddProduct;