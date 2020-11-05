import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../postPage/actions";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log("Useparams id", id);

  useEffect(() => {
    dispatch({ type: "Test", payload: "Test" });
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return <div>Hello from PostPage</div>;
}
