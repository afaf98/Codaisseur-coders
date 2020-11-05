// src/store / postPage / actions.js;
import axios from "axios";
import API_URL from "../config";

// const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoadingPost() {
  return {
    type: "feed/startLoading/PostPage",
  };
}
export function postFullyFetched(post) {
  console.log("Post", post.comments);
  return {
    type: "feed/PostPage",
    payload: { post: post.post, comments: post.comments },
  };
}
export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);

    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  };
}
