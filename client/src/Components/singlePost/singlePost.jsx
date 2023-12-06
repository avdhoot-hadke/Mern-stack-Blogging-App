import { useEffect, useState } from "react";
import axios from "axios";
import "./singlePost.css";
import PostImg from "../../assests/post1.jpg";
import { Link, useParams, useLocation } from "react-router-dom";

function SinglePost() {
  const [postData, setPostData] = useState([]);
  const { postId } = useParams();

  // Extract pathname from the location object
  const path = useLocation().pathname;
  // Split the pathname into segments
  const segments = path.split("/");
  // Remove the last two segments
  segments.pop();
  segments.pop();
  // Join the remaining segments back together to get the new path
  const newpath = segments.join("/");

  console.log(newpath);

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

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {photo && <img className="singlePostImg" alt="" src={PostImg} />}

        <h1 className="singlePostTitle">
          {title}
          <div className="singlePostEdit">
            <i className="fa-regular fa-pen-to-square singlePostIcon"></i>
            <i className="fa-solid fa-trash singlePostIcon"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:{" "}
            <b>
              <Link
                className="routerLink"
                to={`/${newpath}?username=${username}`}
              >
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
