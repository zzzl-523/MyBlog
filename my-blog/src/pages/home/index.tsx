import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시물</Link>
        <Link to="/profile">프로필</Link>
      </header>
      <div className="post-list">Post List</div>
      <footer>
        <div>Menu 1</div>
        <div>Menu 2</div>
        <div>Menu 3</div>
      </footer>
    </div>
  );
}
