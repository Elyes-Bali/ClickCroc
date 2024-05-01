import React from 'react';
import "./Validation.css";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const Validation = () => {
  
    const navigate = useNavigate();
  
    const { token } = useParams();
    console.log(token);
  
    const confirmEmail = async(e) => {
      e.preventDefault();
      const config = { headers: { "Content-Type": "application/json" } };
        try {
          const res = await axios.put(`/api/user/validateaccount/${token}`,config);
          window.alert(res.data.message)
          navigate("/login")
        } catch (error) {
            console.log(error);
        }

    };
  
    return (
      <div className="verific ">
        <div className="verific1">
          <button className="btnverifc" onClick={confirmEmail}>
            Activez votre compte
          </button>
        </div>
      </div>
    );
}

export default Validation