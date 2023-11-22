import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../styles/Nav.css";
const icons = [
  {
    name: (
      <Link to="/">
        <FontAwesomeIcon icon={faHome} style={{ color: "#fff" }} />
      </Link>
    ),
  },
  {
    name: (
      <Link to="/reels">
        <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#fff" }} />
      </Link>
    ),
  },
  {
    name: (
      <Link to="/movies">
        <FontAwesomeIcon icon={faClapperboard} style={{ color: "#fff" }} />
      </Link>
    ),
  },
  {
    name: (
      <Link to="/chat">
        <FontAwesomeIcon icon={faPeopleGroup} style={{ color: "#fff" }} />
      </Link>
    ),
  },
  {
    name: (
      <Link to="/search">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#fff" }} />
      </Link>
    ),
  },
];
function Nav() {
  const [activeIndex, setActiveIndex] = useState();

  const handleActive = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="container ">
      <div className="row menu mt-3 justify-content-center align-items-end">
        <div className="listStyle">
          <ul className="d-flex justify-content-center align-items-center ">
            {icons.map((icona, i) => {
              const isActive = i === activeIndex;
              const className = isActive ? "active" : "";

              return (
                <li
                  onClick={() => handleActive(i)}
                  key={i}
                  className={className}
                  style={isActive ? { backgroundColor: "#2c8bff" } : {}}
                >
                  {icona.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
