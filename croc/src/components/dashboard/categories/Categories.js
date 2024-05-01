import React, { useState } from "react";
import Swal from "sweetalert2";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import SideBar from "../SideBar";
import "./Categorie.css";
const Categories = () => {
  const [categorie, setCategory] = useState({
    category: "",
  });
  const [famille, setFamily] = useState({
    family: "",
  });
  const [gammes, setGamme] = useState({
    gamme: "",
  });

  const handleCateg = async () => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const res = await axios.post("/api/categ/create", categorie, config);
      alert("success");
      setCategory({
        category: "",
      });
      //   navigate("/market");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleFamily = async () => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const res = await axios.post("/api/family/create", famille, config);
      alert("success");
      setFamily({
        family: "",
      });
      //   navigate("/market");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleGamme = async () => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const res = await axios.post("/api/gamme/create", gammes, config);
      alert("success");
      setGamme({
        gamme: "",
      });
      //   navigate("/market");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="mdd ">
      <SideBar />
      <div className="fam">
      <div className="categories row w-75 shadow ">
        <Form.Group
          as={Col}
          controlId="categ"
          className="col-6 col-sm-2 col-md-7 row"
        >
          <b className="d-flex justify-content-center mt-5">Add Category</b>
          <br />
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            className="form-control mb-2"
            type="text"
            placeholder="New Category"
            value={categorie?.category}
            onChange={(e) =>
              setCategory({ ...categorie, category: e.target.value })
            }
          />
               <Button
          type="submit"
          className="btn btn-danger me-4 rounded-pill px-4 py-2 categbtn"
          onClick={handleCateg}
          // href="/market"
        >
          <i className="fa fa-check px-1" aria-hidden="true"></i>ADD
        </Button>
        </Form.Group>
   

        <Form.Group
          as={Col}
          controlId="family"
          className="col-6 col-sm-2 col-md-7 d-flex row"
        >
          <b className="d-flex justify-content-center">Add Family</b>
          <br />
          <Form.Label>Family Name</Form.Label>
          <Form.Control
            className="form-control mb-2"
            type="text"
            placeholder="New Family"
            value={famille?.family}
            onChange={(e) => setFamily({ ...famille, family: e.target.value })}
          />
          <Button
          className="btn btn-danger me-4 rounded-pill px-4 py-2 categbtn"
          onClick={handleFamily}
          // href="/market"
        >
          <i className="fa fa-check px-1" aria-hidden="true"></i>ADD
        </Button>
        </Form.Group>
        

        <Form.Group
          as={Col}
          controlId="gamme"
          className="col-6 col-sm-2 col-md-7 row"
        >
          <b className="d-flex justify-content-center">Add Gamme</b>
          <br />
          <Form.Label>Gamme Name</Form.Label>
          <Form.Control
            className="form-control mb-2"
            type="text"
            placeholder="New Gamme"
            value={gammes?.gamme}
            onChange={(e) => setGamme({ ...gammes, gamme: e.target.value })}
          />
          <Button
          className="btn btn-danger me-4 rounded-pill px-4 py-2 categbtn"
          onClick={handleGamme}
          // href="/market"
        >
          <i className="fa fa-check px-1 " aria-hidden="true"></i>ADD
        </Button>
        </Form.Group>
        <a type="submit" href="/allcategories" className="btn btn-dark">All Params</a>
      </div>
      </div>
    </div>
  );
};

export default Categories;
