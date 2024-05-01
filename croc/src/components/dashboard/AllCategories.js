import React, { useEffect, useState } from "react";
import "./Dash.css";

import { Button, Table } from "react-bootstrap";
import SideBar from "./SideBar";
import {
  GetAllCateg,
  GetAllFamily,
  GetAllGamme,
  RemoveCateg,
  RemoveFamily,
  RemoveGamme,
} from "../../apis/Category";
import axios from "axios";

const AllCategories = () => {
  const [category, setCategory] = useState([]);
  const [family, setFamily] = useState([]);
  const [gamme, setGamme] = useState([]);
  const [editedCategory, setEditedCategory] = useState({});
  const [editedFamily, setEditedFamily] = useState({});
  const [editedGamme, setEditedGamme] = useState({});

  const isCategory = async () => {
    const uslg = await GetAllCateg();
    setCategory(uslg);
  };

  const isFamily = async () => {
    const uslg = await GetAllFamily();
    setFamily(uslg);
  };

  const isGamme = async () => {
    const uslg = await GetAllGamme();
    setGamme(uslg);
  };

  const handleCategoryEdit = async (id) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      await axios.put(`/api/categ/edite/${id}`, editedCategory, config);
      // Handle the response or update the state as needed
    } catch (error) {
      console.log(error);
    }
  };

  const handleFamilyEdit = async (id) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      await axios.put(`/api/family/edite/${id}`, editedFamily, config);
      // Handle the response or update the state as needed
    } catch (error) {
      console.log(error);
    }
  };

  const handleGammeEdit = async (id) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      await axios.put(`/api/gamme/edite/${id}`, editedGamme, config);
      // Handle the response or update the state as needed
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isCategory();
    isFamily();
    isGamme();
  }, []);

  return (
    <div className="mdd">
      <SideBar />
      <div className="w-100">
        <div className="content-wrapper cadre">
          <div className="card cdr w3-hover-shadow">
            <div className="card-header">
              <h5 className="card-title mails">All Params</h5>
              <div className="card-tools"></div>
            </div>
            <div className="card-body">
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {category.map((el) => (
                    <tr key={el._id}>
                      <td>
                        {editedCategory._id === el._id ? (
                          <input
                            type="text"
                            value={editedCategory.category}
                            onChange={(e) =>
                              setEditedCategory({
                                ...editedCategory,
                                category: e.target.value
                              })
                            }
                          />
                        ) : (
                          el.category
                        )}
                      </td>
                      <td>
                        {editedCategory._id === el._id ? (
                          <Button
                            variant="success"
                            onClick={() => {
                              handleCategoryEdit(el._id);
                              setEditedCategory({});
                              window.location.reload();

                            }}
                          >
                            Save
                          </Button>
                        ) : (
                          <Button
                            variant="warning"
                            onClick={() => setEditedCategory(el)}
                          >
                            Edit
                          </Button>
                        )}
                        <Button
                          variant="danger"
                          onClick={() => {
                            RemoveCateg(el._id);
                            isCategory();
                          }}
                        >
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="card-body">
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>Families</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {family.map((el) => (
                    <tr key={el._id}>
                      <td>
                        {editedFamily._id === el._id ? (
                          <input
                            type="text"
                            value={editedFamily.family}
                            onChange={(e) =>
                              setEditedFamily({
                                ...editedFamily,
                                family: e.target.value
                              })
                            }
                          />
                        ) : (
                          el.family
                        )}
                      </td>
                      <td>
                        {editedFamily._id === el._id ? (
                          <Button
                            variant="success"
                            onClick={() => {
                              handleFamilyEdit(el._id);
                              setEditedFamily({});
                              window.location.reload();
                            }}
                          >
                            Save
                          </Button>
                        ) : (
                          <Button
                            variant="warning"
                            onClick={() => setEditedFamily(el)}
                          >
                            Edit
                          </Button>
                        )}
                        <Button
                          variant="danger"
                          onClick={() => {
                            RemoveFamily(el._id);
                            isFamily();
                          }}
                        >
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="card-body">
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>Gammes</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {gamme.map((el) => (
                    <tr key={el._id}>
                      <td>
                        {editedGamme._id === el._id ? (
                          <input
                            type="text"
                            value={editedGamme.gamme}
                            onChange={(e) =>
                              setEditedGamme({
                                ...editedGamme,
                                gamme: e.target.value
                              })
                            }
                          />
                        ) : (
                          el.gamme
                        )}
                      </td>
                      <td>
                        {editedGamme._id === el._id ? (
                          <Button
                            variant="success"
                            onClick={() => {
                              handleGammeEdit(el._id);
                              setEditedGamme({});
                              window.location.reload();

                            }}
                          >
                            Save
                          </Button>
                        ) : (
                          <Button
                            variant="warning"
                            onClick={() => setEditedGamme(el)}
                          >
                            Edit
                          </Button>
                        )}
                        <Button
                          variant="danger"
                          onClick={() => {
                            RemoveGamme(el._id);
                            isGamme();
                          }}
                        >
                          DELETE
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

export default AllCategories;