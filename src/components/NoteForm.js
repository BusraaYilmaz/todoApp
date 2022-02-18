import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Notes from "./Notes";

const NoteForm = (props) => {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApp = {
      id: Date.now(),
      note: note,
    };

    props.ekle(newApp);
    setNote("");
  };

  return (
    <div
      style={{ backgroundColor: "#efefef", padding: "1rem", marginTop: "1rem" }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> Create new Todo</Form.Label>
          <Form.Control
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </Form.Group>

        <Button variant="warning" type="submit">
          Ekle
        </Button>
      </Form>
    </div>
  );
};

export default NoteForm;
