import React, { useEffect, useRef, useState } from "react";
import "./OfferDetail.css";
import { useLocation } from "react-router-dom";
import { AspectRatio, Badge, Box, Button } from "@chakra-ui/react";
import { CurrentUser, GetAllUsers } from "../../apis/UserApi";
import { GetAllOff, Getoff } from "../../apis/OfferApi";
import Footer from "../footer/Footer";

const OfferDetail = () => {
  const location = useLocation();
  const { dev } = location.state;
  // console.log(location);
  const [offer, setOffer] = useState([]);
  const [useroffer, setUseroffer] = useState([]);
  const hasScrolledRef = useRef(false);
  const [user, setUser] = useState({});
  const [Allusers, setAllUser] = useState({});
  const [test, setTest] = useState(false);
  const token = localStorage.getItem("token");

  const isOffer = async () => {
    const oflg = await GetAllOff();
    setOffer(oflg);
  };

  const isUsers = async () => {
    const users = await GetAllUsers();
    setAllUser(users);
  };

  const [create, setCreate] = useState({
    adress: "",
    zip: "",
    city: "",
    state: "",
    email: "",
  });

  const isUser = async () => {
    const AllUser = await CurrentUser();

    setUser(AllUser.data.user);

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

    Allusers.filter((el) => {
      if (el._id === dev.createdbyId) {
        setCreate({
          ...create,
          adress: el.adress,
          zip: el.zip,
          city: el.city,
          state: el.state,
          email: el.email,
        });
      }
    });
  };
  console.log(create);

  console.log(Allusers);
  useEffect(() => {
    isOffer();
    isUser();
    isUsers();
    if (!hasScrolledRef.current) {
      window.scrollTo(0, 0);
      hasScrolledRef.current = true;
    }
  }, [user]);
  return (
    <div>
      <section>
        <div className="container shadow my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <div className="box-container">
                {dev.images.map((el) => (
                  <div className=" w-75 mt-5">
                    <img src={el.filePath} alt />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <br />
              <br />
              <br />
              <br />
              <h3 className="fs-5 mb-2"><b>Product:</b> {dev.prjectname}</h3>
              <h3 className="fs-5 mb-2"><b>Type:</b> {dev.duree}</h3>
              <h3 className="fs-5 mb-2"><b>Prix: </b>{dev.budget}</h3>
              <h3 className="fs-5 mb-2">
                <b>Date de publication:</b> {dev.date.substring(0, 10)}
              </h3>
              <h3 className="fs-5 mb-2"><b>Propriétaire:</b> {dev.createdbyName}</h3>
              <h3 className="fs-5 mb-2"><b>Color:</b> {dev?.colors}</h3>
              <h3 className="fs-5 mb-2"><b>Brand:</b> {dev?.brand}</h3>
             

              <hr />
              <p className="lead mb-4">{dev.detail}</p>
              <br />
        <Badge variant="outline" colorScheme="blue">
          <form action={`mailto:${create.email}`}>
            <Button type="submit" variant="primary">
              <i className="fas fa-paper-plane" />
              {""}
              Contacter le vendeur
            </Button>
          </form>
        </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="detailing" id="">
        <table class="table">
          
          <thead>
            <tr>
              <th scope="col">Adresse</th>
              <th scope="col">Ville</th>
              <th scope="col">délégation</th>
              <th scope="col">Zip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{create.adress}</td>
              <td>{create.city}</td>
              <td>{create.state}</td>
              <td>{create.zip}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default OfferDetail;
