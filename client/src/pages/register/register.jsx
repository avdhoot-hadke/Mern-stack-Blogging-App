import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  return (
    <div className="reg">
      <form className="regForm">
        <h1 className="text-center">Register</h1>
        {/* Input Name */}
        <div class="form-floating regInput ">
          <input
            class="form-control border-light-subtle  rounded shadow-sm"
            type="text"
            placeholder=""
            aria-label="default input example"
          />
          <label for="floatingInput">Name</label>
        </div>
        {/*  Email */}
        <div class="form-floating  regInput">
          <input
            type="email"
            class="form-control border-light-subtle  rounded shadow-sm"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>

        {/* Password */}
        <div class="form-floating regInput">
          <input
            type="password"
            class="form-control border-light-subtle shadow-sm"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        {/* Button */}
        <div className="text-center regInput d-grid gap-2 ">
          <button type="button" class="btn btn-outline-success  shadow-sm ">
            Register
          </button>
        </div>

        <div className="text-center loginInput ">
          <span>Already a member? </span>
          <Link className="loginLink text-primary" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
