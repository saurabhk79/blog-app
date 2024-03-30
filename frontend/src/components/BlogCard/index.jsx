/* eslint-disable react/prop-types */
import styles from "./blogcard.module.css";
import {  useNavigate } from "react-router-dom";

const BlogCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <h3>{data.title}</h3>
      <p>{data.content.slice(0, 24)}...</p>

      <div className={styles.centered}>
        <button onClick={() => navigate(`/comment/${data._id}`)}>Comments</button>
        <button onClick={() => navigate(`/blog/${data._id}`)}>Show blog</button>
      </div>
    </div>
  );
};

export default BlogCard;
