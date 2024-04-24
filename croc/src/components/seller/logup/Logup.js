import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";

import './Logup.css'
import { GetAllUsers } from "../../../apis/UserApi";
import Footer from "../../footer/Footer";
const Logup = () => {
    const [allusers,setAllusers]= useState([]);
    const navigate = useNavigate();
  
    const [user, setUser]= useState({
      username : "",
      email : "",
      password : "",
      role : "",
      pic : "",
      company:"",
      authorize:false
    });
    
    //Handle Input
    const handleInput = (event)=>{
      let name = event.target.name;
      let value = event.target.value;
  
      setUser({...user,[name]:value});
    }
    const isUsers = async () => {
      const uslg = await GetAllUsers();
      setAllusers(uslg);
    };
  
    //Handel Submit
    const handleSubmit = async ()=>{
    
      
      const config = {headers: {"Content-Type": "application/json"},}
      try {
       
        const res = await axios.post('/api/user/logup', user,config)
  
        if (res.status === 400 || !res ){
          window.alert("Already Used Details");
        }else{
          
          window.alert("Registered Successfully");
          navigate('/login')
        }
      } catch (error) {
        console.log(error);
      }
    }
    
    const handleCheckboxChange = () => {
      setUser({...user, authorize: !user.authorize});
    }
  
  
    const handelCheck = (e) => {
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      const pwdFilter = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
      
        
      
      e.preventDefault();
   
        
      if (!user.username || !user.email|| !user.password || !user.role || !user.company) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'Please check your informations !'
        })
        
      }else  if (regEx.test(user.email) && pwdFilter.test(user.password)) {
        handleSubmit();
  
        
      }
      else if (!pwdFilter.test(user.password) && user.password !==""){
        window.alert(" Password must be a minimum of 8 characters including number, Upper, Lower And one special character");
      }
      
       else if (!regEx.test(user.email) && user.email !== "") {
        window.alert("Email is Not Valid");
      }
      
    }
  
    useEffect(()=>{
      isUsers();
      // setUser({...user,role:"sel"});     
    },[])
  
  
    return (
      <div className="mddt">
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center formm order-2">
            <h1 className="display-4 fw-bolder">Hello, Seller </h1>
            <p className="lead text-center">Want to join our Family?</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50 text-black"
            >
              Log In
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Username
                </label>
                <input
                  placeholder="username"
                  type="text"
                  className="form-control"
                  id="name"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
    
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  placeholder="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
    
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  placeholder="***********"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="company" className="form-label">
                  Company
                </label>
                <input
                  placeholder="Company"
                  type="text"
                  className="form-control"
                  id="company"
                  name="company"
                  value={user.company}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label for="InputRole" className="form-label">
                    Role
                  </label>
                  <select
                    className="form-control"
                    onChange={handleInput}
                    name="role"
                  >
                    <option>--SELECT--</option>
                    <option value="sel">Seller</option>
                    <option value="manufacturer">Manufacturer </option>
                  </select>
              </div>
              <br />
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I agree to the terms and conditions
                </label>
              </div>
    
              <button
                onClick={handelCheck}
                type="button"
                className="btn btn-primary w-100 mt-4 rounded-pill"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
    );
  };

export default Logup