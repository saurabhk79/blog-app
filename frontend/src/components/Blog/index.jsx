import { useParams } from "react-router-dom";
import styles from "./blog.module.css";
import { useGetBlogByIdQuery } from "../../services/blog";

const Blog = () => {
  const params = useParams();

  const { data, isLoading } = useGetBlogByIdQuery(params.id);

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
