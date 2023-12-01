import "./single.css";
import Sidebar from "../../Components/sidebar/sidebar";
import SinglePost from "../../Components/singlePost/singlePost";

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single;
