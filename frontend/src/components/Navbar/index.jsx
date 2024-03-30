import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
      <h1>Blogish</h1>

      <div className={styles.navOpts}>
        <button onClick={() => navigate("/user/blog")}>My blogs</button>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
