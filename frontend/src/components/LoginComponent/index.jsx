import { Link } from "react-router-dom";
import styles from "./login.module.css";

const LoginComponent = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginCard}>
        <h1>Login</h1>

        <h4>Welcome back!</h4>
        <form className={styles.form}>
          <label htmlFor="email-input">
            Email:
            <input type="text" id="email-input" />
          </label>

          <label htmlFor="password-input">
            Password:
            <input type="password" id="password-input" />
          </label>

          <button>Login</button>
        </form>

        <p className={styles.switch}>
          New User? Click to <br /> <Link to={"/register"}>register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
