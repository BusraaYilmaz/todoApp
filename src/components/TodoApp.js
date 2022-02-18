import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Notes from "./Notes";
import NoteForm from "./NoteForm";

const ToDoApp = () => {
  const [notes, setNotes] = useState([]);

  const ekle = (note) => {
    setNotes([note, ...notes]);
  };
  const deletee = (id) => {
    const yeniDizi = notes.filter((note) => note.id != id);
    setNotes(yeniDizi);
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <NoteForm ekle={ekle} />
        </Col>
        <Col md={4}>
          <Notes notes={notes} deletee={deletee} />
        </Col>
      </Row>
    </Container>
  );
};

export default ToDoApp;
