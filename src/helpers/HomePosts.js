import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function HomePosts({ posts }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=20")
      .then((res) => setUser(res.data.users));
  }, []);
  return (
    <div className="row divPosts rounded-4 ms-1 pt-2 mt-3">
      <div className="divPost d-flex align-items-center">
        {/* {user && user.length > 0 ? (
          user.map((users, i) => {
            return (
              <div key={i}>
                <img src={users.image} />{" "}
                <p>
                  {users.firstName} {users.lastName}
                </p>
              </div>
            );
          })
        ) : (
          <></>
        )} */}
      </div>
      <h5>{posts.title}</h5>
      <p>{posts.body}</p>
      <div className="row d-flex justify-content-center justify-content-around pb-3">
        <button className="btn  btn-primary col-3 ">
          <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#ffffff" }} />{" "}
          <span style={{ color: "#ffffff" }}>Like</span>
        </button>
        <button className="btn btn1  col-3  ">
          <FontAwesomeIcon icon={faCommentDots} style={{ color: "#ffffff" }} />{" "}
          <span style={{ color: "#ffffff" }}>Comment</span>
        </button>
        <button
          className="btn btn1 col-3 "
          style={{ backgroundColor: "transparent !important" }}
        >
          <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#ffffff" }} />{" "}
          <span style={{ color: "#ffffff" }}>Share</span>
        </button>
      </div>
    </div>
  );
}

export default HomePosts;
