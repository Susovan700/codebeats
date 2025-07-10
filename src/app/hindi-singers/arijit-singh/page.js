"use client";
import "./arijit.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function arijitSinghSongs() {
  const router = useRouter();

const arijitSinghSongs = [
  {
    title: "Tum Hi Ho",
    duration: "4:22",
    album: "Aashiqui 2",
  },
  {
    title: "Raabta",
    duration: "4:00",
    album: "Agent Vinod",
  },
  {
    title: "Channa Mereya",
    duration: "4:49",
    album: "Ae Dil Hai Mushkil",
  },
  {
    title: "Agar Tum Saath Ho",
    duration: "5:41",
    album: "Tamasha",
  },
  {
    title: "Gerua",
    duration: "5:45",
    album: "Dilwale",
  },
  {
    title: "Muskurane",
    duration: "4:43",
    album: "CityLights",
  },
  {
    title: "Tera Yaar Hoon Main",
    duration: "4:24",
    album: "Sonu Ke Titu Ki Sweety",
  },
  {
    title: "Hamari Adhuri Kahani",
    duration: "4:46",
    album: "Hamari Adhuri Kahani",
  },
  {
    title: "Sooraj Dooba Hain",
    duration: "4:21",
    album: "Roy",
  },
  {
    title: "Phir Le Aaya Dil",
    duration: "5:16",
    album: "Barfi!",
  },
];


  const handleBackClick = () => {
    router.back();
  };

  const handlePlaySong = (song) => {
    console.log(`Playing: ${song.title}`);
  };

  const handleAddSong = (song) => {
    console.log(`Added to playlist: ${song.title}`);
  };

  return (
    <div className="hindis-container">
      <Sidebar />
      <Navbar />
      <div className="hindis-main">
        <div className="hindis-left">
          <div className="hindis-navigation-header">
            <button className="hindis-back-button" onClick={handleBackClick}>
              ← Back to Singers
            </button>
            <h2>Arijit Singh - Songs</h2>
          </div>
          <div className="songs-list">
            {arijitSinghSongs.map((song, index) => (
              <div key={index} className="song-item">
                <div className="song-number">{index + 1}</div>
                <div className="song-info">
                  <div className="song-title">{song.title}</div>
                  <div className="song-details">
                    <span className="song-album">{song.album}</span>
                    <span className="song-duration">{song.duration}</span>
                  </div>
                </div>
                <div className="song-actions">
                  <button
                    className="play-button"
                    onClick={() => handlePlaySong(song)}
                  >
                    ▶
                  </button>
                  <button
                    className="add-button"
                    onClick={() => handleAddSong(song)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hindis-right">
          <div className="hindis-artist-info">
            <div className="hindis-artist-image">
              <img src="/arijit-singh.webp" alt="Arijit Singh" />
            </div>
            <div className="hindis-artist-details">
              <h3>Arijit Singh</h3>
              <p>Hindi-Singer songwriter</p>
              <p>{arijitSinghSongs.length} songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}