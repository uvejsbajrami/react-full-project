import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/PostsDiv.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function PostsDiv({ post }) {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => setUser(res.data));
  }, [id]);

  return (
    <div className="row divPosts rounded-4 ms-1 mt-2">
      <div className="divPost d-flex align-items-center">
        <img src={user.image} />
        <p>
          {user.firstName} {user.lastName}
        </p>
      </div>
      <h5>{post.title}</h5>
      <p>{post.body}</p>
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

export default PostsDiv;
