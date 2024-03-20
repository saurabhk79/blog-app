import BlogCard from "../BlogCard";
import styles from "./blogsection.module.css";

const BlogSection = () => {
  return (
    <div className={styles.blogs}>
      {Array(10).map((val, idx) => {
        return <BlogCard key={idx} />;
      })}
    </div>
  );
};

export default BlogSection;
