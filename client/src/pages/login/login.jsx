import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useContext, useState } from "react";
import AuthContext from "../../context/authContext";
import axios from "axios";

function Login() {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    setError(false);
    event.preventDefault();

    try {
      const response = await axios.post(`/api/auth/login`, {
        username,
        password,
      });
      console.log("Login successful:", response.data);
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      setError(true);
    }
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1 className="text-center">Login</h1>
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
          <label htmlFor="floatingInput">Name</label>
        </div>
        {/* Password */}
        <div className="form-floating loginInput">
          <input
            type="password"
            className="form-control border-light-subtle shadow-sm"
            id="floatingPassword"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        {/* Button */}
        <div className="text-center loginInput d-grid gap-2 ">
          <button type="submit" className="btn btn-outline-primary  shadow-sm ">
            Login
          </button>
        </div>

        {error ? (
          <div className="error-message text-center loginInput">
            Login failed. Please check your information and try again.
          </div>
        ) : (
          <div className="text-center loginInput ">
            <span>Not a member? </span>
            <Link className="regLink text-success" to="/register">
              Register
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
