"use client"
import "./footer.css";
import { useState } from "react";
export default function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="footer">
      <div className="footer-left">
        <img src="/song.jpeg" />
        <div>
          <p className="song-title">Song Title</p>
          <p className="song-artist">Artist Name</p>
        </div>
      </div>
      <div className="footer-center">
        <button className="left-control-btn">⏮</button>
        <button className="play-pause" onClick={togglePlayPause}>{isPlaying ? "⏸" : "▶"}</button>
        <button className="right-control-btn">⏭</button>
        <div className="progress-bar">
          <span className="time">0:00</span>
          <input type="range" min="0" max="100" />
          <span className="time">0:00</span>
        </div>
      </div>
      <div className="footer-right">
        <img src="speaker.png"></img>
        <input type="range" min="0" max="100" />
      </div>
    </div>
  );
}
