import moment from "moment";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../postPage/actions";
import {
  selectPostAndComments,
  selectLoadingPostPage,
} from "../postPage/selectors";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const postAndComments = useSelector(selectPostAndComments);
  const loading = useSelector(selectLoadingPostPage);

  console.log("postandcomments", postAndComments.comments);

  useEffect(() => {
    dispatch({ type: "Test", payload: "Test" });
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading..</div>;
  } else {
    return (
      <div>
        {" "}
        <h1>{postAndComments.post.title}</h1>
        <div key={postAndComments.post.id} className="meta">
          <div>
            {" "}
            <h2> Date</h2>{" "}
            {moment(postAndComments.post.createdAt).format("DD-MM-YYYY")}
          </div>
          <div>
            <h2>Written by </h2>
            {postAndComments.post.developer.name}
          </div>
          <div>
            <h2>Tags</h2>{" "}
            {postAndComments.post.tags.map((t) => (
              <p>{t.tag}</p>
            ))}{" "}
          </div>
        </div>
        <h2>Content</h2>
        <ReactMarkdown source={postAndComments.post.content} />
        <h2>Comments</h2>
        <div>
          {postAndComments.comments.map((c) => {
            return (
              <div>
                <h4>{c.developer.name}</h4>
                <p>comment : {c.text}</p>
                <p>Created : {moment(c.createdAt).format("DD-MM-YYYY")}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
