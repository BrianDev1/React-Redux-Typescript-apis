//Apis
import jsonPlaceholder from "../apis/jsonplaceholder";

import {Dispatch} from "redux";
import {ActionTypes} from "../types/types";



// Typescript --- create an interface for every Action
//Interfaces:
export interface Post {   //the data passed back by the Api request, structure in the way below []
    id: number,
    title: string,
    completed: boolean
}

//Actions

interface fetchPostsAction { // Structure of the fetch_post action
    type: ActionTypes.fetchPosts,
    payload: Post[]
}

interface deletePostsAction {
    type: ActionTypes.deletePosts,
    payload: number   // id
}

export type Actions = fetchPostsAction | deletePostsAction;



// Action Creator functions

export const fetchPosts = () => 
    async (dispatch: Dispatch) => {

        const response = await jsonPlaceholder.get<Post[]>("/posts"); //response is going to hold an array of interface Post

        dispatch<fetchPostsAction>({type: ActionTypes.fetchPosts, payload: response.data});

    };
    

export function deletePost(id: number): deletePostsAction {
    return {
        type: ActionTypes.deletePosts,
        payload: id
    };
};

    


