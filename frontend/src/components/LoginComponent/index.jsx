import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

import { useDispatch } from "react-redux";
import { loginUser } from "../../services/auth";

const LoginComponent = () => {
  const { register, handleSubmit } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = async (data) => {
    console.log(data);

    dispatch(loginUser(data))
    .then((data) => {
      console.log(data);
      setTimeout(() => {
        navigate("/");
      }, 2000);
      enqueueSnackbar("Registered", { variant: "success" });
    })
    .catch((err) => {
      console.log(err);
      enqueueSnackbar("Some error occurred! Refresh and try again!", {
        variant: "error",
      });
    });
    enqueueSnackbar("Working!", { variant: "success" });
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginCard}>
        <h1>Login</h1>

        <h4>Welcome back!</h4>
        <form className={styles.form} onSubmit={handleSubmit(handleForm)}>
          <label htmlFor="email-input">
            Email:
            <input type="text" id="email-input" {...register("email")} />
          </label>

          <label htmlFor="password-input">
            Password:
            <input
              type="password"
              id="password-input"
              {...register("password")}
            />
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
