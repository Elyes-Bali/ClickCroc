import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { GetAllUsers } from "../../apis/UserApi";
import "./Register.css";
import Footer from "../screens/Footer/Footer";

const Register = () => {
  const [auth, setAuth] = useState(false);

  const [allusers, setAllusers] = useState([]);
  const navigate = useNavigate();

  const Show = (e) => {
    e.preventDefault();
    if (auth) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  };

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "clt",
    company: "",
    authorize: 0,
  });

  //Handle Input
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  const isUsers = async () => {
    const uslg = await GetAllUsers();
    setAllusers(uslg);
  };
  console.log(user);
  const handleSubmit = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
  
    let updatedUser = { ...user };
  
    // Update user state based on role
    updatedUser.authorize = user.role !== "clt" ? false : true;
  
    try {
      const res = await axios.post("/api/user/register", updatedUser, config);
      window.alert(res.data.msg);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  
  //Handel Submit
  // const handleSubmit = async () => {
  //   const config = { headers: { "Content-Type": "application/json" } };
  //   if (user.role != "clt") {
  //     setUser({ ...user, authorize: false });
  //   } else {
  //     setUser({ ...user, authorize: true });
  //   }
  //   try {
  //     const res = await axios.post("/api/user/register", user, config);
  //     //console.log(res.data.msg)
  //     window.alert(res.data.msg);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handelCheck = (e) => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const pwdFilter =
      /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;

    e.preventDefault();

    if (!user.username || !user.email || !user.password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "Please check your informations !",
      });
    } else if (regEx.test(user.email) && pwdFilter.test(user.password)) {
      handleSubmit();
    } else if (!pwdFilter.test(user.password) && user.password !== "") {
      window.alert(
        " Password must be a minimum of 8 characters including number, Upper, Lower And one special character"
      );
    } else if (!regEx.test(user.email) && user.email !== "") {
      window.alert("Email is Not Valid");
    }
  };

  useEffect(() => {
    isUsers();
  }, []);

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div
            className="col-md-5 d-flex flex-column
               align-items-center text-white justify-content-center formm order-2"
          >
            <h1 className="display-4 fw-bolder">Hello , Friend</h1>
            <p className="lead text-center">Enter Your Details To Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50 text-black"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Username
                </label>
                <input
                  placeholder="username"
                  type="text"
                  class="form-control"
                  id="name"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  placeholder="email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  placeholder="***********"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>

              <br />
              {/* <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                 I Agree Terms And Conditions
              </label>
            </div> */}
              {/* <div className="mb-4">
                Wanna be A part of us?{" "}
                <button type="submit" onClick={(e) => Show(e)}>
                  click here
                </button>
              </div> */}
              <div>
                <label for="InputRole" className="form-label">
                  Role
                </label>
                <select
                  className="form-control"
                  onChange={handleInput}
                  name="role"
                  value={user.role}
                >
                  <option value="clt">Client</option>
                  <option value="sel">Seller</option>
                  <option value="manufacturer">Manufacturer </option>
                </select>
              </div>
              {user.role != "clt" && (
                <div>
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
                </div>
              )}

              <button
                onClick={handelCheck}
                type="button"
                class="btn btn-primary w-100 mt-4 rounded-pill"
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

export default Register;
