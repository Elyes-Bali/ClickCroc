import {
  Avatar,
  Badge,
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import "./CreateOffers.css";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../../../apis/UserApi";
import {
  GetAllBrand,
  GetAllCateg,
  GetAllFamily,
  GetAllGamme,
} from "../../../apis/Category";

const CreateOffers = () => {
  const isAdmin = localStorage.getItem("isAdmin");

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [create, setCreate] = useState({
    createdbyId: "",
    createdbyName: "",
    prjectname: "",
    budget: "",
    detail: "",
    duree: "",
    colors: "",
    brand: "",
    adress: "",
    gamme: "",

    images: [],
  });

  const [category, setCategory] = useState([]);
  const [family, setFamily] = useState([]);
  const [gamme, setGamme] = useState([]);
  const [brands, setBrand] = useState([]);

  const isCatgory = async () => {
    const uslg = await GetAllCateg();
    setCategory(uslg);
  };
  const isFamily = async () => {
    const uslg = await GetAllFamily();
    setFamily(uslg);
  };
  const isGamme = async () => {
    const uslg = await GetAllGamme();
    setGamme(uslg);
  };
  const isBrand = async () => {
    const uslg = await GetAllBrand();
    setBrand(uslg);
  };
  console.log(category);
  const [uploadComplete, setUploadComplete] = useState(false); // Track upload completion

  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
    setCreate({
      ...create,
      createdbyId: userLg.data.user._id,
      createdbyName: userLg.data.user.username,
    });
  };

  const [multipleFiles, setMultipleFiles] = useState();

  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
  };

  useEffect(() => {
    isLoggedIn();
    isCatgory();
    isFamily();
    isGamme();
    isBrand();
  }, []);

  const uploadFileHandler1 = async () => {
    try {
      setCreate({ ...create, images: [] });
      const bodyFormData = new FormData();
      for (let i = 0; i < multipleFiles.length; i++) {
        bodyFormData.append("files", multipleFiles[i]);
      }
      const res = await axios.post(
        "http://localhost:5000/api/offer/upload/multipesfiles",
        bodyFormData
      );
      setCreate({ ...create, images: res.data.imgs });
      setUploadComplete(true); // Set upload completion flag
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const res = await axios.post("/api/offer/create", create, config);
      alert(`${res.data.msg}`);
      navigate("/market");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      !create.prjectname ||
      !create.budget ||
      !create.detail ||
      !create.duree ||
      !create.brand ||
      !create.images ||
      !create.adress ||
      !create.gamme
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "Please check your informations !",
      });
    } else {
      await handleSubmit();
    }
  };

  const format = (val) => `TND ` + val;
  const parse = (val) => val.replace(/^\$/, "");
  return (
    <div className="body">
      <div className="sidebare">
        {/* Sidebar Content Goes Here */}
        <div className="sidebare-top">
          <div className="sidebare-center">
            <Avatar
              className="ava"
              cursor="pointer"
              name={user?.username}
              src={user?.pic}
            />
            <br />
          </div>
          <div className="">
            <Badge ml="1" fontSize="1.5em" colorScheme="green">
              {user?.username}
            </Badge>
          </div>
          {isAdmin && (
            <ul>
              <li className="list-item mt-5">
                <a href="/dashboard" className="nav-link">
                  <i
                    style={{ fontSize: "20px" }}
                    className="list-item-icon fas fa-home"
                  />
                  <span className="list-item-text">HOME</span>
                </a>
              </li>

              <li className="list-item">
                <a href="/allAdProducts" className="nav-link">
                  <i class="fa fa-product-hunt" aria-hidden="true" /> &nbsp;
                  <span className="list-item-text">Products</span>
                </a>
              </li>
              <li className="list-item">
                <a href="/alloff" className="nav-link">
                  <i className="list-item-icon fas fa-database" />
                  <span className="list-item-text">Users</span>
                </a>
              </li>

              <li className="list-item">
                <a href="/messdb" className="nav-link">
                  <i className="list-item-icon far fa-envelope" />
                  <span className="list-item-text">MAILBOX</span>
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
      <section id="Create">
        <div className="formgroup col-sm-8 offset-sm-4 text-center">
          <br />
          <div className="container back shadow my-5 py-5">
            <Form.Group as={Col} controlId="offer">
              <b className="d-flex justify-content-center">
                Describe your product in a few words
              </b>
              <br />
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                placeholder="e.g., Product Name"
                value={create?.prjectname}
                onChange={(e) =>
                  setCreate({ ...create, prjectname: e.target.value })
                }
              />
              <br />
              <Form.Label>Price</Form.Label>
              <div className="input-with-currency">
                <span className="currency">TND</span>
                <Form.Control
                  className="form-control"
                  type="number"
                  placeholder="Price"
                  value={create?.budget}
                  onChange={(e) =>
                    setCreate({ ...create, budget: e.target.value })
                  }
                />
              </div>

              <br />
              <div>
                <Form.Label>Family</Form.Label>
                <select
                  className="form-control"
                  onChange={(e) =>
                    setCreate({ ...create, duree: e.target.value })
                  }
                  name="duree"
                >
                  <option>--SELECT--</option>
                  {family.map((cat, index) => (
                    <option key={cat._id} value={cat.family}>
                      {cat.family}
                    </option>
                  ))}
                </select>
              </div>

              <br />

              <div>
                <Form.Label>Categories</Form.Label>
                <select
                  className="form-control"
                  onChange={(e) =>
                    setCreate({ ...create, colors: e.target.value })
                  }
                  name="colors"
                >
                  <option>--SELECT--</option>
                  {category.map((cat, index) => (
                    <option key={cat._id} value={cat.category}>
                      {cat.category}
                    </option>
                  ))}
                </select>
              </div>

              <br />

              <br />
              <div>
                <Form.Label>Gamme</Form.Label>
                <select
                  className="form-control"
                  onChange={(e) =>
                    setCreate({ ...create, gamme: e.target.value })
                  }
                  name="gamme"
                >
                  <option>--SELECT--</option>
                  {gamme.map((cat, index) => (
                    <option key={cat._id} value={cat.gamme}>
                      {cat.gamme}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Form.Label>Brand</Form.Label>
                <select
                  className="form-control"
                  onChange={(e) =>
                    setCreate({ ...create, brand: e.target.value })
                  }
                  name="brand"
                >
                  <option>--SELECT--</option>
                  {brands.map((cat, index) => (
                    <option key={cat._id} value={cat.brand}>
                      {cat.brand}
                    </option>
                  ))}
                </select>
              </div>

              <br />

              <Form.Label>Product Area</Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                placeholder="Adress?"
                value={create?.adress}
                onChange={(e) =>
                  setCreate({ ...create, adress: e.target.value })
                }
              />

              <br />
              <Form.Label>Describe your product</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={create?.detail}
                onChange={(e) =>
                  setCreate({ ...create, detail: e.target.value })
                }
                placeholder="Describe your product precisely"
              />
              <br />
              <input
                type="file"
                name="file"
                onChange={(e) => MultipleFileChange(e)}
                className="myim"
                multiple
              />
              <br />
              <button
                className="btn btn-primary rounded-pill"
                type="button"
                onClick={uploadFileHandler1}
              >
                Upload Files
              </button>
            </Form.Group>
            <br />
            <Link to="/market">
              <Button
                className="btn btn-danger me-4 rounded-pill px-4 py-2"
                disabled={!uploadComplete} // Disable button until upload is complete
                onClick={handleFormSubmit}
                href="/market"
              >
                <i className="fa fa-check px-1" aria-hidden="true"></i>Send
              </Button>
            </Link>
            {isAdmin && (
              <a
                type="submit"
                className="btn btn-primary me-4 rounded-pill px-4 py-2 h-25"
                href="/createCategory"
              >
                Add Params
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateOffers;
