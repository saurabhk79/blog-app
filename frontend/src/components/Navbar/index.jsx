import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1>Blogish</h1>

      <div className="nav-opts">
        <p>User</p>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
