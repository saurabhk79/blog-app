import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import styles from "./home.module.css";

const HomeComponent = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomeComponent;
