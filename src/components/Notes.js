import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Note from "./Note";

const Notes = (props) => {
  return (
    <Container>
      <Row>
        {props.notes.map((item) => {
          return (
            <Col md={10} key={item.id}>
              <Note id={item.id} note={item.note} deletee={props.deletee} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Notes;
