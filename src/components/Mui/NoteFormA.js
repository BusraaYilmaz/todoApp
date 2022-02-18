import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const NoteFormA = (props) => {
  const [note, setNote] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      note: note,
    };
    props.ekle(newNote);
    setNote("");
  };
  return (
    <div style={{ backgroundColor: "#efefef", padding: "3rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          variant="outlined"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <Button
          className="mt-3"
          variant="contained"
          color="success"
          type="submit"
        >
          Ekle
        </Button>
      </form>
    </div>
  );
};
export default NoteFormA;
