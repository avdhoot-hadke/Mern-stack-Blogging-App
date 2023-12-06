import { useContext } from "react";
import Posts from "./Components/posts/posts";
import TopBar from "./Components/topbar/topbar";
import AuthContext from "./context/authContext";
import AuthContextProvider from "./context/authContextProvider";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Settings from "./pages/settings/settings";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/posts" element={<Posts />} /> */}
        <Route path="/posts/:postId" element={<Single />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route
          path="/settings"
          element={user == null ? <Register /> : <Settings />}
        />
      </Routes>
    </Router>
  );
}

export default App;
