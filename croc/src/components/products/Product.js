import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Product.css";
import { ApplyOff, CurrentUser } from "../../apis/UserApi";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { GetAllOff } from "../../apis/OfferApi";
import { GetAllWishes } from "../../apis/WishApi";
import { Carousel } from "react-bootstrap";
import Wishlist from "../whishlist/Wishlist";


export const Product = ({ ping, setPing }) => {
  const [wish, setWish] = useState([]);
  const [userwishes, setUserwishes] = useState([]);
  const [offers, setUserOffers] = useState([]);
  const [useroffers, setOffers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const isWish = async () => {
    const oflg = await GetAllWishes();
    setWish(oflg);
    setLoading(false);
  };

  const isOffer = async () => {
    const oflg = await GetAllOff();
    setUserOffers(oflg);
  };
  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
  };
  useEffect(() => {
    isWish();
    isLoggedIn();
    isOffer();
    setUserwishes(wish.filter((el) => el.ownerId === user._id));
    setOffers(
      offers.filter((offer) => {
        // Find the corresponding wish for the offer
        const correspondingWish = userwishes.find(
          (wish) => wish.productId === offer._id
        );
        // Return true only if there's a corresponding wish
        return !!correspondingWish;
      })
    );
  }, [user._id, wish, offers]);
  console.log(useroffers);
  console.log(userwishes);
  return (
    <div className="backk mdd">
      <div className="container shadow my-5 frr">
        <div className="row justify-content-end">
          <div
            className="col-md-5 d-flex flex-column
               align-items-center text-white justify-content-center foss order-2"
          >
            <h1 className="display-4 fw-bolder text-black">Hello</h1>
            {/* {userwishes?.images?.map((el) => (
     <Wishlist dev={el} use={user._id}/>

    ))} */}
            <h1 className="mb-4 fw-bolder text-black">Thank You</h1>
          </div>
          <div className="col-md-7 p-5 clr">
            <form>
              <div class="mb-3 ">
                <label for="name" class="form-label">
                  Baby Name :
                </label>
                <input
                  placeholder="Name"
                  type="text"
                  class="form-control"
                  value={user?.babyname}
                  onChange={(e) =>
                    setUser({ ...user, babyname: e.target.value })
                  }
                />
              </div>
              
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Weight(kg) :
                </label>
                <input
                  placeholder="Weight"
                  type="double"
                  class="form-control"
                  value={user?.weight}
                  onChange={(e) => setUser({ ...user, weight: e.target.value })}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Age (Less than 1 : 1 month = 0.01) :
                </label>
                <input
                  placeholder="Age"
                  type="number"
                  class="form-control"
                  value={user?.age}
                  onChange={(e) => setUser({ ...user, age: e.target.value })}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Size (cm) :
                </label>
                <input
                  placeholder="Size"
                  type="number"
                  class="form-control"
                  value={user?.size}
                  onChange={(e) => setUser({ ...user, size: e.target.value })}
                />
              </div>

              <div>
                <label for="InputRole" class="form-label">
                  Gender :
                </label>
                <select
                  class="form-control"
                  name="role"
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
                >
                  <option>--SELECT--</option>
                  <option value="boy">Boy</option>
                  <option value="girl">Girl</option>
                </select>
              </div>

              <br />

              {/* 
              <button
                type="button"
                class="btn btn-danger w-100 mt-4 rounded-pill"
                onClick={hundelUpdate}
              >
                Register
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
