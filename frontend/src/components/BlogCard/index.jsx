import styles from "./blogcard.module.css";

const BlogCard = () => {
  return (
    <div className={styles.card}>
      <h3>Title</h3>
      <p>Some description here!</p>
      <hr />
      <b>by Username</b>
    </div>
  );
};

export default BlogCard;
