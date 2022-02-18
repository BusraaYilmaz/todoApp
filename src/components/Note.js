import React from "react";
import { Card, Button } from "react-bootstrap";

const Note = (props) => {
  const { id, note, deletee } = props;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{note}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button variant="danger" onClick={() => deletee(id)}>
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Note;
