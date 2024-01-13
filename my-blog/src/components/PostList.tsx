import { collection, getDocs } from "@firebase/firestore";
import PostBox from "components/PostBox";
import { db } from "firebaseApp";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface PostListProps {
  hasNavigation?: boolean;
}
export interface PostProps {
  id?: string;
  title: string;
  summary: string;
  content: string;
  email: string;
  createdAt: string;
  updatedAt?: string;
  uid: string;
}

export default function PostList({ hasNavigation = false }: PostListProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [posts, setPosts] = useState<PostProps[]>([]);

  const getPosts = async () => {
    const datas = await getDocs(collection(db, "posts"));
    setPosts([]);
    datas?.forEach((doc) => {
      const dataObj = { ...doc.data(), id: doc.id };
      setPosts((prev) => [...prev, dataObj as PostProps]);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "post__navigation-active" : ""}
          >
            전체
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab === "my" ? "post__navigation-active" : ""}
          >
            나의 글
          </div>
        </div>
      )}

      <div className="post__list">
        {posts?.length > 0 ? (
          posts?.map((post, id) => <PostBox key={id} post={post} />)
        ) : (
          <div className="post__no-post">게시글이 없습니다</div>
        )}
      </div>
    </>
  );
}
