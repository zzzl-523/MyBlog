import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PostList from "../../components/PostList";

export default function PostListPage() {
  return (
    <>
      <Header />

      <div className="postlist__box">
        <div className="postlist__title">전체 게시물</div>
        <PostList />
      </div>
      <Footer />
    </>
  );
}
