import * as React from "react";
import Grid from "@mui/material/Grid";
import NoteA from "../Mui/NoteA";

export default function SpacingGrid(props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            {props.notes.map((item) => {
              return (
                <Grid>
                  <NoteA
                    id={item.id}
                    note={item.note}
                    deletee={props.deletee}
                  />
                </Grid>
              );
            })}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
