import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CurrentUser } from "../../apis/UserApi";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = ({ ping, setPing }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    pic: "",
    phone: "",
    age: "",
    city: "",
    state: "",
    adress:"",
    company:"",
    images: [],
  });
  const navigate = useNavigate();
  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
  };

  const [multipleFiles, setMultipleFiles] = useState();
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  console.log(user);

  const hundelRemove = (idx) => {
    const newState = {
      ...user,
      images: user.images.map((item, index) => {
        return idx === index ? { ...item, filePath: "" } : item;
      }),
    };
    setUser(newState);
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    const { data } = await axios.post(
      "http://localhost:5000/api/user/upload",
      bodyFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    setUser({ ...user, pic: data });
  };

  const uploadFileHandler1 = async () => {
    setUser({ ...user, images: [] });
    // console.log(multipleFiles)
    // const file = e.target.files[0];
    const bodyFormData = new FormData();
    for (let i = 0; i < multipleFiles.length; i++) {
      bodyFormData.append("files", multipleFiles[i]);
    }
    // console.log(bodyFormData);

    const res = await axios.post(
      "http://localhost:5000/api/user/upload/multipesfiles",
      bodyFormData
    );
    // console.log(res.data.imgs)
    setUser({ ...user, images: res.data.imgs });
    // res.data.imgs.map((el)=>values.images.push(el))

    // console.log(imgs)
  };

  const hundelUpdate = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/user/update/${user._id}`, user, config);
    setPing(!ping);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your data has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/');
    
  };

  return (
    <div id="Profile">
    
      <section className="prt">
     
        <div className="container shadow my-5 py-5">
        <p className="text-center fs-1">My Profile</p>
          <div className="row">
            <div className="col-md-5">
              <br />
              <br />
              <br />
              <h1 className="text-center text-bold">
              Upload Your Profile Picture{" "}
              </h1>

              <div className="imggg">
                {user?.pic && (
                  <img
                    className="imgg"
                    alt="not fount"
                    width={"250px"}
                    src={`http://localhost:5000${user?.pic}`}
                  />
                )}
                {!user.pic && (
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4JvZuw_Q_yEggsD8I1qXrKlRP9mtf6MuwA&usqp=CAU" />
                )}
                <br />
                {user.pic && (
                  <button
                    className="btn btn-primary w-50 mt-4 rounded-pill"
                    onClick={(event) => {
                      setUser({ ...user, pic: "" });
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
                className=" myimage"
                onChange={uploadFileHandler}
              />
            </div>

            <div className="container  col-md-7">
              <Form className="mt-4">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="px-2">UserName:</Form.Label>
                    <input
                      className="form-control eml"
                      disabled={true}
                      type="text"
                      value={user?.username}
                      onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                      }
                      placeholder="UserName"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="px-2 ">Phone Number:</Form.Label>
                    <input
                      className="form-control"
                      type="number"
                      value={user?.phone}
                      onChange={(e) => {
                        const newValue = e.target.value.slice(0, 8);
                        setUser({ ...user, phone: newValue });
                      }}
                      plac
                      placeholder="Phone Number"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Email</Form.Label>
                    <input
                      className="form-control eml w-100"
                      disabled={true}
                      type="text"
                      value={user?.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      placeholder="Modify your email ?"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="px-2 ">Age:</Form.Label>
                    <input
                      className="form-control"
                      type="number"
                      value={user?.age}
                      onChange={(e) =>{
                        const newValue = e.target.value.slice(0, 3);
                        setUser({ ...user, age: newValue })
                      }}
                      placeholder="Your Age"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="px-2 ">Company:</Form.Label>
                    <input
                      className="form-control"
                      type="text"
                      value={user?.company}
                      onChange={(e) =>
                        setUser({ ...user, company: e.target.value })
                      }
                      placeholder="Your Copany"
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Adress</Form.Label>
                  <input
                    className="form-control w-100"
                    type="text"
                    value={user?.adress}
                    onChange={(e) =>
                      setUser({ ...user, adress: e.target.value })
                    }
                    placeholder="What is your adress ?"
                  />
                </Form.Group>

                <Row className="mb-3 ">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className="px-2">City:</Form.Label>
                    <input
                      className="form-control"
                      type="text"
                      value={user?.city}
                      onChange={(e) =>
                        setUser({ ...user, city: e.target.value })
                      }
                      placeholder="City ?"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className="px-2">State:</Form.Label>
                    <input
                      className="form-control"
                      type="text"
                      value={user?.state}
                      onChange={(e) =>
                        setUser({ ...user, state: e.target.value })
                      }
                      placeholder="State ?"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="px-2">Zip:</Form.Label>
                    <input
                      className="form-control"
                      type="text"
                      value={user?.zip}
                      onChange={(e) =>
                        setUser({ ...user, zip: e.target.value })
                      }
                      placeholder="Zip Code ?"
                    />
                  </Form.Group>
                </Row>

                {/* <img src={user?.pic}/> */}
              </Form>
              {/* {user.role==="patient" && */}
              <Button
                className="butt rounded-pill"
                variant="primary"
                type="button"
                onClick={hundelUpdate}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Profile;
