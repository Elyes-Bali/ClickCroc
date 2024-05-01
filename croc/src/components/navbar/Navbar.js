import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { CurrentUser } from "../../apis/UserApi";
import { Avatar } from "@chakra-ui/react";
import { GetAllOff } from "../../apis/OfferApi";
import { Input, Button } from "@chakra-ui/react";
import { Card, CardGroup } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
const Navbar = ({ ping }) => {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");
  const isSeller = localStorage.getItem("isSeller");
  const isManufacturer = localStorage.getItem("isManufacturer");
  const isClient = localStorage.getItem("isClient");
  const location = useLocation();
  const [listoff, setListOff] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  const isOff = async () => {
    const AllOff = await GetAllOff();

    setListOff(AllOff);
  };
  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
    const searchFruits = listoff.filter((el) => {
      return el.prjectname.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredResults(searchFruits);
  };

  // Custom function to determine if the current path matches the given href
  const isActive = (href) => {
    return location.pathname === href;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isSeller");
    localStorage.removeItem("isManufacturer");
    localStorage.removeItem("isClient");
  };

  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
  };

  useEffect(() => {
    token && isLoggedIn();
    isOff();
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
              {/* {!isAdmin && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                </>
              )} */}
              {/* <li className="nav-item">
              <a className="nav-link" href="/produit">
                wish
              </a>
            </li> */}
              {/* {!isAdmin && (
                <li className="nav-item">
                  <a className="nav-link" href="/market">
                    Explore
                  </a>
                </li>
              )} */}
            </ul>
          
              <>
                <div className="navsearch">
                  <div className="">
                    <div>
                      <div className="btnt rounded-pill ">
                        <Input
                          icon="search"
                          placeholder="Search..."
                          onChange={handleSearch}
                          value={searchInput}
                        />
                      </div>
                    </div>
                    <CardGroup
                      className="navcardres "
                      itemsPerRow={5}
                      style={{ marginTop: 20 }}
                    >
                      {searchInput &&
                        filteredResults &&
                        filteredResults.map((item) => {
                          return (
                            <Card>
                              <Link
                                to={`/dev/${item._id}`}
                                state={{ dev: item }}
                              >
                                <CardHeader>{item.prjectname}</CardHeader>
                              </Link>
                            </Card>
                          );
                        })}
                    </CardGroup>
                    {/* <a className="btn btn-light" href="#about">
                    Get Started
                  </a> */}
                  </div>
                </div>
              </>
         
            
              <>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${isActive("/") ? "active" : ""}`}
                      href="/"
                    >
                      HOME
                    </a>
                  </li>
                </ul>

                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        isActive("/market") ? "active" : ""
                      }`}
                      href="/market"
                    >
                      EXPLORE
                    </a>
                  </li>
                </ul>

                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        isActive("/description") ? "active" : ""
                      }`}
                      href="/description"
                    >
                      ABOUT
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        isActive("/contact") ? "active" : ""
                      }`}
                      href="/contact"
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        isActive("/allblog") ? "active" : ""
                      }`}
                      href="/allblog"
                    >
                      BLOGS
                    </a>
                  </li>
                </ul>
              </>
           
            {/* {isSeller && !isAdmin && token && (
              <div>
                <>
                  <a className="text-reset me-3  hidden-arrow" href="/wish">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <span className="badge rounded-pill badge-notification bg-danger"></span>
                  </a>
                </>
              </div>
            )} */}
            {/* {isSeller && token && (
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
            )} */}
            {/* {isAdmin && token && (
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
            )} */}
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
                            <i
                              className="fa fa-tachometer"
                              aria-hidden="true"
                            />
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
                            &nbsp; My Products
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/Create">
                            <i className="fa fa-pencil" aria-hidden="true" />
                            &nbsp; Create
                          </a>
                        </li>
                       
                        <li>
                          <a className="dropdown-item" href="/adblogs">
                            <i className="fa fa-file" aria-hidden="true" />
                            &nbsp; Blogs
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="/allwishesad">
                            <i className="fa fa-bookmark" aria-hidden="true" />
                            &nbsp; WishListes
                          </a>
                        </li>
                      </>
                    )}
                    {isManufacturer && !isAdmin && (
                      <>
                        <li>
                          <a className="dropdown-item" href="/manuprof">
                            <i className="fas fa-user" aria-hidden="true" />
                            &nbsp; My Profile
                          </a>
                        </li>
                      </>
                    )}

                    {isClient && token && (
                      <>
                        <a className="dropdown-item" href="/wish">
                          <i className="fa fa-heart" aria-hidden="true"></i>
                          &nbsp; Wishlist
                        </a>
                      </>
                    )}
                    {isSeller && (
                      <>
                   
                        <a className="dropdown-item" href="/clt">
                          <i className="fa fa-archive" aria-hidden="true" />
                          &nbsp; My Products
                        </a>
                        <li>
                          <a className="dropdown-item" href="/Create">
                            <i className="fa fa-pencil" aria-hidden="true" />
                            &nbsp; Create
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/blog">
                            <i className="fa fa-pencil" aria-hidden="true" />
                            &nbsp; Blogs
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/adblogs">
                            <i className="fa fa-file" aria-hidden="true" />
                            &nbsp; Blogs & Rates
                          </a>
                        </li>
                      </>
                    )}
                    {!isAdmin && !isManufacturer && (
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
