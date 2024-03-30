import { Link } from "react-router-dom";
import { useGetUserBlogsQuery } from "../../services/blog";
import BlogCard from "../BlogCard";
import styles from "./myblogs.module.css";

const MyBlogs = () => {
  const { data, isLoading } = useGetUserBlogsQuery();

  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);
  return (
    <div className={styles.myblogs}>
      <h1>MyBlogs</h1>
      <Link to={"/editor"} className={styles.create}>Create Blog +</Link>

      {!data.length ? (
        <div className={styles.nothing}>No blogs found!</div>
      ) : (
        <>
          {data.map((val, idx) => {
            return <BlogCard key={idx} data={val} isMyBlog={true} />;
          })}
        </>
      )}
    </div>
  );
};

export default MyBlogs;
