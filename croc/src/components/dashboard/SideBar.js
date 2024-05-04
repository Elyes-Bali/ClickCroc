import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dash.css";
import { Avatar } from "@chakra-ui/react";
import { CurrentUser } from "../../apis/UserApi";
const SideBar = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  const isManufacturer = localStorage.getItem("isManufacturer");
  const isSeller = localStorage.getItem("isSeller");
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
            {isSeller && (
              <>
               <li className="list-item mt-5">
                <a href="/adblogs" className="nav-link">
                  <i class="fa fa-file" aria-hidden="true"></i>
                  <span className="list-item-text ml-3">My Blogs</span>
                </a>
              </li>
              <li className="list-item mt-1">
                <a href="/selprodata" className="nav-link">
                  <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  <span className="list-item-text ml-1">Products Rate</span>
                </a>
              </li>
              <li className="list-item mt-1">
                <a href="/clt" className="nav-link">
                  <i class="fa fa-archive" aria-hidden="true"></i>
                  <span className="list-item-text ml-1">My Products</span>
                </a>
              </li>
              </>
            )}
            {isAdmin && (
              <>
                <li className="list-item mt-1">
                  <a href="/dashboard" className="nav-link">
                    <i
                      style={{ fontSize: "20px" }}
                      className="list-item-icon fas fa-home"
                    />
                    <span className="list-item-text">HOME</span>
                  </a>
                </li>
{/* 
                <li className="list-item">
                  <a href="/allwishesad" className="nav-link">
                    <i className="list-item-icon fas fa-user" />
                    <span className="list-item-text">WISHLISTES</span>
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

                <li className="list-item">
                  <a href="/comdb" className="nav-link">
                    <i class="fa fa-comments-o" aria-hidden="true" />
                    &nbsp;
                    <span className="list-item-text">COMMENTS</span>
                  </a>
                </li>
                <li className="list-item">
                  <a href="/allAdProducts" className="nav-link">
                    <i class="fa fa-product-hunt" aria-hidden="true" /> &nbsp;
                    <span className="list-item-text">Products</span>
                  </a>
                </li>
                <li className="list-item">
                  <a href="/allclt" className="nav-link">
                    <i className="list-item-icon fas fa-user" />
                    <span className="list-item-text">Users</span>
                  </a>
                </li>
                <li className="list-item">
                  <a href="/alloff" className="nav-link">
                    <i className="list-item-icon fas fa-database" />
                    <span className="list-item-text">Data</span>
                  </a>
                </li>

                <li className="list-item">
                  <a href="/messdb" className="nav-link">
                    <i className="list-item-icon far fa-envelope" />
                    <span className="list-item-text">MAILBOX</span>
                  </a>
                </li>
              </>
            )}
            {isManufacturer && !isAdmin && (
              <>
                <li className="list-item mt-4">
                  <a href="/manuprof" className="nav-link">
                    <i className="list-item-icon fas fa-user" />
                    <span className="list-item-text">PROFILE</span>
                  </a>
                </li>
                <li className="list-item mt-4">
                  <a href="/manuchart" className="nav-link">
                    <i className="list-item-icon fas fa-database" />
                    <span className="list-item-text">DATA</span>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
