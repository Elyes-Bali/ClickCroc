import React, { useState } from "react";
import { Button, Card, ModalTitle } from "react-bootstrap";

import ModalAd from "./ModalAd";
import { Getone, hundelUpdate } from "../../../apis/BlogApi";
const AdminCltoff = ({ off, devs, key }) => {
  const [offer, setOffer] = useState({});
  const hundelPosted = async (el) => {
    hundelUpdate(off._id, {});

    const Useroffer = await Getone(offer._id);
    setOffer(Useroffer);
    console.log(offer);
    window.location.reload();
  };

  return (
    <div key={key}>
      <Card style={{ width: "35rem", margin: "1%" }}>
        <Card.Body>
          <ModalTitle className="text-center">
            {off.title.substring(0, 30)}
          </ModalTitle>

          <Card.Text>
            <b>Title: </b>
            {off.title} TND
          </Card.Text>
          <br />

          <Card.Text>
            <b>Date: </b>
            {off.date.substring(0, 10)}
          </Card.Text>

          <br />
          <b>Details: </b>
          <Card.Text>{off.content.substring(0, 100)}...</Card.Text>
          <br />

          <ModalAd offrr={off} keey={key} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminCltoff;
