import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
//------------------------------------------------------------------------------------------
import Login from './components/Login';
import SignUp from './components/SignUp';
import Resetpass from './components/resetpasswrord';
import Resetpassotp from './components/resetpasspage';
import Changepassword from './components/photographer/changepassword';
import Changepasswordviewer from './components/viewer/changepassviewver';
import Changepasswordadmin from './components/admin/changepassadmin';
import Photoviewfullacreenv from './components/photoviewfullscreennp';
//------------------------------------------------------------------------------------------
import Managecategory from './components/admin/managecategory';
import Manageinstitute from './components/admin/manageinstitute';
import Displaycategory from './components/admin/displaycategories';
import Displayinstitute from './components/admin/displayinstitutes';
import AddProduct from './components/admin/addproducts'
import ProductList from './components/admin/productlist';
import Profilephotoa from './components/admin/adminprofile';
import UpdateProfile from './components/admin/updateprofile';
import UpdatePhoto from './components/admin/updatephoto';
import Updatecategory from './components/admin/updatecategory';
import UpdateInst from './components/admin/updateinstitute';
import Photographerlist from './components/admin/photographerlist';
import Viewerlist from './components/admin/viewerlist';
import Homepagetry from './components/admin/homepagetry';
//------------------------------------------------------------------------------------------
import Photoadd from './components/photographer/photoadd';
import Photoupdate from './components/photographer/photoupdate';
import Photoview from './components/photographer/photoview';
import Photoviewfull from './components/photographer/photoviewfullscree';
import Photoviewfullv from "./components/viewer/photoviewfullscree";
import Tryviewpage from './components/admin/tryviewpage';
import Profilephotog from './components/photographer/profilephotog';
import Photocmt from './components/viewer/photocomment';
//------------------------------------------------------------------------------------------
import PrivateComponent from './components/privatecomponent';
import Privatecomponentadmin from './components/privatecomponentadmin';
import Privatecomponentphotographer from './components/privatecomponentphotographer';
import Privatecomponentviewer from './components/privatecomponentviewer';
import Sec_com from './components/sec_com';
//------------------------------------------------------------------------------------------
import Homepage from './components/viewer/homepage';
import Homepagec from './components/homepagec';
import Viewerprofile from './components/viewer/viewerprofile';
import AboutUS from './components/Aboutus';
import Photographerlistv from './components/viewer/photographerlistv';
//------------------------------------------------------------------------------------------
import Nav from './components/Nav';
import Navphotographer from './components/navphotgrapher';
import Navviewer from './components/navviewer';
//------------------------------------------------------------------------------------------
import CommonNav from './components/common_nav';
import Profilephotoav from "./components/admin/adminprofileview";
import Profilephotogview from "./components/photographer/profilephotogview";
import Viewerprofileview from "./components/viewer/viewerprofileview";
import Photoviewfullscreenadmin from "./components/admin/photoviewfullscreenadmin";
import ManageProfileimageviewer from "./components/viewer/manageprofileimage";
import ManageProfileimageph from "./components/photographer/manageprofileimagep";
import ManageProfileimagead from "./components/admin/manageprofileimagead";
import Managecomments from "./components/admin/managecomments";
function App() {
  return (
    <div>
      <BrowserRouter>
        <CommonNav></CommonNav>
        <Routes>

          <Route element={<Privatecomponentadmin />}>
            <Route path="/adminprofileview/:id" element={<Profilephotoav />}></Route>
            <Route path='/profileimagead' element={<ManageProfileimagead />}></Route>
            <Route path='/managecmt' element={<Managecomments />}></Route>
            <Route path="/adminphotolist" element={<ProductList />}></Route>
            <Route path="/categories" element={<Managecategory />}></Route>
            <Route path="/institutes" element={<Manageinstitute />}></Route>
            <Route path="/photoglist" element={<Photographerlist />}></Route>
            <Route path='/update/:id' element={<UpdatePhoto />}></Route>
            <Route path='/Uppdate/:id' element={<Updatecategory />}></Route>
            <Route path='/Upppdate/:id' element={<UpdateInst />}></Route>
            <Route path="/managecategories" element={<Displaycategory />}></Route>
            <Route path="/manageInstitute" element={<Displayinstitute />}></Route>
            <Route path="/viewerlist" element={<Viewerlist />}></Route>
            <Route path='/photoviewa/:id' element={<Photoviewfullscreenadmin />}></Route>
            <Route path="/logout" element={<h1>Logout</h1>}></Route>
            <Route path='/changepasswordadmin' element={<Changepasswordadmin />}></Route>
            <Route path='/profilea/:id' element={<Profilephotoa />}></Route>
            {/* <Route path='/profile/:id' element={<UpdateProfile />}></Route> */}
          </Route>

          <Route element={<Privatecomponentphotographer />}>
            <Route path='/profilegview/:id' element={<Profilephotogview />}></Route>
            <Route path='/profileimageph' element={<ManageProfileimageph />}></Route>

            <Route path='/photolist' element={<Photoview />}></Route>
            <Route path='/photoadd' element={<AddProduct />}></Route>
            <Route path='/photoupdate/:id' element={<Photoupdate />}></Route>
            <Route path='/profileg/:id' element={<Profilephotog />}></Route>
            <Route path='/photoviewf/:id' element={<Photoviewfull />}></Route>
            <Route path='/changepassword' element={<Changepassword />}></Route>
            <Route path="/logout" element={<h1>Logout</h1>}></Route>
          </Route>

          <Route element={<Privatecomponentviewer />}>
            <Route path='/profileimage' element={<ManageProfileimageviewer />}></Route>
            <Route path='/home' element={<Homepage />}></Route>
            <Route path='/profilevview/:id' element={<Viewerprofile />}></Route>
            <Route path='/profilev/:id' element={<Viewerprofileview />}></Route>
            <Route path="/photoglistv" element={<Photographerlistv />}></Route>
            <Route path='/photoviewv/:id' element={<Photoviewfullv />}></Route>
            <Route path="/logout" element={<h1>Logout</h1>}></Route>
            {/* <Route path="/photocmt/:id" element={<h1>Logout</h1>}></Route> */}
            <Route path='/changepasswordviewer' element={<Changepasswordviewer />}></Route>
          </Route>

          <Route element={<Sec_com />}>
            <Route path="/resetpassotp" element={<Resetpassotp />}></Route>
          </Route>

          {/* <Route path='/main' element={<Pagemain />}></Route> */}
          <Route path="/" element={<Homepagec />}></Route>
          <Route path='/photoviewc/:id' element={<Photoviewfullacreenv />}></Route>
          <Route path="/aboutus" element={<AboutUS />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          {/* <Route path="/resetpasspage" element={<Resetpasspage />}></Route> */}
          <Route path="/resetpass" element={<Resetpass />}></Route>


        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div >
  );
}

export default App;
