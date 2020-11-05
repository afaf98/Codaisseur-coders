import React from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { id } = useParams();
  console.log("Useparams id", id);
  return <div>Hello from PostPage</div>;
}
