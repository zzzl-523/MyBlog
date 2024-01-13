import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProfileBox from "components/ProfileBox";
import AuthContext from "context/AuthContext";
import { PostProps } from "./PostList";
import UtilBox from "./UtilBox";

interface PostBoxProps {
  post: PostProps;
}
export default function PostBox({ post }: PostBoxProps) {
  const user = useContext(AuthContext)?.user;
  return (
    <div className="post__box">
      <Link to={`/posts/${post?.id}`}>
        <ProfileBox email={post?.email} createdAt={post?.createdAt} />
        <div className="post__title">{post?.title}</div>
        <div className="post__text">{post?.summary}</div>
      </Link>
      <UtilBox postEmail={post?.email} postId={post?.id} />
    </div>
  );
}
