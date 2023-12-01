import TopBar from "./Components/topbar/topbar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Settings from "./pages/settings/settings";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const user = false;
  return (
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
