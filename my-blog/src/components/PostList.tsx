import PostBox from "components/PostBox";

interface PostListProps {
  hasNavigation?: boolean;
}

export default function PostList({ hasNavigation = false }: PostListProps) {
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div className="post__navigation-active">전체</div>
          <div>나의 글</div>
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
