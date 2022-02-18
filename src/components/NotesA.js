import * as React from "react";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import HighlightedCode from "docs/src/modules/components/HighlightedCode";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import { Container } from "react-bootstrap";

export default function SpacingGrid() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            {props.notes.map((item) => {
              return (
                <Grid>
                  <Note id={item.id} note={item.note} deletee={props.deletee} />
                </Grid>
              );
            })}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
