import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function NoteA(props) {
  const { id, note, deletee } = props;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <Card.Title>{note}</Card.Title>
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="danger" onClick={() => deletee(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
