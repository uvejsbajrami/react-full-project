import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/PostsDiv.css";
import HomePosts from "../helpers/HomePosts";

const storyImages = [
  {
    src: "https://imgs.search.brave.com/nZWsIGr9Eb6tynm9pBHXVaX--6rxFc9UyVmDm_tmtVI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTkw/MjA0NDcvcGV4ZWxz/LXBob3RvLTE5MDIw/NDQ3L2ZyZWUtcGhv/dG8tb2YtYm9hdC5q/cGVnP2F1dG89Y29t/cHJlc3MmY3M9dGlu/eXNyZ2ImZHByPTEm/dz01MDA",
  },
  {
    src: "https://imgs.search.brave.com/ng0h1KirBAicxhB7gIkdZw92abYi2Uupcii0KoSg-Mc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTg5/NDU4MzAvcGV4ZWxz/LXBob3RvLTE4OTQ1/ODMwL2ZyZWUtcGhv/dG8tb2Ytdmlldy1v/Zi1hLWZvcmVzdC1t/b3VudGFpbnMtYW5k/LWEtYm9keS1vZi13/YXRlci5qcGVnP2F1/dG89Y29tcHJlc3Mm/Y3M9dGlueXNyZ2Im/ZHByPTEmdz01MDA",
  },
  {
    src: "https://imgs.search.brave.com/Ez2pj6fzKU7GlGU5ynP-Fla0oy-Z3gN_9kuzNDHsaCY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGVh/bnVwLnBpY3R1cmVz/L3VzZWNhc2VzL3Bo/b3RvLWEuanBn",
  },
  {
    src: "https://imgs.search.brave.com/sYZxYWm5tCLbgU6aUvw74SXZExyveFpdEKwltsP1i54/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDk5ODkzMTctNmYx/NDc0M2FmMWJmP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRsOGZHWnla/V1Y4Wlc1OE1IeDhN/SHg4ZkRBPQ",
  },
  {
    src: "https://imgs.search.brave.com/-_1S9_hOqlNpjY2zIFn94dLyiMWcXgTzllBkYN4IxHM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvOTc4/MjMwNS9wZXhlbHMt/cGhvdG8tOTc4MjMw/NS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
  },
];

function Home() {
  const [usernames, setUsernames] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts?limit=20&skip=6")
      .then((res) => setPosts(res.data.posts));
  }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=5")
      .then((res) => setUsernames(res.data.users.map((user) => user.username)));
  }, []);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  return (
    <div className="containerDiv col-6 mt-5 rounded-4 ">
      <div className="d-flex">
        {storyImages && storyImages.length > 0
          ? storyImages.map((image, i) => (
              <div
                key={i}
                className="me-3 mt-2 col-2 storyImageDiv rounded-3 ms-1"
                style={{ height: "180px", cursor: "pointer" }}
                onClick={() => handleImageClick(image.src)}
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              >
                <img
                  className="rounded-3 col-12"
                  src={image.src}
                  alt={`Image ${i}`}
                />
                {usernames[i] && (
                  <div className="nameStory">
                    <p className="text-center "> {usernames[i]}</p>
                  </div>
                )}
              </div>
            ))
          : ""}
      </div>
      {/* Bootstrap Modal */}
      <div className="modal fade" id="imageModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              {selectedImage && (
                <img src={selectedImage} className="img-fluid" alt="Selected" />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ketu jan postet  */}
      <div className="">
        {posts && posts.length > 0 ? (
          posts.map((post, i) => {
            return <HomePosts key={i} posts={post} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Home;
