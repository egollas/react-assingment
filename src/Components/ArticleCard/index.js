import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";

import './style.css'

const ArticleCard = ({ title, body, updated_at }) => (
  <Card className='cardContainer'>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text onClick={()=>alert('show comments')}>{body}
      </Card.Text>
      {/* <Card.Text>
        <small className="text-muted">{new Date(updated_at)}</small>
      </Card.Text> */}
    </Card.Body>
    <Card.Footer className="text-muted">
      <Button variant="primary" className='buttonBase' onClick={()=>alert('Add the Edit Function')}>Edit</Button>
      <Button variant="danger" className='buttonBase' onClick={()=>alert('Add the Delete Function')}>Delete</Button>
    </Card.Footer>
  </Card>
)

export default ArticleCard;
