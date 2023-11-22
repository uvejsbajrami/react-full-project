import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Reels from "./pages/Reels";
import Movies from "./pages/Movies";
import Chat from "./pages/Chat";
import Stream from "./pages/Search";
import Facebook from "./components/Facebook";
import Gaming from "./components/Gaming";
import Nav from "./components/Nav";
import ProfileRight from "./components/ProfileRight";
import Profile from "./pages/Profile";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <BrowserRouter>
            <div className="col-3">
              <Facebook />
              <Gaming />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reels" element={<Reels />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/movie/:id" element={<Movie />} />
            </Routes>
            <div
              className="col-2 mt-5 rounded-4"
              style={{
                width: "315px",
                marginLeft: "2px",
              }}
            >
              <ProfileRight />
            </div>
            <Nav />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
