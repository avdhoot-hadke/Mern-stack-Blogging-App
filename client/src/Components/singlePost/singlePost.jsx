import { useContext, useEffect, useState } from "react";
import axios, { Axios } from "axios";
import "./singlePost.css";
import PostImg from "../../assests/post1.jpg";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext";

function SinglePost() {
  const { user } = useContext(AuthContext);
  const [postData, setPostData] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const { postId } = useParams();
  const navigate = useNavigate();
  //Update########################################################################
  const [error, setError] = useState(false);
  const [titleUpdate, setTitleUpdate] = useState("");
  const [descriptionUpdate, setDescUpdate] = useState("");
  const [fileUpdate, setFileUpdate] = useState(null);

  useEffect(() => {
    axios
      .get(`/posts/${postId}`)
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [updateMode]);

  const { username, title, categories, createdAt, description, photo, _id } =
    postData;

  const PF = `http://localhost:3000/images/`;

  //Delete############################################################
  async function handleDelete() {
    try {
      const response = await axios.delete(`/posts/${_id}`, {
        data: { username: user.username }, // Include the username in the request body
      });
      console.log(response.data);

      if (response.status === 200) {
        const imageResponse = await axios.delete(`/upload/${photo}`);
        console.log(imageResponse);
      }
      navigate(`/`);
    } catch (error) {
      console.error("Error while deleting post:", error);
    }
  }

  //Update################################################################
  function handleFileUpdate(e) {
    setFileUpdate(e.target.files[0]);
  }
  function handleTitleUpdate(e) {
    setTitleUpdate(e.target.value);
  }
  function handleDescUpdate(e) {
    setDescUpdate(e.target.value);
  }
  async function handleSubmitUpdate(e) {
    e.preventDefault();
    let updatedPost = {
      username: user.username,
      title: titleUpdate === "" ? title : titleUpdate,
      description: descriptionUpdate === "" ? description : descriptionUpdate,
    };

    if (fileUpdate !== null) {
      await axios.delete(`/upload/${photo}`);
      const data = new FormData();
      data.append("file", fileUpdate);
      try {
        const response = await axios.post("/upload", data);
        console.log(response.data);
        updatedPost.photo = response.data.fileName;
      } catch (error) {
        console.error("Error while uploading a photo:", error);
      }
    } else {
      updatedPost.photo = photo;
    }

    try {
      console.log(updatedPost);
      const response = await axios.put(`/posts/${_id}`, updatedPost);
      setUpdateMode(false);
      // navigate(`/posts/${response.data._id}`);
    } catch (error) {
      console.error("Error while uploading a data:", error);
    }
  }

  //RETURN###############################################################

  return (
    <>
      {!updateMode ? (
        <div className="singlePost">
          <div className="singlePostWrapper">
            {photo && <img className="postImage" alt="" src={PF + photo} />}

            <h1 className="singlePostTitle">
              {title}
              {username === user?.username && (
                <div className="singlePostEdit">
                  <i
                    className="fa-regular fa-pen-to-square singlePostIcon"
                    onClick={() => {
                      setUpdateMode(true);
                    }}
                  ></i>
                  <i
                    className="fa-solid fa-trash singlePostIcon"
                    onClick={handleDelete}
                  ></i>
                </div>
              )}
            </h1>

            <div className="singlePostInfo">
              <span className="singlePostAuthor">
                Author:{" "}
                <b>
                  <Link className="routerLink" to={`/?username=${username}`}>
                    {username}
                  </Link>
                </b>
              </span>
              <span className="singlePostDate">
                {new Date(createdAt).toDateString()}
              </span>
            </div>

            <p className="singlePostDesc">{description}</p>
          </div>
        </div>
      ) : (
        // UPDATE####################################################
        <div className="singlePost singlePostWrapper">
          <h1 className="singlePostTitle">
            Update Post{" "}
            <div className="singlePostEdit">
              <i
                class="fa-solid fa-arrow-right-from-bracket"
                onClick={() => {
                  setUpdateMode(false);
                }}
              ></i>
            </div>
          </h1>

          {/* Img */}
          {fileUpdate ? (
            <div className="writeImgDiv">
              <img
                className="writeImg"
                alt=""
                src={URL.createObjectURL(fileUpdate)}
              />
            </div>
          ) : (
            photo && <img className="postImage" alt="" src={PF + photo} />
          )}

          <form className="mx-auto writeForm" onSubmit={handleSubmitUpdate}>
            {/* Input Title */}
            <div class="form-floating writeFormItem ">
              <input
                class="form-control border-light-subtle border-start-0 border-end-0  rounded-0"
                type="text"
                placeholder=""
                aria-label="default input example"
                onChange={handleTitleUpdate}
                value={titleUpdate !== "" ? titleUpdate : title}
              />
              <label for="floatingInput">Update Title</label>
            </div>

            {/* TextArea */}
            <div class="form-floating writeFormItem">
              <textarea
                class="form-control border-light-subtle border-start-0 border-end-0  rounded-0"
                placeholder=""
                id="Textarea"
                style={{ height: "20rem" }}
                onChange={handleDescUpdate}
                value={
                  descriptionUpdate !== "" ? descriptionUpdate : description
                }
              ></textarea>
              <label for="floatingTextarea2">Update story...</label>
            </div>

            {/* InputImg */}
            <div class=" mb-3 writeInput writeFormItem">
              <label for="formFile" class="form-label ">
                Change Image
              </label>
              <input
                class="form-control border-light-subtle "
                type="file"
                id="formFile"
                onChange={handleFileUpdate}
              />
            </div>

            {/* Button */}
            <div className="text-center">
              <button
                type="submit"
                class="btn btn-outline-primary writeFormItem"
              >
                Submit
              </button>
            </div>
            {error && (
              <div className="error-message text-center loginInput">
                Registration failed. Please check your information and try
                again.
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
}

export default SinglePost;
