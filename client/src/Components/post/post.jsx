import "./post.css";
import postImage from "../../assests/post1.jpg";

function Post() {
  return (
    <div className="post">
      <img className="postImage" alt="" src={postImage} />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Velit non derit proident cillum.</span>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>

      <p className="postDesc">
        Veniam eu nisi ea Lorem eiusmod et minim voluptate excepteur labore
        commodo et do.Veniam eu nisi ea Lorem eiusmod et minim voluptate
        excepteur labore commodo et do.Veniam eu nisi ea Lorem eiusmod et minim
        voluptate excepteur labore commodo et do.Veniam eu nisi ea Lorem eiusmod
        et minim voluptateexcepteur labore commodo et do. Veniam eu nisi ea
        Lorem eiusmod et minim voluptate excepteur labore commodo et do.Veniam
        eu nisi ea Lorem eiusmod et minim voluptate excepteur labore commodo et
        do. Veniam eu nisi ea Lorem eiusmod et minim voluptate excepteur labore
        commodo et do.Veniam eu nisi ea Lorem eiusmod et minim voluptate
        excepteur labore commodo et do.
      </p>
    </div>
  );
}

export default Post;
