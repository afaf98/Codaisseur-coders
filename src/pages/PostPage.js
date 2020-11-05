import React, { useEffect } from "react";
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
    return <h1>Done</h1>;
  }
}
