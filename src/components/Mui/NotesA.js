import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import NoteA from "./NoteA";

const NotesA = (props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={10}>
          {props.notes.map((item) => {
            return (
              <Grid>
                <NoteA id={item.id} note={item.note} deletee={props.deletee} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};
export default NotesA;
