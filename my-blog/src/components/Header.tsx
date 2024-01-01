import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        MyBlog
      </Link>

      <div>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시물</Link>
        <Link to="/profile">프로필</Link>
      </div>
    </header>
  );
}
