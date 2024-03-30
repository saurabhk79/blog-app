import "./App.css";

import { Routes, Route } from "react-router-dom";
import {
  BlogPage,
  CommentPage,
  EditorPage,
  Home,
  Login,
  MyBlogsPage,
  Register,
} from "./pages";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/comment/:blogId" element={<CommentPage />} />
        <Route path="/user/blog" element={<MyBlogsPage />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
