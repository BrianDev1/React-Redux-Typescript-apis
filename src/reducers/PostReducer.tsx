
// Rule: never return undefined (error)
// Rule: ---> reducer(undefined -> assign a default value, Action)
// Rule: Never reach outside of its own function
// Reducer (previous State value, Action)
// Rule: must not mutate the "state" argument inside the reducer


import {Actions} from "../actions/FetchPosts";
import {Post} from "../actions/FetchPosts";
import {ActionTypes} from "../types/types";


export function fetchPostsReducer(state: Post[] = [{id: 0,title:"",completed:false}], action: Actions) {
    
    switch(action.type) {
        case ActionTypes.fetchPosts:
            return action.payload;  
        case ActionTypes.deletePosts:
            return state.filter((post: Post) => post.id !== action.payload);
        default:
             return state;
    }

};