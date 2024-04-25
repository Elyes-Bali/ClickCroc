import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { GetAllClt, GetAllManu, GetAllSel } from "../../apis/UserApi";
import SideBar from "./SideBar";
import { hundelUpdate } from "../../apis/UserApi";

const ClienDB = () => {
  const [allusers, setAllusers] = useState([]);
  const [allsels, setAllsels] = useState([]);
  const [allmanu, setAllmanu] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchsel, setSearchSel] = useState("");
  const [searchmanu, setSearchManu] = useState("");
  
  const isUsers = async () => {
    const uslg = await GetAllClt();
    setAllusers(uslg);
  };

  const isSeller = async () => {
    const uslg = await GetAllSel();
    setAllsels(uslg);
  };

  const isManu = async () => {
    const uslg = await GetAllManu();
    setAllmanu(uslg);
  };

  const filterData = (data) => {
    return data.filter(
      (el) =>
        el.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        el.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filterSel = (data) => {
    return data.filter(
      (el) =>
        el.username.toLowerCase().includes(searchsel.toLowerCase()) ||
        el.email.toLowerCase().includes(searchsel.toLowerCase())
    );
  };

  const filterManu = (data) => {
    return data.filter(
      (el) =>
        el.username.toLowerCase().includes(searchmanu.toLowerCase()) ||
        el.email.toLowerCase().includes(searchmanu.toLowerCase())
    );
  };

  useEffect(() => {
    isUsers();
    isSeller();
    isManu();
  }, []);

  return (
    <div>
      <div className="mdd">
      <SideBar />
        <div className="content-wrapper ">
          <div className="card cdr w3-hover-shadow">
            <div className="card-header">
              <h5 className="card-title">All Clients</h5>
              <div className="card-tools">
              <input
                type="text"
                placeholder="Search by name or email"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              </div>
            </div>
            <div className="">
              <Table striped bordered hover>
                <thead className="">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="">
                {filterData(allusers).map((el) => (
                    <tr key={el._id}>
                      <td>{el.username}</td>
                      <td>{el.email}</td>
                      <td>
                        <Button
                          onClick={() => {
                            hundelUpdate(el._id, { authorize: !el.authorize });
                            window.location.reload();
                          }}
                          variant={el.authorize ? "danger" : "success"}
                        >
                          {el.authorize ? "Block User" : "Activate User"}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            

            <div className="card-header">
              <h5 className="card-title">All Sellers</h5>
              <div className="card-tools">
              <input
              
                type="text"
                placeholder="Search by name or email"
                value={searchsel}
                onChange={(e) => setSearchSel(e.target.value)}
              />
              </div>
            </div>
            <div className="">
              <Table striped bordered hover>
                <thead className="">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filterSel(allsels).map((el) => (
                    <tr key={el._id}>
                      <td>{el.username}</td>
                      <td>{el.email}</td>
                      <td>
                        <Button
                          onClick={() => {
                            hundelUpdate(el._id, { authorize: !el.authorize });
                            window.location.reload();
                          }}
                          variant={el.authorize ? "danger" : "success"}
                        >
                          {el.authorize ? "Block User" : "Activate User"}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>



            <div className="card-header">
              <h5 className="card-title">All Manufacturers</h5>
              <div className="card-tools">
                <input
                type="text"
                placeholder="Search by name or email"
                value={searchmanu}
                onChange={(e) => setSearchManu(e.target.value)}
              />
              
              </div>
            </div>
            <div className="">
              <Table striped bordered hover>
                <thead className="">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="">
                {filterManu(allmanu).map((el) => (
                    <tr key={el._id}>
                      <td>{el.username}</td>
                      <td>{el.email}</td>
                      <td>
                        <Button
                          onClick={() => {
                            hundelUpdate(el._id, { authorize: !el.authorize });
                            window.location.reload();
                          }}
                          variant={el.authorize ? "danger" : "success"}
                        >
                          {el.authorize ? "Block User" : "Activate User"}
                        </Button>
                      </td>
                    </tr>
                  ))}
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
