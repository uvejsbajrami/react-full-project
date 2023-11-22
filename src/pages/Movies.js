import React, { useEffect, useState } from "react";
import "../styles/Movies.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardMovies from "../helpers/CardMovies";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [slicemovies, setSlicemovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0"
      )
      .then((response) => {
        setMovies(response.data.results);
        setSlicemovies(response.data.results.slice(0, 10));
      });
  }, []);
  const handleClickMore = () => {
    setSlicemovies(movies.slice(0, 20));
  };
  return (
    <>
      <div className="movieContainer col-6 mt-5 rounded-4 ">
        <div className="d-flex row justify-content-center ">
          {movies && movies.length > 0
            ? slicemovies.map((movie) => (
                <CardMovies key={movie.id} movie={movie} />
              ))
            : ""}
        </div>
        <div className="container d-flex justify-content-center">
          {" "}
          <button className="btn btn-primary btn-sm " onClick={handleClickMore}>
            Click For More
          </button>
        </div>
      </div>
    </>
  );
}

export default Movies;
