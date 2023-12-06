import axios from "axios";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    setError(false);
    event.preventDefault();
    await axios
      .post(`/api/auth/register`, { username, email, password })
      .then((response) => {
        console.log("Registration successful:", response.data);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Registration error:", error.response.data);
        setError(true);
        setUsername("");
        setEmail("");
        setPassword("");
      });
  }
  return (
    <div className="reg">
      <form className="regForm" onSubmit={handleSubmit}>
        <h1 className="text-center">Register</h1>
        {/* Input Name */}
        <div className="form-floating regInput ">
          <input
            type="text"
            className="form-control border-light-subtle  rounded shadow-sm"
            placeholder="floatingInput"
            id=""
            aria-label="default input example"
            onChange={handleUsernameChange}
            value={username}
          />
          <label for="floatingInput">Name</label>
        </div>
        {/*  Email */}
        <div className="form-floating  regInput">
          <input
            type="email"
            className="form-control border-light-subtle  rounded shadow-sm"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={handleEmailChange}
            value={email}
          />
          <label for="floatingInput">Email address</label>
        </div>

        {/* Password */}
        <div className="form-floating regInput">
          <input
            type="password"
            className="form-control border-light-subtle shadow-sm"
            id="floatingPassword"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />
          <label for="floatingPassword">Password</label>
        </div>

        {/* Button */}
        <div className="text-center regInput d-grid gap-2 ">
          <button type="submit" className="btn btn-outline-success  shadow-sm ">
            Register
          </button>
        </div>

        {error ? (
          <div className="error-message text-center loginInput">
            Registration failed. Please check your information and try again.
          </div>
        ) : (
          <div className="text-center loginInput ">
            <span>Already a member? </span>
            <Link className="loginLink text-primary" to="/login">
              Login
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default Register;
