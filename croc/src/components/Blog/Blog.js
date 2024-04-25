import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Form } from "react-bootstrap";
import Swal from "sweetalert2";
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
import "./Blog.css";
import { CurrentUser } from "../../apis/UserApi";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin");

  const [blog, setBlog] = useState({
    title: "",
    content: "",
    ownerId: "",
    pic: "",
  });

  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
    setBlog({
        ...blog,
        ownerId: userLg.data.user._id,
      });
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/api/blog/upload",
      bodyFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    setBlog({ ...blog, pic: data });
  };

  const handleSubmit = async () => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const res = await axios.post("/api/blog/create", blog, config);
      alert(`${res.data.msg}`);
      navigate("/blog");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!blog.content || !blog.title || !blog.ownerId || !blog.pic) {
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

  useEffect(() => {
    isLoggedIn();
  }, []);
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
                <a href="/alluser" className="nav-link">
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
        <div className="formgroup  offset-sm-3 text-center">
          <br />
          <div className="container back  my-5 py-5">
            <Form.Group as={Col} controlId="offer">
            <div className="row">
              <b className="d-flex justify-content-center">
                Add Blog
              </b>
              <div className="col-md-3">
                <br />
                <br />
                <br />
                <h1 className="text-center text-bold">
                  Upload Your Blog Pic{" "}
                </h1>

                <div className="imggg">
                  {blog?.pic && (
                    <img
                      className="imgg"
                      alt="not fount"
                      width={"250px"}
                      src={`http://localhost:5000${blog?.pic}`}
                    />
                  )}
                  {!blog.pic && (
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4JvZuw_Q_yEggsD8I1qXrKlRP9mtf6MuwA&usqp=CAU" />
                  )}
                  <br />
                  {blog.pic && (
                    <button
                      className="btn btn-primary w-50 mt-4 rounded-pill"
                      onClick={(event) => {
                        setBlog({ ...blog, pic: "" });
                      }}
                    >
                      Delete
                    </button>
                  )}
                </div>

                <br />
                <br />
                <input
                  type="file"
                  className=" myimage blogger"
                  onChange={uploadFileHandler}
                />
              </div>
              
              <div className="container  col-md-6">

              
              <Form.Label>Title</Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                placeholder="Blog Title"
                value={blog?.title}
                onChange={(e) => setBlog({ ...blog, title: e.target.value })}
              />
              <br />

              <Form.Label>Content</Form.Label>
             
              <Form.Control
              as="textarea"
              rows={4}
              value={blog?.content}
              onChange={(e) =>
                setBlog({ ...blog, content: e.target.value })
              }
              placeholder="What's New For Today ?"
            />
              <br />

              </div>
              </div>
            </Form.Group>
           
            <br />
            <Link to="/blog">
              <Button
                className="btn btn-success rounded-pill px-4 py-2"
                onClick={handleFormSubmit}
                href="/blog"
              >
                <i className="fa fa-check px-1" aria-hidden="true"></i>Send
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
