import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1>Blogish</h1>

      <div className={styles.navOpts}>
        <button>My blogs</button>
        <button>Logout</button>
        <p>User</p>
      </div>
    </nav>
  );
};

export default Navbar;
