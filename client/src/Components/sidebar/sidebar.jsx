import "./sidebar.css";
import Profile1 from "../../assests/profile1.jpg";
function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img className="sideBarProfileImg" src={Profile1} alt="" />
        <p>
          Do non incididunt id officia eu aliqua minim. Culpa mollit cillum
          reprehenderit occaecat aute qui quis voluptate deserunt. Veniam et
        </p>
      </div>

      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>

        <ul className="sideBarList">
          <li className="sideBarListItems">Tech</li>
          <li className="sideBarListItems">Cricket</li>
          <li className="sideBarListItems">Travel</li>
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
