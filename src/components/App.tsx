import React from 'react';

//Material-ui  **
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

//Files   ***
import {ListOfPosts} from "./PostsList";

const useStyles = makeStyles((theme: Theme) => createStyles({

}));

function App() {

  //const classes = useStyles();

  return (
    <Container>
      <ListOfPosts/>
    </Container>
  );
}

export default App;
