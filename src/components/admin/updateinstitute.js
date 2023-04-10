import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate,Link } from "react-router-dom";


const UpdateInst = () => {
   
    
    const params = useParams();
    const navigate = useNavigate();
    const [instname, setCategory] = React.useState('');
 
    useEffect(() => {
        getcategoriesdetails();
        
    }, [])

    

    const getcategoriesdetails = async ()=>{
        console.warn(params)
        let result = await fetch(`http://localhost:5000/update_inst/${params.id}`);
        result = await result.json();
        setCategory(result.instname)
       console.warn(result)
        
    }

    const updatecategory = async ()=>{
        let result = fetch(`http://localhost:5000/update_inst/${params.id}`,{
            method:'Put',
            body:JSON.stringify({instname}),
            headers:{
                'Content-Type':"application/json"
            }
        });
        result = (await result).json()
        console.warn(result)
        navigate('/manageInstitute')
    }

    return (

        <div className="divsgn" style={{marginTop:"10%"}}>
            <h1 className="register">Update Institute</h1>
            <input className="inputbox" type="text" placeholder="enter institute"
                value={instname} onChange={(e) => setCategory(e.target.value)} />
            <button onClick={updatecategory} style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} type="button" className="btnsn">update institute</button>
            <Link to={"/manageInstitute"}><button type="button" className="btnsn" style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}}>cancel</button></Link>

        </div>
    )
}

export default UpdateInst;