import { useSelector } from "react-redux";
import BlogSection from "../BlogSection";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomeComponent = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLogged);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <div className={styles.home}>
      <Navbar />
      <Hero />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default HomeComponent;
