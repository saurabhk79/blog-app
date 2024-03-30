import { useNavigate, useParams } from "react-router-dom";
import Comment from "../Comment";
import styles from "./commentsection.module.css";
import {
  useAddCommentMutation,
  useGetCommentsQuery,
} from "../../services/blog";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CommentSection = () => {
  const params = useParams();
  const { data, isLoading, refetch } = useGetCommentsQuery(params.blogId);
  // eslint-disable-next-line no-unused-vars
  const [addComment, result] = useAddCommentMutation();
  const [text, setText] = useState("");

  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLogged);

  const handleAddComment = (e) => {
    e.preventDefault();

    addComment({ id: params.blogId, comment: text });
    refetch();
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  if (isLoading) return <h1>Loading...</h1>;

  console.log(data);
  return (
    <div className={styles.commentsection}>
      <div className={styles.back} onClick={() => navigate(-1)}>
        <h2>{"<-"}</h2>
      </div>
      <h1>Comments</h1>

      <form className={styles.form} onSubmit={handleAddComment}>
        <input
          type="text"
          placeholder="Type your comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit" disabled={text.length === 0}>
          Submit
        </button>
      </form>

      {data.map((val) => {
        return <Comment key={val._id} data={val} />;
      })}
    </div>
  );
};

export default CommentSection;
