import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import PostsDiv from "../helpers/PostsDiv";

function Profile() {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => setUser(res.data));
  }, [id]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts?limit=5")
      .then((res) => setPosts(res.data.posts));
  }, []);
  return (
    <div className=" col-6 mt-5  rounded-4 profileContainer">
      <div className="bigPhoto rounded-4">
        <img
          className="rounded-4"
          src="https://imgs.search.brave.com/N9JbF0zYUgn4lLcmuNFkGc7UdGzd8jXgH2NrwvYPMW8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzE1LzE4LzA5/LzM2MF9GXzMxNTE4/MDkzMl9yaGlYRnJK/TjI3elhDQ2RyZ3g4/VjVHV2JMZDl6VEhI/QS5qcGc"
        />
        <div className="profileAndName rounded-4">
          <div className=" profilePic">
            <img className="col-3" src={user.image} />
          </div>
          <div className="col-4 profileName mt-1">
            <p>
              {user.firstName} {user.lastName}
            </p>
          </div>
        </div>
      </div>
      <div className="  mt-2 d-flex justify-content-between ">
        <div className=" intro col-12 rounded-4">
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faGraduationCap}
                style={{ color: "#ffffff" }}
              />{" "}
              Went to: {user.university}
            </li>
            <li>
              <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} />{" "}
              Lives in:
            </li>
            <li>
              <FontAwesomeIcon icon={faCakeCandles} /> Birthday:{" "}
              {user.birthDate}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={{ color: "#ffffff" }}
              />{" "}
              Age: {user.age}
            </li>
          </ul>
        </div>
      </div>
      <div
        className="container d-flex justify-content-center  col-12 mt-3 rounded-4"
        style={{ backgroundColor: "#2425269d" }}
      >
        <div className="  row  ">
          <div className="imgInput divImput d-flex align-items-center">
            <img className="col-3" src={user.image} />
            <input
              className=""
              type="text"
              style={{ width: "100%", height: "40px" }}
              placeholder="What's in your mind?"
            />
          </div>
          <hr />
          <div className="container">
            <div className="row d-flex justify-content-center justify-content-around pb-3">
              <button className="btn btn-outline-danger col-3 ">
                <FontAwesomeIcon icon={faVideo} style={{ color: "#ffffff" }} />{" "}
                <span style={{ color: "#ffffff" }}>Live</span>
              </button>
              <button className="btn btn-outline-success col-3  ">
                <FontAwesomeIcon icon={faImage} style={{ color: "#ffffff" }} />{" "}
                <span style={{ color: "#ffffff" }}>Image/video</span>
              </button>
              <button className="btn btn-outline-primary col-3 ">
                <FontAwesomeIcon icon={faFlag} style={{ color: "#ffffff" }} />{" "}
                <span style={{ color: "#ffffff" }}>Life Event</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container mt-3 rounded-4 "
        style={{ border: " 3px solid rgb(99, 96, 96)" }}
      >
        {/* <!-- ========== Start Section posts ========== --> */}
        {posts && posts.length > 0 ? (
          posts.map((post, i) => {
            return <PostsDiv post={post} key={i} />;
          })
        ) : (
          <></>
        )}
        {/* <!-- ========== End Section posts ========== --> */}
      </div>
    </div>
  );
}

export default Profile;
