import React, { useState } from "react";
import { Navbar, FormControl, Button, Modal, Form, Col } from "react-bootstrap";

import "./style.css";

const AddModal = (props) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const handleChangeBody = (event) => {
    setBody(event.target.value)
  }
  const AddArticle = () => {
    console.log({title, body})
  }
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
            <Form.Control placeholder="Enter Title ..." onChange={handleChangeTitle} />
          </Form.Row>
          <Form.Row controlId="body" className='searchContainer'>
            <Form.Label>body</Form.Label>
            <Form.Control placeholder="Enter Body..." type='text' as="textarea" size='sm' onChange={handleChangeBody} />
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={AddArticle}>Add</Button>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

const Header = ({onSearch}) => {
  const [modalShow, setModalShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value)
  };

  return (
    <>
      <Navbar sticky="top" variant="dark" bg="dark" className="searchContainer">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={handleSearchTerm}
        />
        <Button
          variant="outline-warning"
          className="buttonBase"
          onClick={()=>onSearch(searchTerm)}
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
