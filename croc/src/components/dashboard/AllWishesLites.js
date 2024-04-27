import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { GetAllWishes } from "../../apis/WishApi";
import SideBar from "./SideBar";

const AllWishesLites = () => {
  const [wishes, setWishes] = useState([]);

  const isWishes = async () => {
    const uslg = await GetAllWishes();
    setWishes(uslg);
  };

  useEffect(() => {
    isWishes();
  }, []);
  return (
    <div>
      <div className="mdd">
        <SideBar />

        <div className="content-wrapper ">
          <div className="card cdr w3-hover-shadow ml-1 row">
            <div className="card-header">
              <h5 className="card-title">All WishListes</h5><br/>
              <div className="card-tools"></div>
            </div>
            <div className="card-body">
              <Table bordered hover>
                <thead className="">
                  <tr>
                    <th>Product</th>

                    <th>Maker</th>
                    <th>Price </th>
                  </tr>
                </thead>
                <tbody className="">
                  {wishes.map((el) => (
                    <tr>
                      <td>{el.prodname}</td>
                      <td>{el.brande}</td>
                      <td>{el.price} TND</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllWishesLites;
