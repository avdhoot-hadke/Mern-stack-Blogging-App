import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <form className="loginForm">
        <h1 className="text-center">Login</h1>
        {/*  Email */}
        <div class="form-floating  loginInput">
          <input
            type="email"
            class="form-control border-light-subtle  rounded shadow-sm"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>

        {/* Password */}
        <div class="form-floating loginInput">
          <input
            type="password"
            class="form-control border-light-subtle shadow-sm"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        {/* Button */}
        <div className="text-center loginInput d-grid gap-2 ">
          <button type="button" class="btn btn-outline-primary  shadow-sm ">
            Login
          </button>
        </div>
        <div className="text-center loginInput ">
          <span>Not a member? </span>
          <Link className="regLink text-success" to="/register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
