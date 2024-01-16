import { Link } from "react-router-dom";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

export default function Header() {
  const theme = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="header__block">
        <Link to="/" className="header__logo">
          MyBlog
        </Link>
        <div className="theme-icon">
          {theme.theme === "light" ? (
            <BsSun className="theme-icon" onClick={theme.toggleMode} />
          ) : (
            <BsMoonFill className="theme-icon" onClick={theme.toggleMode} />
          )}
        </div>
      </div>

      <div>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시물</Link>
        <Link to="/profile">프로필</Link>
      </div>
    </header>
  );
}
