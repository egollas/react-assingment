import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { getComments } from "../../Services/ArticlesAPI";
import "./style.css";

const ArticleCard = ({ id, title, body, updated_at }) => {
  const [showComment, setShowComment] = useState(false);
  const [comments, setComments] = useState({ data: [] });

  useEffect(() => {
    getComments(id)
      .then((res) => setComments({ ...res }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card className="cardContainer">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        {/* <Card.Text>
        <small className="text-muted">{new Date(updated_at)}</small>
      </Card.Text> */}
      </Card.Body>
      <Card.Footer className="text-muted">
        <Button
          variant="primary"
          className="buttonBase"
          onClick={() => alert("Add the Edit Function")}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          className="buttonBase"
          onClick={() => alert("Add the Delete Function")}
        >
          Delete
        </Button>
        <Button
          variant="light"
          className="buttonBase"
          onClick={() => setShowComment(!showComment)}
        >
          comment
        </Button>
      </Card.Footer>
      {showComment && (
        <Card.Body>
          <Card.Text>
            {comments.data.map(({ body }, idx) => (
              <div>
                <small key={idx} className="text-muted">
                  {body}
                </small>
              </div>
            ))}
          </Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};

export default ArticleCard;
