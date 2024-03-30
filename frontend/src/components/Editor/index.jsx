import { useRef, useState } from "react";
import BundledEditor from "../../BundledEditor";
import styles from "./editor.module.css";
import { useMakeBlogMutation } from "../../services/blog";
import { Link } from "react-router-dom";

export default function Editor() {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [add, result] = useMakeBlogMutation();

  const log = () => {
    if (editorRef.current) {
      let content = editorRef.current.getContent();
      console.log(content);
      const { data, isLoading } = add({ title, content });

      console.log(data, isLoading);
    }
  };

  return (
    <div className={styles.editorPage}>
      <Link to={"/user/blog"} className={styles.back}>
        <h2>{"<-"}</h2>
      </Link>
      <input
        type="text"
        placeholder="Title here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <BundledEditor
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>Start from here. Clear this first.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "anchor",
              "autolink",
              "help",
              "image",
              "link",
              "lists",
              "searchreplace",
              "table",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <button
          className={styles.save}
          onClick={log}
          disabled={title.length === 0}
        >
          Save
        </button>
      </div>
    </div>
  );
}
