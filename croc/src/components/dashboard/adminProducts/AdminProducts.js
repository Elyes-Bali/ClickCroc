import React, { useEffect, useMemo, useState } from "react";
import { GetAllOff } from "../../../apis/OfferApi";
import AdProd from "./adProd";
import "./AdminProd.css"
import SideBar from "../SideBar";
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

const AdminProducts = () => {
  const [offer, setOffer] = useState([]);
  const [user, setUser] = useState({});

  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [alldeve, setAlldeve] = useState({});

  const isOffer = async () => {
    const oflg = await GetAllOff();
    setOffer(oflg);
    setLoading(false); // Set loading to false once data is fetched
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUserOffers = useMemo(() => {
    return offer.filter((el) =>
      el.prjectname.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [offer, searchTerm]);

  useEffect(() => {
    isOffer();
  
  }, [offer]);
  return (
    <div className="mt-5 ">
      <SideBar />
      <section className="adminprods">
        <div className="shadow">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search By Product Name"
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
          {loading ? ( // Show loader if loading is true
            <Loader />
          ) : (
            <div className="container card-container">
              {filteredUserOffers.map((el, index) => (
                <AdProd off={el} key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminProducts;
