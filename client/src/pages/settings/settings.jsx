import "./settings.css";
import Sidebar from "../../Components/sidebar/sidebar";
import ProfileImg from "../../assests/profile1.jpg";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form className="settingsForm">
          <div className="settingsInput text-center">
            <img className="settingsPP" alt="" src={ProfileImg} />
          </div>

          {/* Input Name */}
          <div class="form-floating settingsInput ">
            <input
              class="form-control border-light-subtle border-start-0 border-end-0  rounded-0"
              type="text"
              placeholder=""
              aria-label="default input example"
            />
            <label for="floatingInput">Name</label>
          </div>

          {/*  Email */}
          <div class="form-floating  settingsInput">
            <input
              type="email"
              class="form-control border-light-subtle border-start-0 border-end-0  rounded-0"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>

          {/* Password */}
          <div class="form-floating settingsInput">
            <input
              type="password"
              class="form-control border-light-subtle border-start-0 border-end-0  rounded-0"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          {/* Input Img */}
          <div class=" mb-3 settingsInput">
            <label for="formFile" class="form-label ">
              Choose Photo
            </label>
            <input
              class="form-control border-light-subtle "
              type="file"
              id="formFile"
            />
          </div>

          {/* Button */}
          <div className="text-center settingsInput">
            <button type="button" class="btn btn-outline-primary writeFormItem">
              Update
            </button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
