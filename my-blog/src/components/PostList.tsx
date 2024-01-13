import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import PostBox from "components/PostBox";
import AuthContext from "context/AuthContext";
import { db } from "firebaseApp";
import { useContext, useEffect, useState } from "react";

interface PostListProps {
  hasNavigation?: boolean;
  defaultTab?: string;
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

type TabType = "all" | "my" | string;
type OrderType = "latest" | "oldest";

export default function PostList({
  hasNavigation = false,
  defaultTab = "all",
}: PostListProps) {
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab);
  const [activeOrder, setActiveOrder] = useState<OrderType>("latest");
  const [posts, setPosts] = useState<PostProps[]>([]);

  const user = useContext(AuthContext)?.user;

  const getPosts = async () => {
    let postsRef = collection(db, "posts");
    let postsQuery;

    if (activeTab === "my" && user) {
      // 나의 글만 필터링
      console.log("my만");
      // 최신순
      if (activeOrder === "latest") {
        postsQuery = query(
          postsRef,
          where("uid", "==", user?.uid),
          orderBy("uid", "asc"),
          orderBy("createdAt", "desc")
        );
      }
      // 오래된순
      else {
        postsQuery = query(
          postsRef,
          where("uid", "==", user?.uid),
          orderBy("uid", "asc"),
          orderBy("createdAt", "asc")
        );
      }
    } else {
      // 전체 글 보여주기 (최신순)
      console.log("전체");
      // 최신순
      if (activeOrder === "latest") {
        postsQuery = query(postsRef, orderBy("createdAt", "desc"));
      }
      // 오래된순
      else {
        postsQuery = query(postsRef, orderBy("createdAt", "asc"));
      }
    }
    const datas = await getDocs(postsQuery);

    setPosts([]);
    datas?.forEach((doc) => {
      const dataObj = { ...doc.data(), id: doc.id };
      setPosts((prev) => [...prev, dataObj as PostProps]);
    });
  };

  useEffect(() => {
    getPosts();
  }, [activeOrder, activeTab]);

  return (
    <>
      <div className="post__navigation">
        {hasNavigation && (
          <div className="post__navigation-block">
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
        <div className="post__navigation-block">
          <div
            role="presentation"
            onClick={() => setActiveOrder("latest")}
            className={
              activeOrder === "latest" ? "post__navigation-active" : ""
            }
          >
            최신순
          </div>
          <div
            role="presentation"
            onClick={() => setActiveOrder("oldest")}
            className={
              activeOrder === "oldest" ? "post__navigation-active" : ""
            }
          >
            오래된순
          </div>
        </div>
      </div>

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
