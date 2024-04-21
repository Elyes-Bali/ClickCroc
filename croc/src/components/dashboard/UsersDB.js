import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { GetAllUsers } from "../../apis/UserApi";
import "./Dash.css";
import { hundelUpdate } from "../../apis/UserApi";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const ClienDB = () => {
  const [allusers, setAllusers] = useState([]);

   const handlemessage = async (email) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const data={email:email,message:`Hello our dear Client, Your Baby needs to get the injection in Two Days .Thank you.`}
    try {
      const res = await axios.post("/api/sendemail/mailer", data, config);

    
    } catch (error) {
      console.log(error);
    }
  };

  const hundelPosted = async (el,email) => {
    handlemessage(email);
  };
  

  const isUsers = async () => {
    const uslg = await GetAllUsers();
    setAllusers(uslg);
  };

  useEffect(() => {
    isUsers();
  }, []);
  console.log(allusers);

  return (
    <div className="mdd">
      <div className="ctn w-100 ">
        <div className="content-wrapper cadre">
          <div className="card cdr w3-hover-shadow">
            <div className="card-header">
              <h5 className="card-title">User Data</h5>
              <div className="card-tools"></div>
            </div>
            <div className="card-body">
            <ReactHTMLTableToExcel   id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export Data to Excel Sheet"/>
                    <Table className="table" id="table-to-xls">
                <thead className="">
                  <tr>
                    <th>Gardien Name</th>
                    <th>Email</th>
                    <th>Baby</th>
                    <th>Age</th>
                    <th>Gender</th>

                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody className="">
                  {allusers
                    ?.filter((el) => el.isAdmin != true)
                    .map((el) =>
                      el.children.map((child, index) => (
                        <tr key={`${el._id}-${index}`}>
                          <td>{el.username}</td>
                          <td>{el.email}</td>
                          <td>{child.babyname}</td>
                          <td>{child.age}</td>
                          <td>{child.gender}</td>

                          <td>
                            <Button
                              onClick={() =>
                                hundelPosted(
                                  el,
                                  el.email,
                                 
                                )
                              }
                              variant="success"
                            >
                              Notify
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                </tbody>
              </Table>

              <Table striped bordered hover className="mt-5">
                <thead className="">
                  <tr>
                    <th>Gardien Name</th>
                    <th>Baby</th>
                    <th>BGG</th>
                    <th>PENT-1+VPI+PVC1</th>
                    <th>PENT-1+VPI</th>
                    <th>PVC2</th>
                    <th>PENT-3+VPI</th>
                    <th>PVC3</th>
                    <th>RR-1 HVA</th>
                    <th>DTC4+VPO+RR2</th>
                  </tr>
                </thead>
                <tbody className="">
                  {allusers
                    ?.filter((el) => el.isAdmin != true)
                    .map((el) =>
                      el.children.map((child, index) => (
                        <tr key={`${el._id}-${index}`}>
                          <td>{el.username}</td>
                          <td>{child.babyname}</td>

                          <td>
                            {" "}
                            {child?.age >= 0.01 ? (
                              <p> Done{" "}
                              <i
                                className="fa fa-check"
                                aria-hidden="true"
                              /></p>
                            ) : (
                              <>
                                {!child?.injected && (
                                  <Button
                                    onClick={() => {
                                      hundelUpdate(el._id, {
                                        children: el.children.map((c, i) =>
                                          i === index
                                            ? { ...c, injected: !c.injected }
                                            : c
                                        ),
                                      });
                                      window.location.reload();
                                    }}
                                    variant="success"
                                  >
                                    Done
                                  </Button>
                                )}
                                {child?.injected && (
                                  <p>
                                    Done{" "}
                                    <i
                                      className="fa fa-check"
                                      aria-hidden="true"
                                    />
                                  </p>
                                )}
                              </>
                            )}
                          </td>

                          <td>
                            {" "}
                            {child?.age >= 0.02 ? (
                              <p> Done{" "}
                              <i
                                className="fa fa-check"
                                aria-hidden="true"
                              /></p>
                            ) : (
                            <>
                            {!child?.injected1 && (
                              <Button
                                onClick={() => {
                                  hundelUpdate(el._id, {
                                    children: el.children.map((c, i) =>
                                      i == index
                                        ? { ...c, injected1: !c.injected1 }
                                        : c
                                    ),
                                  });
                                  window.location.reload();
                                }}
                                variant="success"
                              >
                                Done
                              </Button>

                            )}
                            {child?.injected1 && (
                              <p>
                                Done{" "}
                                <i class="fa fa-check" aria-hidden="true" />
                              </p>
                            )}{" "}
                            </>
                            )}
                          </td>

                          <td>
                            {" "}
                            {child?.age >= 0.03 ? (
                              <p> Done{" "}
                              <i
                                className="fa fa-check"
                                aria-hidden="true"
                              /></p>
                            ) : (
                            <>
                            {!child?.injected2 && (
                              <Button
                                onClick={() => {
                                  hundelUpdate(el._id, {
                                    children: el.children.map((c, i) =>
                                      i == index
                                        ? { ...c, injected2: !c.injected2 }
                                        : c
                                    ),
                                  });
                                  window.location.reload();
                                }}
                                variant="success"
                              >
                                Done
                              </Button>
                            )}
                            {child?.injected2 && (
                              <p>
                                Done{" "}
                                <i class="fa fa-check" aria-hidden="true" />
                              </p>
                            )}</>
                            )}
                          </td>

                          <td>
                          {child?.age >= 0.04 ? (
                              <p> Done{" "}
                              <i
                                className="fa fa-check"
                                aria-hidden="true"
                              /></p>
                            ) : (
                            <>
                            {!child?.injected3 && (
                              <Button
                                onClick={() => {
                                  hundelUpdate(el._id, {
                                    children: el.children.map((c, i) =>
                                      i == index
                                        ? { ...c, injected3: !c.injected3 }
                                        : c
                                    ),
                                  });
                                  window.location.reload();
                                }}
                                variant="success"
                              >
                                Done
                              </Button>
                            )}
                            {child?.injected3 && (
                              <p>
                                Done{" "}
                                <i class="fa fa-check" aria-hidden="true" />
                              </p>
                            )}</>
                            )}
                          </td>

                          <td>
                            {" "}
                            {child?.age >= 0.06 ? (
                              <p> Done{" "}
                              <i
                                className="fa fa-check"
                                aria-hidden="true"
                              /></p>
                            ) : (
                            <>
                            {!child?.injected4 && (
                              <Button
                                onClick={() => {
                                  hundelUpdate(el._id, {
                                    children: el.children.map((c, i) =>
                                      i == index
                                        ? { ...c, injected4: !c.injected4 }
                                        : c
                                    ),
                                  });
                                  window.location.reload();
                                }}
                                variant="success"
                              >
                                Done
                              </Button>
                            )}
                            {child?.injected4 && (
                              <p>
                                Done{" "}
                                <i class="fa fa-check" aria-hidden="true" />
                              </p>
                            )}</>
                            )}
                          </td>

                          <td>
                            {" "}
                            {child?.age >= 0.11 ? (
                              <p> Done{" "}
                              <i
                                className="fa fa-check"
                                aria-hidden="true"
                              /></p>
                            ) : (
                            <>
                            {!child?.injected5 && (
                              <Button
                                onClick={() => {
                                  hundelUpdate(el._id, {
                                    children: el.children.map((c, i) =>
                                      i == index
                                        ? { ...c, injected5: !c.injected5 }
                                        : c
                                    ),
                                  });
                                  window.location.reload();
                                }}
                                variant="success"
                              >
                                Done
                              </Button>
                            )}
                            {child?.injected5 && (
                              <p>
                                Done{" "}
                                <i class="fa fa-check" aria-hidden="true" />
                              </p>
                            )}</>
                            )}
                          </td>

                          <td>
                            {" "}
                            {child?.age >= 0.12 ? (
                              <p> Done{" "}
                              <i
                                className="fa fa-check"
                                aria-hidden="true"
                              /></p>
                            ) : (
                            <>
                            {!child?.injected6 && (
                              <Button
                                onClick={() => {
                                  hundelUpdate(el._id, {
                                    children: el.children.map((c, i) =>
                                      i == index
                                        ? { ...c, injected6: !c.injected6 }
                                        : c
                                    ),
                                  });
                                  window.location.reload();
                                }}
                                variant="success"
                              >
                                Done
                              </Button>
                            )}
                            {child?.injected6 && (
                              <p>
                                Done{" "}
                                <i class="fa fa-check" aria-hidden="true" />
                              </p>
                            )}</>
                            )}
                          </td>

                          <td>
                            {" "}
                            {child?.age >= 1.06 ? (
                              <p> Done{" "}
                              <i
                                className="fa fa-check"
                                aria-hidden="true"
                              /></p>
                            ) : (
                            <>
                            {!child?.injected7 && (
                              <Button
                                onClick={() => {
                                  hundelUpdate(el._id, {
                                    children: el.children.map((c, i) =>
                                      i == index
                                        ? { ...c, injected7: !c.injected7 }
                                        : c
                                    ),
                                  });
                                  window.location.reload();
                                }}
                                variant="success"
                              >
                                Done
                              </Button>
                            )}
                            {child?.injected7 && (
                              <p>
                                Done{" "}
                                <i class="fa fa-check" aria-hidden="true" />
                              </p>
                            )}</>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClienDB;
