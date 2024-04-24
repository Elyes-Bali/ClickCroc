import React, { useState } from "react";
import { Button, Card, ModalTitle } from "react-bootstrap";
import { Getone } from "../../../apis/OfferApi";
import { hundelUpdate } from "../../../apis/UserApi";
import ModalAd from "./ModalAd";

const AdProd = ({ off,key }) => {
    const [offer, setOffer] = useState({});
    const hundelPosted = async (el) => {
      hundelUpdate(off._id, {
        isCompleted: true,
      });
  
      const Useroffer = await Getone(offer._id);
      setOffer(Useroffer);
      console.log(offer);
      window.location.reload();
    };
  
  return (
    <div key={key}>
    <Card style={{ width: "35rem", margin: "1%" }}>
      <Card.Body>
        <ModalTitle className="text-center">{off.prjectname.substring(0, 30)}</ModalTitle>
  
        <Card.Text>
          <b>Price: </b>
          {off.budget} TND
        </Card.Text>
        <br />
        <Card.Text>
          <b>Family: </b>
          {off.duree}
        </Card.Text>
        <br />
        <Card.Text>
          <b>Color: </b>
          {off?.colors}
        </Card.Text>
        <br />
        <Card.Text>
          <b>Date: </b>
          {off.date.substring(0, 10)}
        </Card.Text>
        <br />
        <Card.Text>
          <b>Owner: </b>{off.createdbyName}
        </Card.Text>
        <br />
        <Card.Text>
          <b>Brand: </b>{off?.brand}
        </Card.Text>
        <br />
        <Card.Text>
          <b>Product Maker: </b>{off?.prdmake}
        </Card.Text>
        <br />
        <b>Details: </b>
        <Card.Text>{off.detail.substring(0, 100)}...</Card.Text>
        <br />
        
        <ModalAd offrr={off} keey={key} />
        
      </Card.Body>
    </Card>
  </div>
  )
}

export default AdProd