import PostBox from "components/PostBox";
import { useState } from "react";

interface PostListProps {
  hasNavigation?: boolean;
}

export default function PostList({ hasNavigation = false }: PostListProps) {
  const [activeTab, setActiveTab] = useState("all");

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
        {[...Array(10)].map((item, index) => (
          <PostBox key={index} id={index} />
        ))}
      </div>
    </>
  );
}
