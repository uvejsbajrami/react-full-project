import React from "react";
import "../styles/facebook.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
const styleIcons = {
  color: "#ffffff",
  fontSize: 20 + "px",
  color: " rgb(230, 218, 218)",
  cursor: "pointer",
};

function Facebook() {
  return (
    <>
      <div className=" fbDiv  mt-5">
        <div className="facebook ms-3 mt-3">
          <h3>facebook</h3>
        </div>
        <div className="icons">
          <ul>
            <li>
              <p>
                <FontAwesomeIcon
                  className="me-2"
                  icon={faUserGroup}
                  style={styleIcons}
                />
                <Link className="links">Friends</Link>
              </p>
            </li>
            <li>
              {" "}
              <p>
                <FontAwesomeIcon
                  className="me-2"
                  icon={faStore}
                  style={styleIcons}
                />
                <Link className="links">Marketplace</Link>
              </p>
            </li>
            <li>
              <p>
                <FontAwesomeIcon
                  className="me-2"
                  icon={faPeopleGroup}
                  style={styleIcons}
                />
                <Link className="links">Groups</Link>
              </p>
            </li>
            <li>
              <p>
                <FontAwesomeIcon
                  className="me-2"
                  icon={faCirclePlay}
                  style={styleIcons}
                />
                <Link className="links">Watch</Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Facebook;
