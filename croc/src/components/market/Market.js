import React, { useEffect, useState, useRef } from "react";
import ItemCard from "../../components/itemCard/ItemCard";
import "./Market.css";

import { CurrentUser } from "../../apis/UserApi";

import { Card, CardGroup } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link, Navigate } from "react-router-dom";
import { Input, Button } from "@chakra-ui/react";
import { GetAllOff } from "../../apis/OfferApi";
import Footer from "../screens/Footer/Footer";

const Market = () => {
  const [listdev, setListdev] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  

  const isDevs = async () => {
    const AllDev = await GetAllOff();

    setListdev(AllDev);
  };
  const isUser = async () => {
    const AllUser = await CurrentUser();

    setUser(AllUser.data.user);
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
    const searchFruits = listdev.filter((el) => {
      return el.prjectname.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredResults(searchFruits);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listdev
    ?.filter((e) => e._id !== user._id)
    .slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleBrandFilter = (e) => {
    const selectedBrand = e.target.value;
    if (selectedBrand === "") {
      setFilteredResults([]);
    } else {
      const filteredByBrand = listdev.filter(
        (item) => item.brand === selectedBrand
      );
      setFilteredResults(filteredByBrand);
    }
  };

  const currentItemsToDisplay =
    filteredResults.length > 0 ? filteredResults : currentItems;

  const [selectedPrice, setSelectedPrice] = useState(0);

  const handlePriceFilter = (e) => {
    const price = parseInt(e.target.value);
    setSelectedPrice(price);
    const filteredByPrice = listdev.filter((item) => item.budget >= price);
    if (filteredByPrice.length === 0) {
      setFilteredResults([]);
    } else {
      setFilteredResults(filteredByPrice);
    }
  };


  useEffect(() => {
    isDevs();
    isUser();
  }, []);
  return (
    <div id="cmnt mb-5">
  <div className="mainSection">
    <div className="contentBox">
      <h1 className="text-bold">Welcome to the Market</h1>
      <p>
        A world of products at your fingertips{" "}
        <i className="fa fa-diamond" aria-hidden="true"></i>
        <br />
      </p>

      <div>
        <div className="btnn rounded-pill ">
          <Input
            icon="search"
            placeholder="Search..."
            onChange={handleSearch}
            value={searchInput}
          />
        </div>
      </div>
      <CardGroup
        className="cardres "
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
    </div>
    <div className="imgContainer">
      <img src="/images/market1.png" alt="home" />
    </div>
  </div>

  <div className="container py-4">
    <div className="row">
      <div className="col-12 mb-5 background-container">
        <h1 className="display-6 fw-bolder text-left">Products </h1>

        <br />
        <hr />
      </div>
    </div>
  </div>
  <section>
    <div className="container my-2 py-2">
      <div className="row">
        <div className="container bbg-white shadow col-md-3">
          <div className=" free ctr">
            <p className="mb-3">
              <b>Shop by Brand</b>{" "}
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </p>
            <label htmlFor="category">Brands:</label>
            <select id="category" onChange={handleBrandFilter}>
              <option value="">All</option>
              <option value="Geant">GEANT</option>
              <option value="Monoprix">MONOPRIX</option>
              <option value="Carrefour">CARREFOUR</option>
              <option value="Mg">MG</option>
              {/* Add more options as needed */}
            </select>
            <br />
            <p className="mb-3 mt-3">
              <b>Shop by Price</b>{" "}
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </p>
            <label htmlFor="price">Price Range:</label>
            <br />
            <input
              type="range"
              id="price"
              min="0"
              max="1000"
              onChange={handlePriceFilter}
            />
            <div>Selected Price Range: {selectedPrice}TND</div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="row">
              {selectedPrice > 0 && filteredResults.length === 0 ? (
                <p>No products found within the selected price range.</p>
              ) : currentItemsToDisplay.length === 0 ? (
                <p>No products found for the selected brand.</p>
              ) : (
                currentItemsToDisplay.map((el) => (
                  <div key={el._id} className="col-md-4 mb-4">
                    <ItemCard dev={el} use={user._id}/>
                  </div>
                ))
              )}
            </div>
          </div>
          {/* Pagination */}
          <div className="d-flex justify-content-center mb-5">
            <ul className="pagination">
              {Array.from({
                length: Math.ceil(listdev.length / itemsPerPage),
              }).map((_, index) => (
                <li key={index} className="page-item">
                  <Button
                    className="page-link"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</div>

  );
};

export default Market;
