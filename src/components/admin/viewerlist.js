import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Viewerlist = () => {
    const [photo, setPhoto] = React.useState([]);
    const navigate = useNavigate();

   
    useEffect(() => {
        getalllist();
        
    }, [])

    const getalllist = async () => {
        let result = await fetch("http://localhost:5000/getViewers");
        result = await result.json();
        setPhoto(result)
    }
    console.warn("photo", photo);

    const deleteProduct = async(id)=>{
        let result = await fetch(`http://localhost:5000/delete_viewer/${id}`,{
            method:"Delete"
        });
        result = await result.json()
        if(result){
            getalllist();
        }
    }

    const searchHandle = async (event) => {

        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/searchuser/${key}`)
            result = await result.json();
            if (result) {
                setPhoto(result);
            }
        }else{
            getalllist();
        }

    }

    return (
        <div style={{marginTop:"10%"}}>
            <h1 className='h1tag'>All Viewers list</h1>
            <input className="inputbox" onChange={searchHandle} type="text" placeholder='enter emailid to search..'></input>

            <table className='tablecss'>
                <thead>
                    <tr className='trcss'>
                        <th>SR No.</th>
                        <th>User id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        {/* <th>enrollment no</th> */}
                        <th>Contact no</th>
                        <th>Email id</th>
                        <th>Institute</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        photo.length > 0 ? photo.map((item, index) => (
                            <tr key={item._id} className='trcss'>
                                <td className='tdcss'>{index + 1}</td>
                                <td className='tdcss'>{item._id}</td>
                                <td className='tdcss'>{item.fname}</td>
                                <td className='tdcss'>{item.lname}</td>
                                {/* <td className='tdcss'>{item.enrollmentno}</td> */}
                                <td className='tdcss'>{item.emailid}</td>
                                <td className='tdcss'>{item.contactno}</td>
                                <td className='tdcss'>{item.instname}</td>
                                
                                <td className='tdcss'><button style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} onClick={()=>deleteProduct(item._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                            : <tr> <td><strong>No Records
                                Founds!</strong></td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Viewerlist;




















// import React, { useState, useEffect, Component } from 'react';
// import { useNavigate, Link } from "react-router-dom";

// class Viewerlist extends Component {

//     state = {
//         items: [],
//     };

//     // ComponentDidMount is used to
//     // execute the code 
//     componentDidMount() {
//         fetch("http://localhost:5000/getViewers")
//             .then((res) => res.json())
//             .then(items => this.setState({
//                 items
//             }))
//     }



//     render() {

//         console.log(this.state.items)

//         return (
//             <div className="photographerlist">
//                 <h1 className="h1tag">All Viewer list </h1>
//                 <ul>
//                     <li>Index no.</li>
//                     <li>First name</li>
//                     <li>lname</li>
//                     <li>enrollmentno</li>
//                     <li>contactno</li>
//                     <li>emailid</li>
//                     <li>Operation</li>
//                 </ul>
//                 {
//                     this.state.items ? this.state.items.map((user, items) =>

//                     (<ul key={user._id}>
//                         <li>{items + 1}</li>
//                         <li>{user.fname}</li>
//                         <li>{user.lname}</li>
//                         <li>{user.enrollmentno}</li>
//                         <li>{user.contactno}</li>
//                         <li>{user.emailid}</li>
//                         <li><button>Delete</button>
//                             {/* <Link to={"/Uppdate/"+user._id}>Update</Link> */}
//                         </li>

//                     </ul>
//                     )) :
//                         <h3>loading</h3>
//                 }
//             </div>
//         );
//     }
// }


// export default Viewerlist;