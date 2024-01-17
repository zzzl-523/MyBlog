import { Link, useNavigate } from "react-router-dom";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

export default function Header() {
  const theme = useContext(ThemeContext);

  const navigate = useNavigate();
  const reload = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="header__block">
        <div className="header__logo" onClick={reload}>
          MyBlog
        </div>
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
