import { useContext } from "react";
import AuthContext from "../../context/authContext";
import "./topbar.css";
import { Link, useParams } from "react-router-dom";

function TopBar() {
  const { user, setUser } = useContext(AuthContext);

  function handleLogout() {
    setUser(null);
    localStorage.removeItem("user");
  }
  return (
    <>
      <nav className=" top navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav px-5  mb-2 mb-lg-0">
              <a className="nav-link" href="#">
                <i class="fa-brands fa-facebook "></i>
              </a>

              <a className="nav-link" href="#">
                <i class="fa-brands fa-twitter "></i>
              </a>

              <a className="nav-link" href="#">
                <i class="fa-brands fa-linkedin "></i>
              </a>

              <a className="nav-link" href="#">
                <i class="fa-brands fa-instagram "></i>
              </a>
            </div>

            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link">
                  <Link className="routerLink" to="/">
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link className="routerLink" to="/">
                    About
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link className="routerLink" to="/">
                    Contact
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link className="routerLink" to="/write">
                    Write
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link className="routerLink" to="/" onClick={handleLogout}>
                    {user != null && "Logout"}
                  </Link>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav px-5 ">
              <li className=" pe-3 ">
                {user == null ? (
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Link className="routerLink" to="/login">
                        Login
                      </Link>
                    </a>
                  </li>
                ) : (
                  <img alt="" className="topbar-img" src={user.profilePic} />
                )}
              </li>
              <li className="pt-2 searchIcon">
                <i class="fa-solid fa-magnifying-glass fa-lg"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopBar;
