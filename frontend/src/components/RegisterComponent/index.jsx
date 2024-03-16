import { Link } from "react-router-dom";
import styles from "./register.module.css";

const RegisterComponent = () => {
  return (
    <div className={styles.register}>
      <div className={styles.registerCard}>
        <h1>Register</h1>

        <h4>Pleased to see you!</h4>
        <form className={styles.form}>
          <label htmlFor="username-input">
            Username:
            <input type="text" id="username-input" />
          </label>

          <label htmlFor="email-input">
            Email:
            <input type="email" id="email-input" />
          </label>

          <label htmlFor="password-input">
            Password:
            <input type="password" id="password-input" />
          </label>

          <button>Register</button>
        </form>

        <p className={styles.switch}>
          Existing User? Click to <br /> <Link to={"/login"}>login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterComponent;
