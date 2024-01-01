import React from "react";
import { Link } from "react-router-dom";
import PostBox from "./PostBox";
import ProfileBox from "./ProfileBox";

interface PostDetailProps {
  id: number;
}
export default function PostDetail({ id }: PostDetailProps) {
  return (
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">게시글 {id}</div>
        <ProfileBox />

        <div className="post__util-box">
          <div className="post__delete">삭제</div>
          <div className="post__edit">수정</div>
        </div>

        <div className="post__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  );
}
