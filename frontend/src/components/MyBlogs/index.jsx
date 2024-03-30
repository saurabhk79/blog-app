import { Link, useNavigate } from "react-router-dom";
import { useGetUserBlogsQuery } from "../../services/blog";
import BlogCard from "../BlogCard";
import styles from "./myblogs.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const MyBlogs = () => {
  const { data, isLoading } = useGetUserBlogsQuery();

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
    <div className={styles.myblogs}>
      <Link to={"/"} className={styles.back}>
        <h2>{"<-"}</h2>
      </Link>
      <h1>MyBlogs</h1>
      <Link to={"/editor"} className={styles.create}>
        Create Blog +
      </Link>

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
