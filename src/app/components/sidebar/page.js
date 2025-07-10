"use client"; 

import { useRouter } from "next/navigation";
import "./sidebar.css";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="sidebar">
      <h2>CodeBeats</h2>
      <nav>
        <div className="sidebar-menu">
          <div className="home" onClick={() => router.push("/")}>
            <img src="home_icon.png" />
            <span>Home</span>
          </div>
          <div className="search" onClick={() => router.push("/search")}>
            <img src="search_icon.png" />
            <span>Search</span>
          </div>
          <div className="library" onClick={() => router.push("/library")}>
            <img src="library_icon.png" />
            <span>Library</span>
          </div>
          <div className="collection" onClick={() => router.push("/collection")}>
            <img src="collection_icon.png" />
            <span>Your Collection</span>
          </div>
        </div>
        <div className="sidebar-bottom">
        <div className="about" onClick={() => router.push("/about")}>
            <img src="about-icon.png" />
            <span>About Us</span>
          </div>
      </div>
      </nav>
    </div>
  );
}
