import React from "react";
import "../styles/Users.css";
import { Link } from "react-router-dom";

function UsersDiv({ users }) {
  // const refreshClick = () => {
  //   window.location.reload();
  // };

  return (
    <div className="userDiv">
      <Link style={{ textDecoration: "none" }} to={`/profile/${users.id}`}>
        <div className="row userDiv">
          <div className="col-3 ">
            <img className="userImage" src={users.image} />
          </div>
          <div className="col-8">
            {" "}
            <p>
              {users.firstName} {users.lastName}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default UsersDiv;
