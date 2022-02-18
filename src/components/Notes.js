import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NoteA from "../Mui/NoteA";

const Notes = (props) => {
  return (
    <Container>
      <Row>
        {props.notes.map((item) => {
          return (
            <Col md={10} key={item.id}>
              <NoteA id={item.id} note={item.note} deletee={props.deletee} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Notes;
