import Footer from "components/Footer";
import Header from "components/Header";
import PostForm from "components/PostForm";

export default function PostNewPage() {
  return (
    <div className="newpost__box">
      <Header />
      <PostForm />
    </div>
  );
}
