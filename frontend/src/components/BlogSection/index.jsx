import { useGetAllBlogsQuery } from "../../services/blog";
import BlogCard from "../BlogCard";
import styles from "./blogsection.module.css";

const BlogSection = () => {
  const { data, isLoading } = useGetAllBlogsQuery();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className={styles.blogs}>
      <h2>List of blogs</h2>
      {data.map((val, idx) => {
        return <BlogCard key={idx} data={val} />;
      })}
    </div>
  );

};

export default BlogSection;
