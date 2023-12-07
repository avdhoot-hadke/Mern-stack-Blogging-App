import "./settings.css";
import Sidebar from "../../Components/sidebar/sidebar";
import ProfileImg from "../../assests/profile1.jpg";
import { useContext, useState } from "react";
import AuthContext from "../../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Settings() {
  const { user, setUser } = useContext(AuthContext);

  const [usernameUpdate, setNameUpdate] = useState(user.username);
  const [emailUpdate, setEmailUpdate] = useState(user.email);
  const [passwordUpdate, setPasswordUpdate] = useState("");
  const [fileUpdate, setFileUpdate] = useState(null);
  const navigate = useNavigate();
  const PF = `http://localhost:3000/images/`;

  function handleUsernameUpdate(e) {
    setNameUpdate(e.target.value);
  }
  function handleEmailUpdate(e) {
    setEmailUpdate(e.target.value);
  }
  function handlePasswordUpdate(e) {
    setPasswordUpdate(e.target.value);
  }
  function handleFileUpdate(e) {
    setFileUpdate(e.target.files[0]);
  }
  async function handleSubmitUserUpdate(e) {
    e.preventDefault();
    let updatedUser = {
      id: user._id,
      username: user.username,
      email: emailUpdate,
      password: passwordUpdate,
    };

    if (fileUpdate !== null) {
      if (user.profilePic) {
        await axios.delete(`/upload/${user.profilePic}`);
      }
      const data = new FormData();
      data.append("file", fileUpdate);
      try {
        const response = await axios.post("/upload", data);
        console.log(response.data);
        updatedUser.profilePic = response.data.fileName;
      } catch (error) {
        console.error("Error while uploading a photo:", error);
      }
    }

    try {
      console.log(updatedUser);
      const response = await axios.put(`/user/${user._id}`, updatedUser);
      console.log(response.data);
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate(`/`);
    } catch (error) {
      console.error("Error while uploading a data:", error);
    }
  }

  async function handleDelete(e) {
    e.preventDefault();
    try {
      const response = await axios.delete(`/user/${user._id}`, {});
      console.log(response.data);

      if (response.status === 200 && user.profilePic !== "") {
        const imageResponse = await axios.delete(`/upload/${user.profilePic}`);
        console.log(imageResponse);
      }
      setUser(null);
      localStorage.removeItem("user");
      navigate(`/`);
    } catch (error) {
      console.error("Error while deleting post:", error);
    }
  }
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">
            <button className="btn btn-outline-danger" onClick={handleDelete}>
              Delete Account
            </button>
          </span>
        </div>

        <form className="settingsForm" onSubmit={handleSubmitUserUpdate}>
          <div className="settingsInput text-center">
            {user.profilePic ? (
              <img className="settingsPP" alt="" src={PF + user.profilePic} />
            ) : (
              <i class="fa-regular fa-user fa-2xl"></i>
            )}
          </div>

          {/* Input Name */}
          <div class="form-floating settingsInput ">
            <input
              class="form-control border-light-subtle border-start-0 border-end-0  rounded-0"
              type="text"
              placeholder=""
              aria-label="default input example"
              value={usernameUpdate}
              onChange={handleUsernameUpdate}
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
              value={emailUpdate}
              onChange={handleEmailUpdate}
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
              value={passwordUpdate}
              onChange={handlePasswordUpdate}
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
              onChange={handleFileUpdate}
            />
          </div>

          {/* Button */}
          <div className="text-center settingsInput">
            <button type="submit" class="btn btn-outline-primary writeFormItem">
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
