import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dash.css";
import { Avatar } from "@chakra-ui/react";
import { CurrentUser } from "../../apis/UserApi";
const SideBar = () => {
  const [user, setUser] = useState({});
  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
   
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    
    <div className="sideba">
      <div className="sideba-top">
        <div className="sideba-center">
          <ul className="list">
          <Avatar
            className="ava"
            cursor="pointer"
            name={user?.username}
            src={user?.pic}
          />
          
            <li className="list-item mt-5">
            <a href="/dashboard" className="nav-link">
              <i
                style={{ fontSize: "20px" }}
                className="list-item-icon fas fa-home"
              />
              <span className="list-item-text">HOME</span>
              </a>
            </li>
            {/* <li className="list-item">
              <a href="/adprof" className="nav-link">
                <i className="list-item-icon fas fa-user" />
                <span className="list-item-text">PROFILE</span>
              </a>
            </li> */}
{/* 
            <li className="list-item">
              <a href="/usersdb" className="nav-link">
                <i className="list-item-icon fas fa-copy" />
                <span className="list-item-text">ALL USERS</span>
              </a>
            </li> */}
            {/* <li className="list-item">
              <a href="/chart" className="nav-link">
                <i className="list-item-icon fas fa-chart-pie" />
                <span className="list-item-text">DATA</span>
              </a>
            </li> */}
           
            {/* <li className="list-item">
              <a href="/adof" className="nav-link">
                <i className="list-item-icon fas fa-database" />
                <span className="list-item-text">MY OFFERS</span>
              </a>
            </li> */}
            <li className="list-item">
              <a href="/alluser" className="nav-link">
                <i className="list-item-icon fas fa-database" />
                <span className="list-item-text">Offers</span>
              </a>
            </li>
            <li className="list-item">
              <a href="/alloff" className="nav-link">
                <i className="list-item-icon fas fa-database" />
                <span className="list-item-text">Users</span>
              </a>
            </li>

            <li className="list-item">
              <a href="/messdb" className="nav-link">
                <i className="list-item-icon far fa-envelope" />
                <span className="list-item-text">MAILBOX</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
