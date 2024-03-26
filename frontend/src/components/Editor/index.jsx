import { useRef } from "react";
import BundledEditor from "../../BundledEditor";
import styles from "./editor.module.css";

export default function Editor() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className={styles.editorPage}>
      <div className={styles.back}>
        <h2>{"<-"}</h2>
      </div>
      <input type="text" placeholder="Title here..." />
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
        <button className={styles.save} onClick={log}>Save</button>
      </div>
    </div>
  );
}
