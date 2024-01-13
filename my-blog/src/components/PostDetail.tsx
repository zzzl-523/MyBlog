import { doc, getDoc } from "@firebase/firestore";
import ProfileBox from "components/ProfileBox";
import { db } from "firebaseApp";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PostProps } from "./PostList";
import UtilBox from "./UtilBox";

export default function PostDetail() {
  const [post, setPost] = useState<PostProps | null>(null);
  const params = useParams();

  const getPost = async (id: string) => {
    if (id) {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      setPost({ id: docSnap.id, ...(docSnap.data() as PostProps) });
    }
  };

  useEffect(() => {
    if (params?.id) {
      getPost(params?.id);
    }
  }, [params?.id]);
  return (
    <div className="post__detail">
      <div className="post__box">
        {post ? (
          <>
            <div className="post__title">{post?.title}</div>
            <ProfileBox email={post?.email} createdAt={post?.createdAt} />
            <UtilBox postEmail={post?.email} postId={post?.id} />

            <div className="post__summary">" {post?.summary} "</div>
            <div className="post__text post__text--pre-wrap">
              {post?.content}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
