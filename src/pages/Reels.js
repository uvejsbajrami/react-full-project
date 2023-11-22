import React from "react";
import "../styles/reels.css";
import vid1 from "../Videos/vid1.mp4";
import vid2 from "../Videos/vid2.mp4";
import vid3 from "../Videos/vid3.mp4";
import Video from "../components/Video";

function Reels() {
  const data = [
    {
      channel: "aaa",
      song: "song-1",
      url: vid1,
      likes: "32",
      comment: "2",
      shares: "23",
    },
    {
      channel: "bbb",
      song: "song-2",
      url: vid2,
      likes: "3",
      comment: "22",
      shares: "23",
    },
    {
      channel: "ccc",
      song: "song-3",
      url: vid3,
      likes: "89",
      comment: "23",
      shares: "29",
    },
  ];

  return (
    <div className="App col-6 mt-5 rounded-4 reelsDiv">
      <center>
        <h3>Reels</h3>

        <div className="video-container" id="video-container">
          {data.map((list, i) => (
            <Video
              key={i}
              channel={list.channel}
              song={list.song}
              url={list.url}
              likes={list.likes}
              comment={list.comment}
              shares={list.shares}
            />
          ))}
        </div>
      </center>
    </div>
  );
}

export default Reels;
