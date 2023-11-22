import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Movie.css";
function Movie() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const [modalMovie, setModalMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0"
      )
      .then((response) => setMovies(response.data.results));
    setMovie(movies.filter((movie) => movie.id == id)[0]);
  }, [movies]);
  const handleClickMovie = (src) => {
    setModalMovie(src);
  };
  return (
    <div
      className="col-6 mt-5 rounded-4 containerMovie "
      style={{ border: "3px solid rgb(99, 96, 96)" }} 
    >
      {movie ? (
        <>
          <img
            className="rounded-2 mt-2"
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          />
          <h4>{movie.original_title}</h4>
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
          <p>Votes: {movie.vote_count}</p>
          <button
            onClick={() =>
              handleClickMovie(
                `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
              )
            }
            type="button"
            className="btn btn-sm btn-outline-primary"
            data-toggle="modal"
            data-target="#responsiveModal"
          >
            <span style={{ color: "white" }}> Watch Movie</span>
          </button>
        </>
      ) : (
        ""
      )}

      <div
        class="modal fade"
        id="responsiveModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="responsiveModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen-sm-down">
          <div class="modal-content" style={{ backgroundColor: "black" }}>
            <div class="modal-header">
              <h5 class="modal-title" id="responsiveModalLabel">
                Responsive Full-Screen Modal
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                style={{ backgroundColor: "black" }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img src={modalMovie} class="img-fluid" alt="Placeholder Image" />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" class="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
