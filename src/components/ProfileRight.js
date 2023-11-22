import React, { useEffect, useState } from "react";
import "../styles/ProfileRight.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import image2 from "../image2.png";
import axios from "axios";
import UsersDiv from "../helpers/UsersDiv";

const style1 = {
  color: "#ffffff",
  marginTop: "15px",
  marginLeft: "20px",
  cursor: "pointer",
};
function ProfileRight() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=20")
      .then((res) => setUser(res.data.users));
  }, []);
  return (
    <div className="container rightDiv rounded-4">
      <div className="icona d-flex justify-content-end align-items-center ">
        <div>
          <FontAwesomeIcon className="settings" icon={faGear} style={style1} />
        </div>
        <div>
          <FontAwesomeIcon
            className="message"
            icon={faCommentDots}
            style={style1}
          />
        </div>
        <div>
          <FontAwesomeIcon className="notify" icon={faBell} style={style1} />
        </div>
        <div
          className="divImage "
          style={{ marginTop: "12px", marginLeft: "15px" }}
        >
          <a href="#">
            <img src="https://imgs.search.brave.com/PzngAPChR2G1EghyNpeb6l57-C-wwF0B_VXbrqZORFw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzE5LzI2LzQ2/LzM2MF9GXzYxOTI2/NDY4MF94MlBCZEdM/RjU0c0ZlN2tUQnRB/dlpuUHlYZ3ZhUncw/WS5qcGc" />
          </a>
        </div>
      </div>
      <div
        className="container yourPage col-12 rounded-3 "
        style={{ backgroundColor: "#3b3f4989" }}
      >
        <div className="mt-3">
          <h5>Your Pages</h5>
        </div>
        <div className="row yourPageContent">
          <div className="col-3">
            {" "}
            <img src={image2} />
          </div>
          <div className=" col-9 d-flex justify-content-end justify-content-between align-items-center">
            <p className="mt-2">Uvejs Bajrami</p>

            <FontAwesomeIcon
              className="rounded-2 megaPhone"
              icon={faBullhorn}
              style={{
                color: "#ffffff",
                marginBottom: "15px",
                backgroundColor: "#7d828667",
                padding: "5px",
              }}
            />
          </div>
        </div>
      </div>
      <br />
      {/* ktu osht contacti me bo  */}
      <div className=" contactUsers">
        <div className="container contact d-flex align-items-center justify-content-between ">
          <h5>Contact</h5>

          <div>
            <FontAwesomeIcon
              icon={faVideo}
              style={{ color: "#ffffff", marginLeft: "10px" }}
            />

            <FontAwesomeIcon
              icon={faGear}
              style={{ color: "#ffffff", marginLeft: "10px" }}
            />
          </div>
        </div>

        {/* //ktu i shtojm me api userat  */}
        <div className=" ">
          {user && user.length > 0 ? (
            user.map((users) => {
              return <UsersDiv key={users.id} users={users} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileRight;
