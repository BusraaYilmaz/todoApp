import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FormControlLabel } from "@mui/material";

export default function NoteForm(props) {
  return (
    <div
      style={{ backgroundColor: "#efefef", padding: "1rem", marginTop: "1rem" }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> Create new Todo</Form.Label>
          <Form.FormControlLabel
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </Form.Group>

        <Button variant="contained">Contained</Button>
        <Button variant="warning" type="submit">
          Ekle
        </Button>
      </Form>
    </div>
  );
}
