import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const NoteA = (props) => {
  const { id, note, deletee } = props;
  return (
    <Box sx={{ minWidth: 275, padding: "2rem" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body2">{note}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={() => deletee(id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default NoteA;
