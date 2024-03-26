import styles from "./register.module.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

import { registerUser } from "../../services/auth";
import { useDispatch } from "react-redux";

const RegisterComponent = () => {
  const { register, handleSubmit } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = (data) => {
    console.log(data);

    dispatch(registerUser(data))
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        enqueueSnackbar("Registered", { variant: "success" });
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Some error occurred! Refresh and try again!", {
          variant: "error",
        });
      });
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
            <input
              type="password"
              id="password-input"
              {...register("password")}
            />
          </label>

          <div className={styles.centered}>
          <button>Register</button>
          </div>
        </form>

        <p className={styles.switch}>
          Existing User? Click to <br /> <Link to={"/login"}>login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterComponent;
