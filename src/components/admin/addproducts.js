import React, {  useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const AddProduct = () => {
    // const navigate = useNavigate('');
    const [imgname, setName] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [error, setError] = React.useState(false);
    const [photo,setPhoto]=React.useState("");
    const [cat, setCategory] = React.useState('');
    const [category, setCategoryname] = React.useState('');
    const [institite, setInst] = React.useState('');
    const [instname, setInstname] = React.useState('');
    const userid = JSON.parse(localStorage.getItem("user"))._id;

  const navigate=useNavigate();

    useEffect(() => {
        getcategories();
        getinstitute();
    }, [])

    

    const getcategories = async () => {
        let result = await fetch('http://localhost:5000/getcategories');
        result = await result.json();
        setCategory(result);
        console.log(result);
    }

    const getinstitute = async () => {
        let result = await fetch('http://localhost:5000/getinst');
        result = await result.json();
        setInst(result);
        console.log(result);
    }

    const addProduct = async () => {    
    // return console.log(imgname);

    const formdata = new FormData();
    formdata.append('imgname', imgname);
    formdata.append("category", category);
    formdata.append("instname",instname);
    formdata.append("tag", tag);
    formdata.append("photo", photo);
    formdata.append("userid",userid);

    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      const result = await axios.post(
        "http://localhost:5000/addproduct",
        formdata, config
      );
    //    result=await result.json();
    //    if (result) {
        alert("image inserted");
        navigate('/photolist');
  
    //    }
    //    else {
        //  alert("Product not inserted");
    //    }
        // console.warn(imgname, tag);
        // const userid = JSON.parse(localStorage.getItem("user"))._id;
        // let result = await fetch("http://localhost:5000/addproduct", {
        //     method: 'post',
        //     body: JSON.stringify({ imgname, category, tag, userid }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // });
        // result = await result.json()
        // alert("image uploaded..")
        // navigate('/photolist')
        // console.warn(category);
        // console.warn(cat);
        // console.warn(result);
    }

    const handleInputChange = (e) => {
        setCategoryname(e.target.value)
        console.warn(category);
        setInstname(e.target.value)
        console.warn(instname);
    }

    const handlechange = (e) =>{
        setPhoto(e.target.files[0]);
    }

    return (
        <div className="divsgn" style={{marginTop:"10%"}}>
            <h1 className="register">Add Photos</h1>
            <input className="inputbox" type="text" placeholder="enter image name"
                value={imgname} onChange={(e) => setName(e.target.value)} />
            <input className="inputbox" type="text" placeholder="enter tag"
                value={tag} onChange={(e) => setTag(e.target.value)} />

            <select className='inputbox' id='cat' defaultValue="select category"
                onChange={(e) => setCategoryname(e.target.value)}>
            
                <option value={0}>
                    Select Category
                </option>

                {cat.length > 0 ? (
                    cat.map((item, index) => (
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

             <select className='inputbox' id='institite' defaultValue="select institute"
                onChange={(e) => setInstname(e.target.value)}>
            
                <option value={0}>
                    Select institute
                </option>

                {institite.length > 0 ? (
                    institite.map((item, index) => (
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


            <form><input type="file" className="inputbox" name="upload_file" onChange={handlechange} ></input>
            </form>

            <button onClick={addProduct} type="button" style={{padding:"5px", width: "100px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} className="btnsn">Add photo</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={"/photoadd"}><button type="button" style={{padding:"5px", width: "100px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} className="btnsn">cancel</button></Link>

        </div>
    )
}

export default AddProduct;










// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from "react-router-dom";

// const AddProduct = () => {
//     const navigate = useNavigate('');
//     const [imgname, setName] = React.useState('');
//     const [tag, setTag] = React.useState('');
//     const [cat, setCategory] = React.useState('');
//     const [error, setError] = React.useState(false);
//     const [category, setCategoryname] = React.useState('');

  

//     useEffect(() => {
//         getcategories();
        
//     }, [])

    

//     const getcategories = async () => {
//         let result = await fetch('http://localhost:5000/getcategories');
//         result = await result.json();
//         setCategory(result);
//         console.log(result);
//     }

//     const addProduct = async () => {
//         console.warn(imgname, tag);
//         const userid = JSON.parse(localStorage.getItem("user"))._id;
//         let result = await fetch("http://localhost:5000/addproduct", {
//             method: 'post',
//             body: JSON.stringify({ imgname, category, tag, userid }),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         });
//         result = await result.json()
//         alert("image uploaded..")
//         navigate('/photolist')
//         console.warn(category);
//         console.warn(cat);
//         console.warn(result);
//     }

//     const handleInputChange = (e) => {
//         setCategoryname(e.target.value)
//         console.warn(category);
//     }

//     const handlechange = () =>{

//     }

//     return (
//         <div className="divsgn">
//             <h1 className="register">Add Photos</h1>
//             <input className="inputbox" type="text" placeholder="enter image name"
//                 value={imgname} onChange={(e) => setName(e.target.value)} />
//             <input className="inputbox" type="text" placeholder="enter tag"
//                 value={tag} onChange={(e) => setTag(e.target.value)} />

//             <select className='dropdown' id='cat' defaultValue="select category"
//                 onChange={(e) => setCategoryname(e.target.value)}>
            
//                 <option value={0}>
//                     Select Category
//                 </option>

//                 {cat.length > 0 ? (
//                     cat.map((item, index) => (
//                         <option
//                             key={item._id}
//                             value={item.category}
//                         >

//                             {item.category}
//                         </option>
//                     ))
//                    ) : (
//                         <option value={0}>
//                             No Records Found!
//                         </option>
//                     )}
//             </select> 

//             <form><input type="file" className="inputbox" name="upload_file" onChange={handlechange} ></input>
//             </form>

//             <button onClick={addProduct} type="button" className="btnsn">Add photo</button>

//         </div>
//     )
// }

// export default AddProduct;