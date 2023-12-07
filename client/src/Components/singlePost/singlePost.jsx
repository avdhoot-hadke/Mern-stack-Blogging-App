import { useContext, useEffect, useState } from "react";
import axios, { Axios } from "axios";
import "./singlePost.css";
import PostImg from "../../assests/post1.jpg";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext";

function SinglePost() {
  const { user } = useContext(AuthContext);
  const [postData, setPostData] = useState([]);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/posts/${postId}`)
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const { username, title, categories, createdAt, description, photo, _id } =
    postData;
  const PF = `http://localhost:3000/images/`;

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
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {photo && <img className="postImage" alt="" src={PF + photo} />}

        <h1 className="singlePostTitle">
          {title}
          {username === user?.username && (
            <div className="singlePostEdit">
              <i className="fa-regular fa-pen-to-square singlePostIcon"></i>
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
  );
}

export default SinglePost;
