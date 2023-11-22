import React from "react";
import "../styles/gaming.css";
import fnlogo from "../images/fnlogo.png";
import lolLogo from "../images/lolLogo.png";

function Gaming() {
  const style1 = { color: "white", textDecoration: "none" };
  return (
    <>
      <div className=" gamingDiv  mt-2">
        <div className="gamingTitle ms-3 mt-3">
          <h3>Gaming</h3>
        </div>
        <div className="game">
          <div className="game1">
            <img src={fnlogo} />
            <div className="Fortnite">
              <p className="ms-1 GameName">
                Fortnite
                <br />
                <span>1M Players</span>
              </p>

              <a
                className="col-3"
                href="https://store.epicgames.com/en-US/p/fortnite"
                target="_blank"
              >
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                >
                  Follow
                </button>
              </a>
            </div>
          </div>
          <div className="game2">
            <img src={lolLogo} />
            <div className="Fortnite">
              <p className="ms-1 GameName">
                LoL
                <br />
                <span>2M Players</span>
              </p>

              <a
                className="col-3"
                href="https://www.leagueoflegends.com/en-us/"
                target="_blank"
              >
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                >
                  Follow
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gaming;
