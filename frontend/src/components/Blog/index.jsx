import { useNavigate, useParams } from "react-router-dom";
import styles from "./blog.module.css";
import { useGetBlogByIdQuery } from "../../services/blog";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Blog = () => {
  const params = useParams();
  const { data, isLoading } = useGetBlogByIdQuery(params.id);
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

  return (
    <div className={styles.blog}>
      <div className={styles.wrapper}>
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{__html:data.content}}></div>
      </div>
    </div>
  );
};

export default Blog;
