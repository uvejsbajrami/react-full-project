import React, { useEffect, useState } from "react";
import "../styles/Search.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Search() {
  const [friends, setFriends] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInputValue = e.target.querySelector(".searchInput").value;
    setSearchValue(searchInputValue);
  };

  useEffect(() => {
    if (searchValue) {
      axios
        .get(`https://dummyjson.com/users/search?q=${searchValue}`)
        .then((res) => {
          setFriends(res.data.users);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    } else {
      setFriends([]);
    }
  }, [searchValue]);

  return (
    <div className="container col-6 mt-5 rounded-4 searchComponentDiv">
      <div className="searchDiv">
        <label htmlFor="exampleDataList" className="form-label">
          Search Friends
        </label>
        <form onSubmit={handleSearch}>
          <input
            className="form-control searchInput"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <button type="submit" className="btn btn-outline-success btn-sm mt-2">
            Submit
          </button>
        </form>
      </div>
      <div>
        {friends.length > 0 ? (
          friends.map((friend, index) => (
            <Link
              to={`/profile/${friend.id}`}
              style={{ textDecoration: "none" }}
            >
              <div
                key={index}
                className="d-flex align-items-center divSearchUsers mt-2"
              >
                <img
                  src={friend.image}
                  style={{
                    height: "60px",
                    backgroundColor: "#C0BBBB",
                    borderRadius: "50%",
                  }}
                  className="mt-2 me-2 ms-2 mb-2"
                />
                <p>
                  {friend.firstName} {friend.lastName}{" "}
                </p>
              </div>
            </Link>
          ))
        ) : !searchValue ? (
          <p>No friends found</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Search;
