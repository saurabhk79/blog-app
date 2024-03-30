import { useNavigate, useParams } from "react-router-dom";
import Comment from "../Comment";
import styles from "./commentsection.module.css";
import { useGetCommentsQuery } from "../../services/blog";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CommentSection = () => {
  const params = useParams();
  const { data, isLoading } = useGetCommentsQuery(params.blogId);

  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLogged);

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
      <h1>Comments</h1>

      <form className={styles.form}>
        <input type="text" placeholder="Type your comment..." />

        <button>Submit</button>
      </form>

      {data.map((val) => {
        return <Comment key={val._id} data={val} />;
      })}
    </div>
  );
};

export default CommentSection;
