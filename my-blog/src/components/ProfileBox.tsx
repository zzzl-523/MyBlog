interface ProfileBoxProps {
  email: string;
  createdAt: string;
}
export default function ProfileBox({ email, createdAt }: ProfileBoxProps) {
  return (
    <div className="post__profile-box">
      <div className="post__profile" />
      <div className="post__author-name">{email}</div>
      <div className="post__date">{createdAt}</div>
    </div>
  );
}
