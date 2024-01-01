import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PostDetail from "../../components/PostDetail";

export default function PostDetailPage() {
  return (
    <>
      <Header />
      <PostDetail id={0} />
      <Footer />
    </>
  );
}
