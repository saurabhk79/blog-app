import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../services/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <nav className={styles.nav}>
      <h1>Blogish</h1>

      <div className={styles.navOpts}>
        <button onClick={() => navigate("/user/blog")}>My blogs</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
