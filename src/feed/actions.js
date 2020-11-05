import axios from "axios";

export function startLoading() {
  return {
    type: "feed/startLoading",
  };
}

export function postsFetched(morePosts) {
  console.log("MorePost", morePosts);
  return {
    type: "feed/postsFetched",
    payload: morePosts,
  };
}
const API_URL = `https://codaisseur-coders-network.herokuapp.com`;
export async function fetchNext5Posts(dispatch, getState) {
  dispatch(startLoading());
  console.log("What is getState", getState().feed.posts.length);
  // TODO
  // fetch next set of posts (use offset+limit),
  //  and define the variable `morePosts`

  const res = await axios.get(`${API_URL}/posts?offset=0&limit=5`);
  console.log("Result", res.data);
  const morePosts = res.data.rows;

  dispatch(postsFetched(morePosts));
}
