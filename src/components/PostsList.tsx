import React from "react";

//Material
import Container from "@material-ui/core/Container";
import Typograph from "@material-ui/core/Typography";
import {makeStyles, createStyles} from "@material-ui/styles";
//import {Theme} from "@material-ui/core";

//Redux
import {connect} from "react-redux";
import {StoreState} from "../reducers/combineReducers";
import {Post} from "../actions/FetchPosts";



//Files
import {fetchPosts} from "../actions/FetchPosts";
import { Button, Select, MenuItem} from "@material-ui/core";

interface PostProps {  //props interface
    posts: Post[],
    fetchPosts(): any,
    
}

const useStyles = makeStyles(() =>
  createStyles({
    dropDownList: {
      borderRadius: "4px",
      margin: "20px 20px",
      backgroundColor: "#2a5298",
      textAlign: "center",
      color: "white",
      fontSize: 16,
      width: "200px",
      border: "1px solid black"

    },
  })
);


function PostList(props: PostProps){

    const classes = useStyles();


    console.log(props.posts);
   

    function getPosts(): void {
            props.fetchPosts();
    }

   

    return (
      <Container>
        <Typograph>
          This is the list dummy text
          {props.posts[0].title}
        </Typograph>
        <Select className={classes.dropDownList} >
          {props.posts.map((post, index) => {
            return <MenuItem key={index}>{post.title.substring(0, 5)}</MenuItem>;
          })}
        </Select>

        <Button variant="outlined" onClick={getPosts}>
          GetPosts
        </Button>
      </Container>
    );
};

const mapStateToProp = (state: StoreState): {posts: Post[]} =>{
    return {posts: state.posts};
}


export const ListOfPosts = connect(mapStateToProp, {fetchPosts})(PostList);

// connect(mapStateToProps, {actionFunction})(currentFunction)