import React from "react";
import { Card, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Note = (props) => {
  const { id, note, deletee } = props;

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{note}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => deletee(id)}>Delete</Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Note;
