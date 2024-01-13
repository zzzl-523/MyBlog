import AuthContext from "context/AuthContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

interface UtilBoxProps {
  postEmail: string;
  postId: string | undefined;
}
export default function UtilBox({ postEmail, postId }: UtilBoxProps) {
  const user = useContext(AuthContext)?.user;

  const handleDelete = async () => {
    console.log("delete", postId);
  };
  return (
    <>
      {postEmail === user?.email && (
        <div className="post__util-box">
          <div className="post__delete" onClick={handleDelete}>
            삭제
          </div>
          <Link to={`/posts/edit/${postId}`} className="post__edit">
            수정
          </Link>
        </div>
      )}
    </>
  );
}
