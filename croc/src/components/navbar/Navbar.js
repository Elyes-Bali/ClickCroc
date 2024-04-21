import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CurrentUser } from "../../apis/UserApi";
import { Avatar } from "@chakra-ui/react";
const Navbar = ({ ping }) => {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");
  const isSeller = localStorage.getItem("isSeller");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isSeller");
  };

  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
  };

  useEffect(() => {
    isLoggedIn();
  }, [ping]);

  return (
    <div>
    <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a
            className="navbar-brand mt-2 mt-lg-0"
            href={!isAdmin && token && "/"}
          >
            <p>
              <b>C&C</b>
            </p>
          </a>
  
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!isAdmin && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
              </>
            )}
            {/* <li className="nav-item">
              <a className="nav-link" href="/produit">
                wish
              </a>
            </li> */}
            {!isAdmin && token && (
              <li className="nav-item">
                <a className="nav-link" href="/market">
                  Explore
                </a>
              </li>
            )}
          </ul>
  
          {isSeller && !isAdmin && token && (
            <div>
              <>
                <a
                  className="text-reset me-3  hidden-arrow"
                  href="/wish"
                >
                  <i className="fa fa-heart" aria-hidden="true"></i>
                  <span className="badge rounded-pill badge-notification bg-danger"></span>
                </a>
              </>
            </div>
          )}
          {isSeller && token && (
            <div className="dropdown">
              <>
                <a
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                  <span className="badge rounded-pill badge-notification bg-danger"></span>
                </a>
              </>
  
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/Create">
                    Create
                  </a>
                </li>
              </ul>
            </div>
          )}
          {isAdmin && token && (
            <div className="dropdown">
              <>
                <a
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                  <span className="badge rounded-pill badge-notification bg-danger"></span>
                </a>
              </>
  
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/Create">
                    Create
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
  
        <div className="d-flex align-items-center">
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <Avatar
                className="avatar"
                size="md"
                cursor="pointer"
                name={user?.username}
                src={user?.pic}
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              {!token ? (
                <>
                  <li>
                    <a className="dropdown-item" href="/login">
                      <i className="fa fa-sign-in" aria-hidden="true" />
                      &nbsp; Log In
                    </a>
                  </li>
  
                  <li>
                    <a className="dropdown-item" href="/register">
                      <i className="fa fa-user-plus" aria-hidden="true" />
                      &nbsp; Register
                    </a>
                  </li>
                </>
              ) : (
                <>
                  {isAdmin && (
                    <>
                    <li>
                      <a className="dropdown-item" href="/dashboard">
                        <i className="fa fa-tachometer" aria-hidden="true" />
                        &nbsp; Dashboard
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/adprof">
                        <i className="fas fa-user" aria-hidden="true" />
                        &nbsp; My Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/adof">
                        <i className="fa fa-database" aria-hidden="true" />
                        &nbsp; My Offers
                      </a>
                    </li>
                    </>
                  )}
  
                  
                   {isSeller && (
                    <>
                      <a className="dropdown-item" href="/clt">
                        <i className="fa fa-archive" aria-hidden="true" />
                        &nbsp; My Offers
                      </a>
                    </>
                  )}
                  {!isAdmin && (
                    <li>
                      <a className="dropdown-item" href="/Profil">
                        <i className="fa fa-cog" aria-hidden="true" />
                        &nbsp; Settings
                      </a>
                    </li>
                  )}
  
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={handleLogout}
                      href="/logout"
                    >
                      <i className="fa fa-sign-out" aria-hidden="true" />
                      &nbsp; Log Out
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  
  );
};

export default Navbar;
