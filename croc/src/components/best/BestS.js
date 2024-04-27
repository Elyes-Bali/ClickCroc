import React, { useEffect, useState } from "react";
import "./BestS.css";
import { GetAllOff } from "../../apis/OfferApi";
import ItemCard from "../itemCard/ItemCard";

const BestS = () => {
  const [listprods, setListprods] = useState([]);

  const fetchProducts = async () => {
    const allProds = await GetAllOff();
    // Sort products based on creation date in descending order
    const sortedProds = allProds.sort((a, b) => new Date(b.date) - new Date(a.date));
    // Slice the array to get the last 3 products
    const last3Prods = sortedProds.slice(0, 3);
    setListprods(last3Prods);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="col-md-9 mb-5">
      <div className="row">
        <div className="row itemcardes">
        <h1 className="display-6 text-center mb-4">
            Recent <b>Products</b>
          </h1>
          {listprods.map((el) => (
            <ItemCard key={el.id} dev={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestS;
