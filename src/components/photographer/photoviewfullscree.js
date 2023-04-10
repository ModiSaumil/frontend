import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

const Photoviewfull = () => {
    const [photo, setPhoto] = React.useState([]);
    const [comment, setCmt] = React.useState("");
    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        getalllist();
    }, [])

    const u_id = JSON.parse(localStorage.getItem("user"))._id;
    const u_name = JSON.parse(localStorage.getItem("user")).fname;
    console.warn(u_name)
    const p_id = params.id;

    const addcomment = async () => {
        let result =await fetch("http://localhost:5000/addcomment", {
                method:'post',
                body:JSON.stringify({comment,p_id,u_id,u_name}),
                headers:{
                    'Content-Type':'application/json'
                   },
        });
       result = await result.json()
       navigate('/photolist')
       console.warn(result);
    }

    const getalllist = async () => {
        let result = await fetch(`http://localhost:5000/getPhotosbyid/${params.id}`);
        result = await result.json();
        setPhoto(result)
    }
    console.warn("photo", photo);

    return (
        <div className='divmargin' style={{marginTop:"10%"}}>
            {/* <h3>All Photos list</h3> */}
            {/* <input className="animation" onChange={searchHandle} type="text" placeholder='enter to search..'></input> */}
            <table className='tablecss'>
                {/* <thead>
                    <tr className='trcss'>
                        <th>SR No.</th>
                        {/* <th>userid</th> 
                        <th>Image name</th>
                        <th>Tag</th>
                        <th>Category</th>
                        <th>Images</th>
                        <th>Operations</th>
                    </tr>
                </thead> */}
                <tbody>
                    {
                        photo.length > 0 ? photo.map((item, index) => (
                            <tr key={item._id} className='trcss img' >
                                {/* <td className='tdcss'>{index + 1}</td> */}
                                {/* <td className='tdcss'>{item.userid}</td> */}
                                {/* <td className='tdcss'>{item.imgname}</td> */}
                                {/* <td className='tdcss'>{item.tag}</td> */}
                                {/* <td className='tdcss'>{item.category}</td> */}

                                <td className='tdcsss'>{item ?
                                    <img src={`http://localhost:5000/${item.photo}`} alt={item.imgname} />

                                    :
                                    <span>deleted</span>
                                }</td>

                                {/* <td className='tdcss'><button onClick={()=>deleteProduct(item._id)}>Delete</button> */}
                                {/* <Link to={"/photoupdate/" + item._id}>Update</Link></td> */}
                            </tr>

                        ))
                            : <tr> <td><strong>No Records
                                Found!</strong></td></tr>
                    }
                    <tr>
                        <td>
                         <input className="inputbox"  type="text" 
                         value={comment } onChange={(e) => setCmt(e.target.value)}
                          placeholder='enter to add comment..'></input> 
                         <button style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} className="btnsn" onClick={addcomment} type="button">Submit</button>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Photoviewfull;
