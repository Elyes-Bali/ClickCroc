import React, { useEffect, useMemo, useState } from "react";
import { CurrentUser } from "../../../apis/UserApi";
import { GetAllBlogs } from "../../../apis/BlogApi";
import AdminCltoff from "./AdminCltoff";

const AdminBlogs = () => {
    const [offer, setOffer] = useState([]);
    const [user, setUser] = useState({});
    const [useroffers, setUseroffer] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // State for search term
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [alldeve, setAlldeve] = useState({});
  
    const isOffer = async () => {
      const oflg = await GetAllBlogs();
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
      return useroffers?.filter((el) =>
        el.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [useroffers, searchTerm]);
  
    useEffect(() => {
      isOffer();
      isLoggedIn();
      setUseroffer(offer.filter((el) => el.ownerId === user._id));
    }, [user._id, offer]);
  
    const Loader = () => {
        return (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        );
      };
  return (
    <div className="mt-5">
      <section id="">
        <div className="">
          <div className="search-container adofs col-6 col-sm-2 col-md-7">
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
            <div className="container adofc">
              {filteredUserOffers.map((el, index) => (
                <AdminCltoff off={el} key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default AdminBlogs