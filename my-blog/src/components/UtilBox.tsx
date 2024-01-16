import { deleteDoc, doc } from "@firebase/firestore";
import AuthContext from "context/AuthContext";
import { db } from "firebaseApp";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CATEGORIES, CategoryType } from "./PostList";

interface UtilBoxProps {
  postEmail: string;
  postId: string | undefined;
  postCategory?: CategoryType;
}
export default function UtilBox({
  postEmail,
  postId,
  postCategory,
}: UtilBoxProps) {
  const user = useContext(AuthContext)?.user;
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirm = window.confirm("정말 삭제하시겠습니까?");
    if (confirm && postId) {
      const docRef = doc(db, "posts", postId);
      await deleteDoc(docRef);
      toast.success("게시글을 삭제하였습니다");
      navigate("/");
      window.location.reload();
    }
  };
  return (
    <>
      {postEmail === user?.email && (
        <div className="post__util-box">
          <div className="post__util-block">
            {postCategory && (
              <div className="post__category">{postCategory}</div>
            )}
            <div className="post__util-btns">
              <div className="post__delete" onClick={handleDelete}>
                삭제
              </div>
              <Link to={`/posts/edit/${postId}`} className="post__edit">
                수정
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
