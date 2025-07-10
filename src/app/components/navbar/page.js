"use client"
import { useRef, useState, useEffect } from "react";
import "./navbar.css";
import Profile from "../profile/page";

export default function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowProfile(false);
      }
    };
    if (showProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfile]);

  return (
    <div className="navbar">
      <input type="text" placeholder="Search songs, artists..." className="search-box" />
      <div ref={wrapperRef} className="profile-dropdown-wrapper">
        <div className="profile" onClick={() => setShowProfile(p => !p)}>
          <img src="profile.png" alt="profile" />
        </div>
        {showProfile && (
          <div className="dropdown">
            <Profile />
          </div>
        )}
      </div>
    </div>
  );
}
