/* eslint-disable react/prop-types */
import styles from "./comment.module.css";

const Comment = ({ data }) => {
  return <div className={styles.comment}>{data.comment}</div>;
};

export default Comment;
