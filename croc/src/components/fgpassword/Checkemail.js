import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'
import Footer from "../screens/Footer/Footer";

const Checkemail = () => {
    const navigate = useNavigate();
    const [useremail, setUseremail] = useState({
        email: "" ,
      });

    
    const handleSubmit = async (e) => {
      e.preventDefault();
        const config = { headers: { "Content-Type": "application/json" } };
        try {
          const res = await axios.post("/api/user/forgotpassword", useremail, config);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Check your Email',
            showConfirmButton: false,
            timer: 1500
          })
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
          <div
            className="col-md-5 d-flex flex-column
                 align-items-center text-white justify-content-center formm"
          >
            <h1 className="display-4 fw-bolder">Hello there!!</h1>
            <p className="lead text-center">Did You Forget Your Password ?</p>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5 ">Your Email</h1>

            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={useremail.email}
                  onChange={(e) =>
                    setUseremail({ ...useremail, email: e.target.value })}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

            
              <button
                type="button"
                className="btn btn-primary w-100 mt-4 rounded-pill"
                onClick={(e)=>handleSubmit(e)}
              >
               Verify
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkemail;
