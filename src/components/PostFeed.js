// src/components/PostsFeed.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";
import { startLoading, postsFetched } from "../feed/actions";
import { selectFeedLoading, selectFeedPosts } from "../feed/selectors";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const dispatch = useDispatch();

  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);

  async function fetchNext5Posts() {
    dispatch(startLoading());

    // TODO
    // fetch next set of posts (use offset+limit),
    //  and define the variable `morePosts`

    const res = await axios.get(
      `${API_URL}/posts?offset=${posts.length}&limit=5`
    );
    const morePosts = res.data.rows;

    dispatch(postsFetched(morePosts));
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);
  //   console.log("Data", data.posts);
  return (
    <div className="PostsFeed">
      <h1>Recent posts</h1>

      {
        /* TODO: render the list of posts */
        !loading === false
          ? "Loading..."
          : posts.map((p) => {
              return (
                <div key={p.id}>
                  <h2>{p.title}</h2>
                  <p>{moment(p.createdAt).format("DD-MM-YYYY")}</p>
                </div>
              );
            })
      }

      {
        /* TODO: show a loading indicator when the posts are loading,
        or else a button to load more posts if not */
        !loading === false ? (
          "Loading..."
        ) : (
          <button onClick={fetchNext5Posts}>Load More</button>
        )
      }
    </div>
  );
}
