import styles from "./register.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

const RegisterComponent = () => {
  const { register, handleSubmit } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const handleForm = (data) => {
    console.log(data);
    enqueueSnackbar("Working!", {variant : "success"});
  };
  
  return (
    <div className={styles.register}>
      <div className={styles.registerCard}>
        <h1>Register</h1>

        <h4>Pleased to see you!</h4>
        <form className={styles.form} onSubmit={handleSubmit(handleForm)}>
          <label htmlFor="username-input">
            Username:
            <input type="text" id="username-input" {...register("username")} />
          </label>

          <label htmlFor="email-input">
            Email:
            <input type="email" id="email-input" {...register("email")} />
          </label>

          <label htmlFor="password-input">
            Password:
            <input type="password" id="password-input" {...register("password")} />
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
