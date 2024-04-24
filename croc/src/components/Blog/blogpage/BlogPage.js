import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, ModalTitle } from "react-bootstrap";
import "./BlogPage.css";
import { GetAllBlogs } from "../../../apis/BlogApi";
import { Avatar } from "@chakra-ui/react";
const BlogPage = () => {
  const [blog, setBlog] = useState([]);
  const isBlog = async () => {
    const oflg = await GetAllBlogs();
    setBlog(oflg);
  };
  useEffect(() => {
    isBlog();
  }, []);
  return (
    <div>
      <section id="offers">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4  fw-bolder mb-4 text-center text-white">
                Blogs
                <br />
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="container  shadow col-md-4">
              <div className="free ctr">
                <h6 className="display-5 h5 fint-weight-semibold mb-2 text-dark">
                  Discover our newest Blogs
                </h6>
                <p>
                  <b>
                    This is an Opportunity to discover our newest products in
                    sales.
                  </b>
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="col-md-4 col-lg-9 ml-5 ">
                <div className="flex row">
                  {blog.map((el, index) => (
                    <Card style={{ width: "55rem", margin: "1%" }}>
                      <Card.Body className="d-flex flex-column">
                        <div className="d-flex align-items-start">
                          <img src={el?.pic} className="w-25 mr-3" />
                          <div>
                            <Card.Title>Title :</Card.Title>
                            <Card.Text>{el?.title}</Card.Text>

                            <Card.Title>Content :</Card.Title>

                            <Card.Text>{el?.content}</Card.Text>
                          </div>
                        </div>
                        <div className="mt-auto ml-auto">
                          <Card.Text>
                            <b>Posted At :</b> {el?.date.substring(0, 10)}
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
