import BlogCard from "../BlogCard";
import styles from "./blogsection.module.css";

const BlogSection = () => {
  return (
    <div className={styles.blogs}>
      <h2>List of blogs</h2>
      {Array(10)
        .fill(-1)
        .map((val, idx) => {
          return <BlogCard key={idx} />;
        })}
    </div>
  );
};

export default BlogSection;
