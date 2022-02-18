import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Note from "./Note"

export default function NoteA(props) {
  return (
    <Container>
      <DataGrid
        rows={
            {props.notes.map((item) => {
                return (
                  <Col md={4} key={item.id}>
                    <Note id={item.id} note={item.note} deletee={props.deletee} />
                  </Col>
                );
              })} 
        }
        columns={[
          { id: item.id},
          { note: item.note},
          { deletee: item.deletee}
        ]}
      />
    </Container>
  );
}
