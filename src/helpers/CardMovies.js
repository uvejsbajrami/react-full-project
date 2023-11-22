import { grey } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";

function CardMovies({ movie }) {
  return (
    <div className="d-flex row col-5 flex-wrap ">
      <div
        className="d-flex flex-wrap mt-2 mb-2 cards rounded-3 p-2"
        style={{ width: "14rem" }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          className="card-img-top rounded-2"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link
            to={`/movie/${movie.id}`}
            className="mt-1 btn btn-sm btn-outline-primary"
          >
            <span style={{ color: "white" }}>Explore Movie</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardMovies;
