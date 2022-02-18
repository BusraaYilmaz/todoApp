import Box from "@mui/material/Box";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import NoteFormA from "./NoteFormA";
import NotesA from "./NotesA";

const ToDoAppA = () => {
  const [notes, setNotes] = useState([]);
  const ekle = (note) => {
    setNotes([note, ...notes]);
  };
  const deletee = (id) => {
    const yeniDizi = notes.filter((note) => note.id != id);
    setNotes(yeniDizi);
  };
  return (
    <Box sx={{ width: "50%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={8}>
          <Grid style={{ padding: "1rem", marginLeft: "1rem" }}>
            <NoteFormA ekle={ekle} />
          </Grid>

          <Grid>
            <NotesA notes={notes} deletee={deletee} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ToDoAppA;
