import React, { useEffect, useState } from "react";

import { Button, Table } from "react-bootstrap";
import { GetAllCom, Removcom } from "../../apis/Comments";
import SideBar from "./SideBar";


const Commentsdb = () => {
  const [comments, setComments] = useState([]);

  const isComments = async () => {
    const uslg = await GetAllCom();
    setComments(uslg);
  };

  useEffect(() => {
    isComments();
  }, []);

  return (
    <div>
      <div className="mdd">
      <SideBar />

        <div className="content-wrapper ">
          <div className="card cdr w3-hover-shadow">
            <div className="card-header">
              <h5 className="card-title">All Comments</h5>
              <div className="card-tools">
                
              </div>
            </div>
            <div className="card-body">
              <Table  bordered hover>
                <thead className="">
                  <tr>
                    <th>Name</th>
                  
                    <th>Comments</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="">
                  {comments.map((el) => (
                    <tr>
                      <td>{el.name}</td>
                      <td>{el.comment}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => {
                            Removcom(el._id);
                            window.location.reload();
                          }}
                        >
                          DELETE
                        </Button>{" "}
                        
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

export default Commentsdb;
