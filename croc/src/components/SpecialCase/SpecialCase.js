import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Special.css";
import { GetAllOff } from "../../apis/OfferApi";
import { Card, CardGroup } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const SpecialCase = () => {
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

  useEffect(() => {
    isOff();
  }, []);
  return (
    <nav className="">
      <div className="container navbar-container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-logo">
          Your Logo
        </Link>
        {/* search filter here  */}
        <div className="searcher">
          <i className="fa fa-search search-icon" aria-hidden="true"></i>
          <input
            className=" "
            type="text"
            onChange={handleSearch}
            value={searchInput}
            placeholder="Search your products here"
          />
        </div>
        <CardGroup
          className="resultres "
          itemsPerRow={3}
          style={{ marginTop: 20 }}
        >
          {searchInput &&
            filteredResults &&
            filteredResults.map((item) => {
              return (
                <Card>
                  <Link to={`/dev/${item._id}`} state={{ dev: item }}>
                    <CardHeader>{item.prjectname}</CardHeader>
                  </Link>
                </Card>
              );
            })}
        </CardGroup>

        <ul className="navbar-nav d-flex flex-row align-items-center">
          <li className="nav-item me-3">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to="/services" className="navbar-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SpecialCase;
