import Header from "../../Components/header/header";
import Posts from "../../Components/posts/posts";
import Sidebar from "../../Components/sidebar/sidebar";
import "./home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="homeBar">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
