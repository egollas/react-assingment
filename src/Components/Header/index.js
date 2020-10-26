import React, { useState } from "react";
import { Navbar, FormControl, Button, Modal, Form, Col } from "react-bootstrap";

import "./style.css";

const AddModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Article
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Row controlId="title" className='searchContainer'>
            <Form.Label>title</Form.Label>
            <Form.Control placeholder="Enter Title ..." />
          </Form.Row>
          <Form.Row controlId="body" className='searchContainer'>
            <Form.Label>body</Form.Label>
            <Form.Control placeholder="Enter Body..." type='text' as="textarea" size='sm' />
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => alert("connet API")}>Add</Button>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

const handleSearchTerm = (e) => {
  console.log(e);
};

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Navbar sticky="top" variant="dark" bg="dark" className="searchContainer">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onKeyPress={(e) => handleSearchTerm(e)}
        />
        <Button
          variant="outline-warning"
          className="buttonBase"
          onClick={() => alert("Search Article")}
        >
          Search
        </Button>
        <Button variant="outline-success" onClick={() => setModalShow(true)}>
          New
        </Button>
      </Navbar>
      <AddModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Header;
