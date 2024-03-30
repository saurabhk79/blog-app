import Blog from "./components/Blog";
import CommentSection from "./components/CommentSection";
import Editor from "./components/Editor";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";

export function Home() {
  return <HomeComponent />;
}

export function Login() {
  return <LoginComponent />;
}

export function Register() {
  return <RegisterComponent />;
}

export function EditorPage() {
  return <Editor />;
}

export function BlogPage() {
  return <Blog />;
}

export function CommentPage() {
  return <CommentSection />;
}

