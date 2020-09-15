
import {combineReducers} from "redux";

//files
import {fetchPostsReducer} from "./PostReducer";
import {Post} from "../actions/FetchPosts";

export interface StoreState {
    posts: Post[];  //data that exists in our data store (entire state)
}


export default combineReducers<StoreState>({
    posts: fetchPostsReducer,      //key to (access post data) : (reducer to combine)
    
});
