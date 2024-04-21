import React, { useEffect, useMemo, useState } from "react";
import "./ClientProfile.css";
import { GetAllOff } from "../../apis/OfferApi";
import Cltoff from "./Cltoff";
import { CurrentUser } from "../../apis/UserApi";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

const ClientProfile = () => {
  const [offer, setOffer] = useState([]);
  const [user, setUser] = useState({});
  const [useroffers, setUseroffer] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [alldeve, setAlldeve] = useState({});

  const isOffer = async () => {
    const oflg = await GetAllOff();
    setOffer(oflg);
    setLoading(false); // Set loading to false once data is fetched
  };

  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUserOffers = useMemo(() => {
    return useroffers.filter((el) =>
      el.prjectname.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [useroffers, searchTerm]);

  useEffect(() => {
    isOffer();
    isLoggedIn();
    setUseroffer(offer.filter((el) => el.createdbyId === user._id));
  }, [user._id, offer]);

  return (
    <div className="mt-5">
      <section id="">
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
                <Cltoff off={el} key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ClientProfile;
