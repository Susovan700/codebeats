"use client";
import "./armaan.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function arijitSinghSongs() {
  const router = useRouter();
const armaanMalikSongs = [
  {
    title: "Main Rahoon Ya Na Rahoon",
    duration: "4:41",
    album: "Single",
  },
  {
    title: "Bol Do Na Zara",
    duration: "3:41",
    album: "Azhar",
  },
  {
    title: "Butta Bomma",
    duration: "3:09",
    album: "Ala Vaikunthapurramuloo",
  },
  {
    title: "Sab Tera",
    duration: "4:00",
    album: "Baaghi",
  },
  {
    title: "Jab Tak",
    duration: "4:50",
    album: "M.S. Dhoni: The Untold Story",
  },
  {
    title: "Control",
    duration: "3:15",
    album: "Single",
  },
  {
    title: "Dil Mein Ho Tum",
    duration: "3:23",
    album: "Cheat India",
  },
  {
    title: "Sau Aasmaan",
    duration: "3:48",
    album: "Baar Baar Dekho",
  },
  {
    title: "Ghar Se Nikalte Hi",
    duration: "2:46",
    album: "Single",
  },
  {
    title: "Tujhe Kaise, Pata Na Chala",
    duration: "3:22",
    album: "Single",
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
            <h2>Armaan Malik - Songs</h2>
          </div>
          <div className="songs-list">
            {armaanMalikSongs.map((song, index) => (
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
              <img src="/aarman-malik.jpeg" alt="KK" />
            </div>
            <div className="hindis-artist-details">
              <h3>KK</h3>
              <p>Hindi-Singer songwriter</p>
              <p>{armaanMalikSongs.length} songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}