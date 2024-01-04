import { Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/home";
import LoginPage from "pages/login";
import PostListPage from "pages/posts";
import PostDetailPage from "pages/posts/detail";
import PostEditPage from "pages/posts/edit";
import PostNewPage from "pages/posts/new";
import ProfilePage from "pages/profile";
import SignupPage from "pages/signup";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/new" element={<PostNewPage />} />
        <Route path="/posts/edit/:id" element={<PostEditPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};

export default Router;
