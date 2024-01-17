import { Link } from "react-router-dom";
import ProfileBox from "components/ProfileBox";
import { PostProps } from "./PostList";
import UtilBox from "./UtilBox";

interface PostBoxProps {
  post: PostProps;
}
export default function PostBox({ post }: PostBoxProps) {
  return (
    <div className="post__box">
      <Link to={`/posts/${post?.id}`}>
        <ProfileBox email={post?.email} createdAt={post?.createdAt} />
        <div className="post__title">{post?.title}</div>
        <div className="post__text">{post?.summary}</div>
      </Link>
      <UtilBox
        postEmail={post?.email}
        postId={post?.id}
        postCategory={post?.category}
      />
    </div>
  );
}
