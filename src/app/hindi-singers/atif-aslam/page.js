"use client";
import "./atif.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function arijitSinghSongs() {
  const router = useRouter();
const atifAslamSongs = [
  {
    title: "Tera Hone Laga Hoon",
    duration: "5:02",
    album: "Ajab Prem Ki Ghazab Kahani",
  },
  {
    title: "Jeene Laga Hoon",
    duration: "3:58",
    album: "Ramaiya Vastavaiya",
  },
  {
    title: "Dil Diyan Gallan",
    duration: "4:20",
    album: "Tiger Zinda Hai",
  },
  {
    title: "Jeena Jeena",
    duration: "3:52",
    album: "Badlapur",
  },
  {
    title: "Pehli Dafa",
    duration: "4:47",
    album: "Single",
  },
  {
    title: "Tera Ban Jaunga",
    duration: "3:56",
    album: "Kabir Singh",
  },
  {
    title: "Rafta Rafta",
    duration: "4:40",
    album: "Single",
  },
  {
    title: "Woh Lamhe Woh Baatein",
    duration: "4:19",
    album: "Zeher",
  },
  {
    title: "Kuch Is Tarah",
    duration: "4:00",
    album: "Doorie",
  },
  {
    title: "Aadat",
    duration: "4:35",
    album: "Jal Pari",
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
            <h2>Atif Aslam - Songs</h2>
          </div>
          <div className="songs-list">
            {atifAslamSongs.map((song, index) => (
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
              <img src="/atif-aslam.jpeg" alt="KK" />
            </div>
            <div className="hindis-artist-details">
              <h3>Atif Aslam</h3>
              <p>Hindi-Singer songwriter</p>
              <p>{atifAslamSongs.length} songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}