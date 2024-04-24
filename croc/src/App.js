import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import { Product } from "./components/products/Product";
import Advices from "./components/advices/Advices";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Info from "./components/info/Info";
import { useState } from "react";
import Logout from "./components/logout/Logout";
import Dashboard from "./components/dashboard/Dashboard";
import UsersDB from "./components/dashboard/UsersDB";
import Messg from "./components/dashboard/Messg";
import PatientRoute from "./components/routes/PatientRoute";
import Adminroute from "./components/routes/Adminroute";
import ProtectedRoutes from "./components/routes/ProtectedRoute";
import Errorpage from "./components/error/Errorpage";
import CreateOffers from "./components/seller/offers/CreateOffers"
import Chartes from "./components/dashboard/Chartes";
import Children from "./components/children/Children";
import SideBar from "./components/dashboard/SideBar";
import Profile from "./components/profile/Profile";
import Logup from "./components/seller/logup/Logup";
import Market from "./components/market/Market";
import ItemCard from "./components/itemCard/ItemCard";
import OfferDetail from "./components/offerDetail/OfferDetail";
import ClientProfile from "./components/client/ClientProfile";
import Footer from "./components/screens/Footer/Footer";
import Wishlist from "./components/whishlist/Wishlist";
import Checkemail from "./components/fgpassword/Checkemail"
import PasswordRes from "./components/fgpassword/PasswordRes"
import AdminProfile from "./components/dashboard/adminprofile/AdminProfile";
import AdminOffers from "./components/dashboard/adminoffers/AdminOffers";
import ChartDb from "./components/charts/ChartDb";
import Chartusers from "./components/charts/Chartusers";

import Contact from "./components/contact/Contact";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import ClienDB from "./components/dashboard/ClienDB";
import ManuProfile from "./components/manuDashboard/manuProfile/ManuProfile";
import ManuChart from "./components/manuDashboard/manuChart/ManuChart";
import Description from "./components/description/Description";
import Blog from "./components/Blog/Blog";
import BlogPage from "./components/Blog/blogpage/BlogPage";
import AdminBlogs from "./components/dashboard/adminBlogs/AdminBlogs";
import AdminProducts from "./components/dashboard/adminProducts/AdminProducts";



function App() {
  const [ping,setPing]=useState(false)
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");
  const isManufacturer = localStorage.getItem("isManufacturer");
  return (
    <div>
      
      <Navbar ping={ping}/>
     
      {/* <Header/> */}
    {token && isAdmin &&
      <SideBar />}

{token && isManufacturer && 
      <SideBar />}
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Errorpage />} />
        <Route path="/check" element={<Checkemail />} />
        <Route path="/reset/:token" element={<PasswordRes />} />
        <Route path="/produit" element={<Product   ping={ping} setPing={setPing}/>} />
        <Route element={<PatientRoute />}>
        <Route path="/mychildren" element={<Children ping={ping} setPing={setPing}/>} />
        </Route>
        <Route path="/advices" element={<Advices />} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logup" element={<Logup />} />
        </Route>
        <Route path="/info" element={<Info />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<Adminroute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usersdb" element={<UsersDB ping={ping} setPing={setPing}/>} />
        <Route path="/messdb" element={<Messg />} />
        <Route path="/chart" element={<Chartes/>} />
        <Route path="/adof" element={<AdminOffers/>} />
        <Route path="/allAdProducts" element={<ChartDb/>} />
        <Route path="/alloff" element={<Chartusers/>} />
        <Route path="/allclt" element={<ClienDB/>} />
        <Route path="/adblogs" element={<AdminBlogs/>} />
        <Route path="/adminProducts" element={<AdminProducts />} />

        
        <Route path="/adprof" element={<AdminProfile ping={ping} setPing={setPing}/>} />
        </Route>
        <Route path="/Create" element={<CreateOffers />} />
        <Route path="/market" element={<Market />} />
        <Route path="/dev/:id" element={<OfferDetail ping={ping} setPing={setPing}/>} />
        <Route path="/Profil" element={<Profile ping={ping} setPing={setPing}/>} />

        <Route path="/clt" element={<ClientProfile />} />
        <Route path="/wish" element={<Wishlist />} />
        <Route path="/manuprof" element={<ManuProfile ping={ping} setPing={setPing}/>} />
        <Route path="/manuchart" element={<ManuChart/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/description" element={<Description />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/allblog" element={<BlogPage />} />
   

        

      </Routes>
      {/* <div className="foot">
      <Footer/>
      </div> */}
   
    </div>
  );
}

export default App;
