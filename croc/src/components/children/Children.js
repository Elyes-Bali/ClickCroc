import React, { useEffect, useState } from "react";
import { CurrentUser } from "../../apis/UserApi";
import { Button, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import axios from "axios";
const Children = ({ ping, setPing }) => {
  const [user, setUser] = useState({});

  const hundelUpdate = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/user/update/${user._id}`, user, config);
    setPing(!ping);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your data has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    Navigate("/");
  };

  const isUsers = async () => {
    const uslg = await CurrentUser();
    setUser(uslg.data.user);
  };

  const handleChange = ({ e, idx }) => {
    const newState = {
      ...user,
      //   update: true,
      children: user.children.map((item, index) => {
        return idx === index ? { ...item, weight: e.target.value } : item;
      }),
    };
    setUser(newState);
  };
  const handleChange1 = ({ e, idx }) => {
    const newState = {
      ...user,
      //   update: true,
      children: user.children.map((item, index) => {
        return idx === index ? { ...item, age: e.target.value } : item;
      }),
    };
    setUser(newState);
  };
  const handleChange2 = ({ e, idx }) => {
    const newState = {
      ...user,
      //   update: true,
      children: user.children.map((item, index) => {
        return idx === index ? { ...item, size: e.target.value } : item;
      }),
    };
    setUser(newState);
  };

  useEffect(() => {
    isUsers();
  }, []);
  console.log(user);
  return (
    <div className="mt-6 col-md-12 mdd">
      <div className="card ">
        <div className="card-header">
          <h5 className="card-title">My Children :</h5>
        </div>
        <div className="card-body">
          <Table striped bordered hover>
            <thead className="">
              <tr>
                <th>Name</th>
                <th>Weight (kg)</th>
                <th>Age (Less than 1 : 1 month = 0.01)</th>
                <th>Hight (cm)</th>
                <th>Gender</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody className="">
              {user &&
                user?.children?.map((el, idx) => (
                  <tr key={idx}>
                    <td>{el.babyname}</td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        placeholder={user?.children[idx]?.weight}
                        onChange={(e) => handleChange({ e, idx })}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder={user?.children[idx]?.age}
                        onChange={(e) => handleChange1({ e, idx })}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder={user?.children[idx]?.size}
                        onChange={(e) => handleChange2({ e, idx })}
                      />
                    </td>
                    <td>{el.gender}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => {
                          hundelUpdate();
                          window.location.reload();
                        }}
                      >
                        Update
                      </Button>{" "}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>

      <div className="card ">
        <div className="card-header">
          <h5 className="card-title">Injection State :</h5>
        </div>
        <div className="card-body">
          <Table striped bordered hover>
            <thead className="">
              <tr>
                <th>Name</th>
                <th>BGG</th>
                <th>PENT-1+VPI+PVC1</th>
                <th>PENT-1+VPI</th>
                <th>PVC2</th>
                <th>PENT-3+VPI</th>
                <th>PVC3</th>
                <th>RR-1 HVA</th>
                <th>DTC4+VPO+RR2</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody className="">
              {user &&
                user?.children?.map((el, idx) => (
                  <tr key={idx}>
                    <td>{el.babyname}</td>
                    <td>
                      {user?.children[idx]?.age >= 0.01 || (user?.children[idx]?.injected === true) ? (
                        <p>Injected</p>
                      ) : (
                        <p>Not Injected</p>
                      )}
                    </td>
                    <td>
                      {user?.children[idx]?.age >= 0.02 || (user?.children[idx]?.injected1 === true) ? (
                        <p>Injected</p>
                      ) : (
                        <p>Not Injected</p>
                      )}
                    </td>
                    <td>
                      {user?.children[idx]?.age >= 0.03 || (user?.children[idx]?.injected2 === true) ? (
                        <p>Injected</p>
                      ) : (
                        <p>Not Injected</p>
                      )}
                    </td>
                    <td>
                      {user?.children[idx]?.age >= 0.04 || (user?.children[idx]?.injected3 === true) ? (
                        <p>Injected</p>
                      ) : (
                        <p>Not Injected</p>
                      )}
                    </td>
                    <td>
                      {user?.children[idx]?.age >= 0.06 || (user?.children[idx]?.injected4 === true) ? (
                        <p>Injected</p>
                      ) : (
                        <p>Not Injected</p>
                      )}
                    </td>
                    <td>
                      {user?.children[idx]?.age >= 0.11 || (user?.children[idx]?.injected5 === true) ? (
                        <p>Injected</p>
                      ) : (
                        <p>Not Injected</p>
                      )}
                    </td>
                    <td>
                      {user?.children[idx]?.age >= 0.12 || (user?.children[idx]?.injected6 === true) ? (
                        <p>Injected</p>
                      ) : (
                        <p>Not Injected</p>
                      )}
                    </td>
                    <td>
                      {user?.children[idx]?.age >= 1.06 || (user?.children[idx]?.injected7 === true) ? (
                        <p>Injected</p>
                      ) : (
                        <p>Not Injected</p>
                      )}
                    </td>

                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Children;
