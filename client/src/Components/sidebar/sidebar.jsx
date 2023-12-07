import axios from "axios";
import { useEffect, useState, useContext } from "react";
import "./sidebar.css";
import Profile1 from "../../assests/profile1.jpg";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../context/authContext";
import def_img from "../../assests/def_img2.jpg";

function Sidebar() {
  const { user } = useContext(AuthContext);
  const [cat, setCat] = useState([]);
  const PF = `http://localhost:3000/images/`;

  const location = useLocation();
  // Extract pathname from the location object
  const path = location.pathname;
  // Split the pathname into segments
  const segments = path.split("/");
  segments.pop(); // Remove the last segment
  const newpath = segments.join("/");

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get("/categories")
      .then((response) => {
        setCat(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          className="sideBarProfileImg"
          src={user && user.profilePic !== "" ? PF + user.profilePic : def_img}
          alt=""
        />
        <p>{user && user.username}</p>
      </div>

      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>

        <ul className="sideBarList">
          {cat.map((c) => {
            return (
              <li key={c._id} className="sideBarListItems">
                <Link
                  className="routerLink"
                  to={`${newpath}?category=${c.name}`}
                >
                  {c.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i class="sideBarIcons fa-brands fa-facebook "></i>

          <i class="sideBarIcons fa-brands fa-twitter "></i>

          <i class="sideBarIcons fa-brands fa-linkedin "></i>

          <i class="sideBarIcons fa-brands fa-instagram "></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
