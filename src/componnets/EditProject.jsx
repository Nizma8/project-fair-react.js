import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import { BASEURL } from "../services/baseUrl";
import { editProject } from "../services/allApi";
import { ediptProjectResponseContext } from "../context/ContextShare";

function EditProject({ displayData }) {
  const {setEditProjectResponse}=useContext(ediptProjectResponseContext)

  const [editPro, setEditPro] = useState({
    id: displayData._id,
    title: displayData.title,
    languages: displayData.languages,
    github: displayData.github,
    website: displayData.website,
    overview: displayData.overview,
    projectImage: "",
  });
  useEffect(() => {
    if (editPro.projectImage) {
      setPreview(URL.createObjectURL(editPro.projectImage));
    }
  }, [editPro.projectImage]);
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState("");
  const handleClose = () => {
    setEditPro({
      id: displayData._id,
    title: displayData.title,
    languages: displayData.languages,
    github: displayData.github,
    website: displayData.website,
    overview: displayData.overview,
    projectImage: ""
    });
    setPreview("");
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleUpdate = async() => {
    // e.prevetDefault();
    const { id,title, languages, github, website, overview, projectImage } =editPro
      
    if (!title || !languages || !github || !website || !overview) {
      alert("please fill the form");
    } else {
      const token = sessionStorage.getItem("token");
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("languages", languages);
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("overview", overview);
      projectImage
        ? reqBody.append("projectImage", projectImage)
        : reqBody.append("projectImage", displayData.projectImage);
      if (projectImage) {
        const reqHeader = {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };
        const result = await editProject(id,reqBody,reqHeader)
        if(result.status ===200){
          handleClose()
          setEditProjectResponse(result.data)
        }else{
          alert(result.response.data)
        }
      } else {
        const reqHeader = {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        const result = await editProject(id,reqBody,reqHeader)
        if(result.status === 200){
          handleClose()
          setEditProjectResponse(result.data)

        }
        else{
          alert(result.response.data)
        }
      }
    }
  };
  return (
    <>
      <button className="btn" onClick={handleShow}>
        {" "}
        <i className="fa-solid fa-edit "></i>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <label className="text-center" htmlFor="projectpic">
                <input
                  id="projectpic"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setEditPro({ ...editPro, projectImage: e.target.files[0] })
                  }
                />

                <img
                  src={
                    preview
                      ? preview
                      : `${BASEURL}/uploads/${displayData.projectImage}`
                  }
                  alt=""
                  width={"100%"}
                  height={"200px"}
                />
              </label>
            </Col>
            <Col sm={12} md={6}>
              <input
                className="form-control"
                placeholder="Project Name"
                type="text"
                value={editPro.title ? editPro.title : displayData.title}
                onChange={(e) =>
                  setEditPro({ ...editPro, title: e.target.value })
                }
              />
              <input
                className="form-control"
                placeholder="Website link"
                type="text"
                value={editPro.website ? editPro.website : displayData.website}
                onChange={(e) =>
                  setEditPro({ ...editPro, website: e.target.value })
                }
              />
              <input
                className="form-control"
                placeholder="Language Used"
                type="text"
                value={
                  editPro.languages ? editPro.languages : displayData.languages
                }
                onChange={(e) =>
                  setEditPro({ ...editPro, languages: e.target.value })
                }
              />
              <input
                className="form-control"
                placeholder="Github link"
                type="text"
                value={editPro.github ? editPro.github : displayData.github}
                onChange={(e) =>
                  setEditPro({ ...editPro, github: e.target.value })
                }
              />
            </Col>
            <Col md={12}>
              <input
                className="form-control"
                placeholder="Project Overview"
                type="text"
                value={
                  editPro.overview ? editPro.overview : displayData.overview
                }
                onChange={(e) =>
                  setEditPro({ ...editPro, overview: e.target.value })
                }
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProject;
