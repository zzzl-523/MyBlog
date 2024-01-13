import {
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "@firebase/firestore";
import AuthContext from "context/AuthContext";
import { db } from "firebaseApp";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { PostProps } from "./PostList";

// post 있으면 수정
//      없으면 생성

export default function PostForm() {
  const [post, setPost] = useState<PostProps | null>(null);
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const user = useContext(AuthContext)?.user;
  const navigate = useNavigate();

  const params = useParams();

  // 제출 | 수정
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (post && post.id) {
        const postRef = doc(db, "posts", post?.id);
        await updateDoc(postRef, {
          title: title,
          summary: summary,
          content: content,
          updatedAt: new Date()?.toLocaleDateString(),
        });

        toast.success("게시글을 수정했습니다");
        navigate(`/posts/${post?.id}`);
      } else {
        await addDoc(collection(db, "posts"), {
          title: title,
          summary: summary,
          content: content,
          createdAt: new Date()?.toLocaleDateString(),
          email: user?.email,
          uid: user?.uid,
        });
        toast.success("게시글을 생성했습니다");
        navigate("/");
      }
    } catch (e: any) {
      console.log(e);
      toast.error(e?.code);
    }
  };

  // 값 변경
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = e;

    if (name === "title") {
      setTitle(value);
    }
    if (name === "summary") {
      setSummary(value);
    }
    if (name === "content") {
      setContent(value);
    }
  };

  // 수정을 위해 post 불러오기
  const getPost = async (id: string) => {
    if (id) {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      setPost({ id: docSnap.id, ...(docSnap.data() as PostProps) });
    }
  };

  useEffect(() => {
    if (params?.id) {
      getPost(params?.id);
    }
  }, [params?.id]);
  useEffect(() => {
    if (post) {
      setTitle(post?.title);
      setSummary(post?.summary);
      setContent(post?.content);
    }
  }, [post]);

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="form__block">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          onChange={onChange}
          value={title}
        />
      </div>
      <div className="form__block">
        <label htmlFor="summary">요약</label>
        <input
          type="text"
          name="summary"
          id="summary"
          required
          onChange={onChange}
          value={summary}
        />
      </div>
      <div className="form__block">
        <label htmlFor="content">내용</label>
        <textarea
          name="content"
          id="content"
          required
          onChange={onChange}
          value={content}
        />
      </div>
      <div className="form__block">
        <input
          type="submit"
          value={post ? "수정" : "제출"}
          className="form__btn--submit"
        />
      </div>
    </form>
  );
}
