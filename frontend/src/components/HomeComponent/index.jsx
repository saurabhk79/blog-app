import BlogSection from "../BlogSection";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import styles from "./home.module.css";

const HomeComponent = () => {
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
