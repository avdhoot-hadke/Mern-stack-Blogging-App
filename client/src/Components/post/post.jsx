import "./post.css";
import postImage from "../../assests/post1.jpg";
import { Link } from "react-router-dom";

function Post({ post }) {
  const { title, categories, createdAt, description, photo, _id } = post;

  return (
    <div className="post">
      {photo && <img className="postImage" alt="" src={photo} />}

      <div className="postInfo">
        <div className="postCats">
          {/* Assuming categories is an array */}
          {categories.map((category) => (
            <span key={category} className="postCat">
              {category}
            </span>
          ))}
        </div>
        <Link className="routerLink" to={`/posts/${_id}`}>
          <span className="postTitle">{title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(createdAt).toDateString()}</span>
      </div>

      <p className="postDesc">{description}</p>
    </div>
  );
}

export default Post;
