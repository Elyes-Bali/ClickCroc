import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Contact.css"
import { CurrentUser} from "../../apis/UserApi";
import Footer from "../screens/Footer/Footer";
const Contact = ({id}) => {
  const [user,setUser]=useState({});
  const isUser = async () => {
    const AllUser = await CurrentUser();

    setUser(AllUser.data.user);
  };

  const [msg, setMsg]= useState({
    name : "",
    email : "",
    message : ""
  });

  //Handle Input
  const handleChange = (event)=>{
    let name = event.target.name;
    let value = event.target.value;

    setMsg({...msg,[name]:value});
  }



   const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post('/api/message/create',msg)

      console.log(res.status)
      if(res.status === 400 || !res){
        window.alert("Message Not Sent. Try Again Later")
      }else{
       
        window.alert("Message Sent");
        setMsg({
          
          message : "",
          
        })
        
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {   
    isUser();
    setMsg({...msg,
      name : user.username,
      email :user.email,
     
       
    })
  }, [user._id]);

  return (
    <div id={id}>
  <section>
    <div className="container my-5 py-5">
      <div className="row mb-5">
        <div className="col-12">
          <h3 className="fd-5 text-center mb-0">Contact Us</h3>
          <h1 className="display-6 text-center mb-4">
            Have any <b>Questions?</b>
          </h1>
          <hr className="w-25 mx-auto" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src="/images/contactus.jpg" alt="Contact" className="ctn" />
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="User Name"
              name="name"
              value={msg.name}
              disabled
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="email"
              value={msg.email}
              disabled
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              name="message"
              value={msg.message}
              onChange ={handleChange}
            ></textarea>
          </div>
          <button type="button" onClick={(e)=>handleSubmit(e)} className="btn btn-outline-primary rounded-pill px-4">Send Message
            <i className="fa fa-paper-plane ms-2"></i>
          </button>
        </div>
      </div>
    </div>
    <div className="contactft">
    <Footer/>
    </div>
  </section>
  
</div>

  );
};

export default Contact;
