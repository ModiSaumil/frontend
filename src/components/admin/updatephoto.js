import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";


const UpdatePhoto = () => {

    const [imgname, setName] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [photo, setPhoto] = React.useState('');
    const [cat, setCategory] = React.useState('');
    const [inst, setinst] = React.useState('');

    const params = useParams();
    const navigate = useNavigate();
    const [category, setCategoryname] = React.useState('');
    const [instname, setinstname] = React.useState('');

    const [catenew, setCatnew] = React.useState('');


    useEffect(() => {
        getProductDetails();
        getcategories();
        getinst();
    }, [])

    const getcategories = async () => {
        let result = await fetch('http://localhost:5000/getcategories');
        result = await result.json();
        setCategory(result);
        console.log(result);
    }

    const getinst = async () => {
        let result = await fetch('http://localhost:5000/getinst');
        result = await result.json();
        setinst(result);
        console.log(result);
    }

    const getProductDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:5000/update_photos/${params.id}`);
        result = await result.json();
        setName(result.imgname)
        setTag(result.tag)
        //setCategory(result.category)
        //setPhoto(result.photo)

    }

    const updatephoto = async () => {
        //console.warn(imgname, tag, photo)

        console.warn(imgname, category, tag)
        let result = fetch(`http://localhost:5000/update_photos/${params.id}`, {
            method: 'Put',
            //body:JSON.stringify({imgname, tag, photo}),
            body: JSON.stringify({ imgname, category, instname, tag }),
            headers: {
                'Content-Type': "application/json"
            }
        });
        result = (await result).json()
        // console.warn(catenew)
        console.warn(category);
        console.warn(cat);
        console.warn(result)
        navigate('/adminphotolist')
    }

    const handleInputChange = (e) => {
        // setCatnew(e.target.value)
        console.warn(category);
    }

    return (

        <div className="divsgn" style={{marginTop:"10%"}}>
            <h1 className="register">Update Photo</h1>
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
                        No Records Founds!
                    </option>
                )}
            </select>

            <select className='inputbox' id='inst' defaultValue="select institute"
                onChange={(e) => setinstname(e.target.value)}>

                <option value={0}>
                    Select institute
                </option>

                {inst.length > 0 ? (
                    inst.map((item, index) => (
                        <option
                            key={item._id}
                            value={item.instname}
                        >

                            {item.instname}
                        </option>
                    ))
                ) : (
                    <option value={0}>
                        No Records Founds!
                    </option>
                )}
            </select>


            <form><input value={photo} type="file" className="inputbox" name="upload_file" onChange={(e) => setPhoto(e.target.value)} ></input>
            </form>   <button style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} onClick={updatephoto} type="button" className="btnsn">update photo</button>
            <Link to={"/adminphotolist"}><button type="button" style={{padding:"5px", width: "70px",backgroundColor: "orange", border:"none",borderRadius:"10px",cursor: "pointer"}} className="btnsn">cancel</button></Link>

        </div>
    )
}

export default UpdatePhoto;