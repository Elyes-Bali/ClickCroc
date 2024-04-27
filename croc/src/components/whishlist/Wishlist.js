import React, { useEffect, useState } from "react";
import "./Wishlist.css";
import { GetAllOff } from "../../apis/OfferApi";
import { CurrentUser } from "../../apis/UserApi";
import { GetAllWishes } from "../../apis/WishApi";
import { Button, Carousel } from "react-bootstrap";


import axios from "axios";
import Footer from "../screens/Footer/Footer";
const Wishlist = () => {
  const [wish, setWish] = useState([]);
  const [userwishes, setUserwishes] = useState([]);
  const [offers, setUserOffers] = useState([]);
  const [useroffers, setOffers] = useState([]);
  const [user, setUser] = useState({});

  const isWish = async () => {
    const oflg = await GetAllWishes();
    setWish(oflg);
  };

  const isOffer = async () => {
    const oflg = await GetAllOff();
    setUserOffers(oflg);
  };
  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
  };

  const hundleDelete = async (wishId) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      await axios.delete(`/api/wish/delwish/${wishId}`, config);
      // Remove the deleted wish from the state
      setWish(wish.filter((el) => el._id !== wishId));
    } catch (error) {
      console.error("Error deleting wish:", error);
    }
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
  }, [user._id, offers]);
  console.log(userwishes);
  console.log(user);
  console.log(wish);
  return (
    <div className="">
      <div className="main">
        <div className="container wishlist1  row d-flex ">
          <h1 className="cart-heading ">My WishList</h1>
          {userwishes.length === 0 ? (
            <div className="empty-cart">
              <p>Your WishList is empty.</p>
            </div>
          ) : (
            userwishes.map((el) => (
              <div className="cart-item" key={el._id}>
                <div className="item-carousel">
                  {el.images && el.images.length > 0 && (
                    <Carousel>
                      {el.images.map((img, index) => (
                        <Carousel.Item key={index}>
                          <img
                            className="d-block w-100"
                            src={img.filePath}
                            alt={`Slide ${index + 1}`}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  )}
                </div>
                <div className="item-details">
                  <p className="item-name">{el.prodname}</p>
                  <p className="item-price">Price: {el.price} TND</p>
                  <p className="item-quantity">Brand: {el.brande}</p>
                </div>
                <div className="item-actions">
                  <Button
                    className="remove-button btn-danger "
                    onClick={() => hundleDelete(el._id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))
          )}
          {/* <div className="cart-total">
            <hr />
            <p>Total: TND</p>
            <button className="checkout-button">Checkout</button>
          </div> */}
        </div>
      </div>
      <div className="ftwish">
      <Footer/>
      </div>
    </div>
  );
};
export default Wishlist;
