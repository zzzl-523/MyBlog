import React from "react";
import { Link } from "react-router-dom";
import PostBox from "./PostBox";

export default function PostList() {
  return (
    <div className="post__list">
      {[...Array(10)].map((item, index) => (
        <PostBox key={index} id={index} />
      ))}
    </div>
  );
}
