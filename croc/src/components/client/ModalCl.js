import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import "./ClientProfile.css"

const ModalCl = ({ offrr, keey }) => {
  const [offer, setOffer] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [multipleFiles, setMultipleFiles] = useState();
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
  };

  const uploadFileHandler1 = async () => {
    setOffer({ ...offer, images: [] });
    // console.log(multipleFiles)
    // const file = e.target.files[0];
    const bodyFormData = new FormData();
    for (let i = 0; i < multipleFiles.length; i++) {
      bodyFormData.append("files", multipleFiles[i]);
    }
    // console.log(bodyFormData);

    const res = await axios.post(
      "http://localhost:5000/api/offer/upload/multipesfiles",
      bodyFormData
    );
    // console.log(res.data.imgs)
    setOffer({ ...offer, images: res.data.imgs });
    // res.data.imgs.map((el)=>values.images.push(el))
  };

  const hundelUpdate = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/offer/edite/${offer._id}`, offer, config);

    window.location.reload();
  };

  const hundleDelete = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.delete(
      `/api/offer/deloffer/${offer._id}`,
      offer,
      config
    );

    window.location.reload();
  };

  useEffect(() => {
    setOffer(offrr);
    setOffer({ ...offrr, date: Date.now() });
  }, []);

  return (
    <div key={keey}>
    <div className="buttom">
      <Button onClick={handleShow} variant="primary">
        Edit
      </Button>
      <Button variant="danger" onClick={hundleDelete}>
        Delete
      </Button>
    </div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Product Name"
            value={offer?.prjectname}
            onChange={(e) =>
              setOffer({ ...offer, prjectname: e.target.value })
            }
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Control
            type="number"
            placeholder="Price"
            value={offer?.budget}
            onChange={(e) => setOffer({ ...offer, budget: e.target.value })}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Type"
            value={offer?.duree}
            onChange={(e) => setOffer({ ...offer, duree: e.target.value })}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Describe your product details"
            rows={5}
            value={offer?.detail}
            onChange={(e) => setOffer({ ...offer, detail: e.target.value })}
          />
        </Form.Group>
        <br />
        <input
          type="file"
          name="file"
          onChange={(e) => MultipleFileChange(e)}
          className=" myim"
          multiple
        />
        <br />
        <button
          className="btn btn-primary rounded-pill"
          type="button"
          onClick={uploadFileHandler1}
        >
          Upload Files
        </button>
        <br />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hundelUpdate} variant="success" type="button" block>
          Update
        </Button>
        <Button variant="danger" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  
  );
};

export default ModalCl;
