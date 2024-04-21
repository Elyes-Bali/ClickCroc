import React, { useEffect, useState } from "react";
import { Badge, Table } from "react-bootstrap";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { GetAllUsers } from "../../apis/UserApi";
import "./Dash.css";
import { GetAllOff } from "../../apis/OfferApi";

const Dashboard = () => {
  const [allusers, setAllusers] = useState([]);
  const [chart, setChart] = useState([]);

  const isOffer = async () => {
    const oflg = await GetAllOff();
    setChart(oflg);
  };
  const isUsers = async () => {
    const uslg = await GetAllUsers();
    setAllusers(uslg);
  };

  const Count = () => {
    var nbr = 0;

    allusers.filter((el) => {
      if (el.isAdmin != true) {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbruser = Count();

  useEffect(() => {
    isUsers();
    isOffer();
  }, []);
  console.log(allusers);
  return (
    <div className="mdd ">
      <div className="content-wrapper ">
        <section className="content pt-4">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                  <span className="info-box-icon bg-info elevation-1">
                    <i className="fas fa-user-plus" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">All Users</span>
                    <span className="info-box-number">{nbruser}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
              
              <div className="info-box">
                  <span className="info-box-icon bg-danger elevation-1">
                    <i className="fas fa-database" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">All Offers</span>
                    <span className="info-box-number">{chart?.length}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="">
                <div className=" ">
                  <div className="card-header border-transparent">
                    {/* <h3 className="card-title mb-3">All Users</h3> */}
                    <div className="card-tools"></div>
                  </div>
                  {/* modification here */}

                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="download-table-xls-button btn btn-success mb-3"
                        table="table-to-xls"
                        filename="tablexls"
                        sheet="tablexls"
                        buttonText="Export Data to Excel Sheet"
                      />
                      <table className="table" id="table-to-xls">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          {allusers
                            .filter((el) => el.isAdmin !== true)
                            .map((el, index) => (
                              <tr key={index}>
                                <td>{el.username}</td>
                                <td>
                                  <Badge bg="success">{el.role}</Badge>
                                </td>
                                <td>{el.email}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
