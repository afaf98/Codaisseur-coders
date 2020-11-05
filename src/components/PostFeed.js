// src/components/PostsFeed.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";
import { fetchNext5Posts } from "../feed/actions";
import { selectFeedLoading, selectFeedPosts } from "../feed/selectors";

export default function PostsFeed() {
  const dispatch = useDispatch();

  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);
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
