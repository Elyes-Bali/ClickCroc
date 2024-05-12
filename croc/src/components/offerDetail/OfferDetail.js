import React, { useEffect, useRef, useState } from "react";
import "./OfferDetail.css";
import { useLocation } from "react-router-dom";
import { CurrentUser, GetAllUsers } from "../../apis/UserApi";
import { ApplyRate, GetAllOff, Getoff } from "../../apis/OfferApi";
import Footer from "../screens/Footer/Footer";
import { Carousel } from "react-bootstrap";
import { GetAllCom } from "../../apis/Comments";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import Comments from "./Comments";
import { GetAllWishes } from "../../apis/WishApi";

const OfferDetail = ({ ping, setPing }) => {
  const location = useLocation();
  const { dev } = location.state;
  const isClient = localStorage.getItem("isClient");

  const [offer, setOffer] = useState([]);
  const [wishes, setWishes] = useState([]);
  const [useroffer, setUseroffer] = useState([]);
  const hasScrolledRef = useRef(false);
  const [user, setUser] = useState({});
  const [Allusers, setAllUser] = useState({});
  const [test, setTest] = useState(false);
  const token = localStorage.getItem("token");
  const [userRating, setUserRating] = useState(0);
  const [avgrate, setAvgrate] = useState({
    totalRates: 1,
  });
  const [userwishes, setUserwishes] = useState([]);

  const [wish, setWish] = useState({
    ownerId: user._id,
    productId: dev._id,
    prodname: dev.prjectname,
    brande: dev.brand,
    price: dev.budget,
    images: dev.images,
    rates: dev.rating,
  });

  const [rates, setRates] = useState({
    rate: 0.01,
    userId: "",
  });
  const [create, setCreate] = useState({
    name: "",
    comment: "",
    devId: "",
    writedbyid: "",
  });
  const [comm, setComm] = useState([]);

  const isOffer = async () => {
    const oflg = await GetAllOff();
    setOffer(oflg);
  };

  const isUsers = async () => {
    const users = await GetAllUsers();
    setAllUser(users);
  };

  const isWishes = async () => {
    const wishing = await GetAllWishes();
    setWishes(wishing);
  };

  const isUser = async () => {
    const AllUser = await CurrentUser();

    setUser(AllUser.data.user);
    setCreate({
      ...create,
      name: AllUser.data.user.username,
      writedbyid: AllUser.data.user._id,
      devId: dev._id,
    });
    setRates({ ...rates, userId: AllUser.data.user._id });
    isUseroffer(user._id);
  };

  const isUseroffer = async (id) => {
    const userLg = await Getoff(id);
    setUseroffer(userLg);
    useroffer.filter((el) => {
      if (el.donebyId === dev._id) {
        setTest(true);
      }
    });
  };

  const isComment = async () => {
    const userLg = await GetAllCom();
    setComm(userLg);
  };

  const handleWish = async () => {
    //Object DeStructuring

    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/api/wish/create", wish, config);
      setWish({ ...wish, ownerId: user._id });
      // alert(`${res.data.msg}`);
    } catch (error) {
      console.log(error);
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to Your WishList",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleSubmit = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/api/comment/addcom", create, config);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  const handelCheck = (e) => {
    e.preventDefault();

    if (!create.comment) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "Please write something !",
      });
    } else {
      handleSubmit();
      setCreate({
        comment: "",
      });
    }
  };
  let totalRate = 0;

  // Iterate over each rating and sum up the rates
  dev.rating.forEach((rating) => {
    totalRate += rating.rate;
  });

  // Calculate the average rate
  const averageRate = totalRate / dev.rating.length;

  const handleUpdate = async () => {
    // Apply rate
    ApplyRate(dev._id, rates);
    // dev.totalRates=averageRate;

    // await hundelUpdate();
    // Reset userRating
    setUserRating(0);

    // Update ping state
    setPing(!ping);
    // Show success message
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your data has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  // Function to handle star rating click
  const handleRatingClick = async (rating) => {
    // Update userRating state immediately
    setUserRating(rating);
    // Update rates state with userRating
    setRates((prevRates) => ({ ...prevRates, rate: rating }));
  };
  const hundelUpdate = async () => {
    dev.totalRates = averageRate;
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/offer/edite/${dev._id}`, dev, config);
  };

  useEffect(() => {
    isOffer();
    isUser();
    isUsers();
    isComment();
    isWishes();
    setUserwishes(wishes.filter((el) => el.ownerId === user._id));
    if (!hasScrolledRef.current) {
      window.scrollTo(0, 0);
      hasScrolledRef.current = true;
    }
    console.log(rates);
  }, [user.length,wishes.length ]);

  console.log(userwishes);
  return (
    <div>
      <section>
        <div className="container shadow my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <div className="box-container w-75">
                {dev.images && dev.images.length > 0 && (
                  <Carousel>
                    {dev.images.map((img, index) => (
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
            </div>
            <div className="col-md-6">
              <>
              {!userwishes.some((el) => el.productId === dev._id) && (
  <a className="contact-btn" onClick={handleWish}>
    <i className="fa fa-bookmark" aria-hidden="true">
      &nbsp; WishList
    </i>
  </a>
)}

              </>
              <hr />

              <br />
              <br />
              <h3 className="fs-5 mb-2">
                <b>Product:</b> {dev.prjectname}
                {dev.ownerId}
              </h3>
              <h3 className="fs-5 mb-2">
                <b>Family:</b> {dev.duree}
              </h3>
              <h3 className="fs-5 mb-2">
                <b>Prix: </b>
                {dev.budget}
              </h3>
              <h3 className="fs-5 mb-2">
                <b>Date de publication:</b> {dev.date.substring(0, 10)}
              </h3>

              <h3 className="fs-5 mb-2">
                <b>Gamme:</b> {dev?.gamme}
              </h3>
              <h3 className="fs-5 mb-2">
                <b>Categorie:</b> {dev?.colors}
              </h3>
              <h3 className="fs-5 mb-2">
                <b>Product make: </b> {dev?.brand}
              </h3>
              <br />
              <h3 className="fs-5 mb-2">
                <b>
                  Adress <i class="fa fa-map-marker" aria-hidden="true"></i> :
                </b>{" "}
                {dev?.adress}
              </h3>
              <br />

              <hr />
              <p className="lead mb-4">{dev.detail}</p>
              <br />
              {isClient &&
              <>
              <h2>Would you like to Rate the Product :</h2>
              <div>
                <div>
                  <span
                    onClick={() => handleRatingClick(1)}
                    style={{
                      cursor: "pointer",
                      fontSize: "24px",
                      marginRight: "10px",
                      color: userRating >= 1 ? "orange" : "gray", // Color the stars based on rating
                    }}
                  >
                    {userRating >= 1 ? "★" : "☆"}
                  </span>
                  <span
                    onClick={() => handleRatingClick(2)}
                    style={{
                      cursor: "pointer",
                      fontSize: "24px",
                      marginRight: "10px",
                      color: userRating >= 2 ? "orange" : "gray", // Color the stars based on rating
                    }}
                  >
                    {userRating >= 2 ? "★" : "☆"}
                  </span>
                  <span
                    onClick={() => handleRatingClick(3)}
                    style={{
                      cursor: "pointer",
                      fontSize: "24px",
                      marginRight: "10px",
                      color: userRating >= 3 ? "orange" : "gray", // Color the stars based on rating
                    }}
                  >
                    {userRating >= 3 ? "★" : "☆"}
                  </span>
                  <span
                    onClick={() => handleRatingClick(4)}
                    style={{
                      cursor: "pointer",
                      fontSize: "24px",
                      marginRight: "10px",
                      color: userRating >= 4 ? "orange" : "gray", // Color the stars based on rating
                    }}
                  >
                    {userRating >= 4 ? "★" : "☆"}
                  </span>
                  <span
                    onClick={() => handleRatingClick(5)}
                    style={{
                      cursor: "pointer",
                      fontSize: "24px",
                      color: userRating >= 5 ? "orange" : "gray", // Color the stars based on rating
                    }}
                  >
                    {userRating >= 5 ? "★" : "☆"}
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-danger w-25 mt-4 rounded-pill"
                onClick={handleUpdate}
              >
                Submit
              </button>
              </>
              }
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ml-5 mt-5 row">
          <h2 className="mb-4">
            <b>Comment Section</b>
          </h2>
          <div className="comments">
            <div className="comment">
              {comm
                .filter((el) => el.devId === dev._id)
                .map((el) => (
                  <>
                    <div className="comment-author">
                      <div className="comment-author-details">
                        <span className="comment-author-name">
                          {el.name}&nbsp;
                        </span>
                        <span className="comment-date">
                          Posted on {el.date.substring(0, 10)}
                        </span>
                      </div>
                    </div>
                    <div className="comment-content">
                      <p>{el.comment}</p>
                      <div className="crded">
                        {" "}
                        <Comments com={el} />
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
          <>
            <form className="comment-form">
              <div className="form-group w-75">
                <textarea
                  onChange={(e) =>
                    setCreate({ ...create, comment: e.target.value })
                  }
                  className="form-control"
                  placeholder="Write your comment here..."
                  rows="3"
                />
              </div>
              <Button onClick={handelCheck} variant="success">
                Send
              </Button>
            </form>
          </>
        </div>
      </section>
      <div className="detailfooter">
        <Footer />
      </div>
    </div>
  );
};

export default OfferDetail;
