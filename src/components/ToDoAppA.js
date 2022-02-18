import React from "react";

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
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <Grid>
              <NoteForm ekle={ekle} />
            </Grid>
            <Grid>
              <Note notes={notes} deletee={deletee} />
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ToDoAppA;
