import "./write.css";
import WriteImg from "../../assests/post2.jpg";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../context/authContext";
import axios from "axios";

function Write() {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleDescChange(event) {
    setDesc(event.target.value);
  }
  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  async function handleSubmit(event) {
    setError(false);
    event.preventDefault();
    let newPost = { username: user.username, title, description };

    if (file) {
      const data = new FormData();
      // data.append("name", file.name);
      data.append("file", file);
      try {
        const response = await axios.post("/upload", data);
        console.log(response.data);
        newPost.photo = response.data.fileName;
      } catch (error) {
        console.error("Error while uploading a photo:", error);
      }
    }
    try {
      const response = await axios.post("/posts", newPost);
      navigate(`/posts/${response.data._id}`);
    } catch (error) {
      console.error("Error while uploading a data:", error);
    }
  }

  return (
    <div className="write">
      <h1>Write new Post</h1>
      {/* Img */}
      {file && (
        <div className="writeImgDiv">
          <img className="writeImg" alt="" src={URL.createObjectURL(file)} />
        </div>
      )}

      <form className="mx-auto writeForm" onSubmit={handleSubmit}>
        {/* Input Title */}
        <div class="form-floating writeFormItem ">
          <input
            class="form-control border-light-subtle border-start-0 border-end-0  rounded-0"
            type="text"
            placeholder=""
            aria-label="default input example"
            onChange={handleTitleChange}
            value={title}
          />
          <label for="floatingInput">Title</label>
        </div>

        {/* TextArea */}
        <div class="form-floating writeFormItem">
          <textarea
            class="form-control border-light-subtle border-start-0 border-end-0  rounded-0"
            placeholder=""
            id="Textarea"
            style={{ height: "20rem" }}
            onChange={handleDescChange}
            value={description}
          ></textarea>
          <label for="floatingTextarea2">Tell your story...</label>
        </div>

        {/* InputImg */}
        <div class=" mb-3 writeInput writeFormItem">
          <label for="formFile" class="form-label ">
            Input Image
          </label>
          <input
            class="form-control border-light-subtle "
            type="file"
            id="formFile"
            onChange={handleFileChange}
          />
        </div>

        {/* Button */}
        <div className="text-center">
          <button type="submit" class="btn btn-outline-primary writeFormItem">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Write;
