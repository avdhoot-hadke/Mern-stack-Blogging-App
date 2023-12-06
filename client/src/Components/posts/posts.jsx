import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../post/post";
import "./posts.css";
import { useLocation, useSearchParams } from "react-router-dom";

function Posts() {
  const [postData, setPostData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null); // State for managing error

  useEffect(() => {
    // Fetch data when the component mounts

    axios
      .get(`/posts?${searchParams.toString()}`)
      .then((response) => {
        setError(null); // Reset error state if successful response
        setPostData(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          // Handle 404 response (no posts found)
          console.log("No posts found.");
          // Optionally, you can set postData to an empty array or handle it based on your use case
          setPostData([]);
          setError("No posts found."); // Set error message
        } else {
          // Handle other errors
          console.error("Error fetching data:", error);
        }
      });
  }, [searchParams]);

  return (
    <div className="posts">
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        postData.map((post) => <Post key={post._id} post={post} />)
      )}
    </div>
  );
}

export default Posts;
