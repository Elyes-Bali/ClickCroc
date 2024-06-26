import React, { useEffect, useState } from "react";
import './Dash.css'

import { Button, Table } from "react-bootstrap";
import { GetAllMess } from "../../apis/MessageApi";
import { Removemess } from "../../apis/MessageApi";
import SideBar from "./SideBar";


const Messg = () => {
const [message,setMessage]=useState([])

const isMessages = async () => {
    const uslg = await GetAllMess();
    setMessage(uslg);
  };


  useEffect(() => {
    isMessages();
  }, []);


  return (
    <div className="mdd">
       <SideBar />
         <div className=" w-100">
      <div className="content-wrapper cadre">
        <div className="card cdr w3-hover-shadow">
          <div className="card-header ">
            <h5 className="card-title mails">
            Received Mails
            </h5>
            <div className="card-tools">
            </div>
          </div>
          <div className="card-body">
                  <Table  bordered hover>
                    <thead className="">
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {message.map((el) => (
                        <tr>
                          <td>{el.name}</td>
                          <td>{el.email}</td>
                          <td>
                            {el.message}
                          </td>
                          <td><Button variant="danger" onClick={()=>{Removemess(el._id);window.location.reload()}}>DELETE</Button> <Button variant="success" href={`mailto:${el.email}`}>CONTACT</Button>   </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
 
              </div>
            </div>
          </div>
        </div>
  )
}

export default Messg