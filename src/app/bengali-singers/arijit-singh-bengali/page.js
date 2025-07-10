"use client";
import "./arijit-bengali.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function arijitSinghbengaliSongs() {
  const router = useRouter();

const arijitSinghBengaliSongs = [
   {
    title: "Mon Majhi Re",
    duration: "4:39",
    album: "Boss",
  },
  {
    title: "Tomake Chai",
    duration: "4:08",
    album: "Gangster",
  },
  {
    title: "Ke Tui Bol",
    duration: "3:52",
    album: "Herogiri",
  },
  {
    title: "Tumi Jake Bhalobasho",
    duration: "4:36",
    album: "Praktan",
  },
  {
    title: "Shyamal Shaashon",
    duration: "5:15",
    album: "Jaatishwar",
  },
  {
    title: "Egiye De",
    duration: "4:01",
    album: "Game",
  },
  {
    title: "Ami Je Ke Tomar",
    duration: "4:10",
    album: "Ami Je Ke Tomar",
  },
  {
    title: "Alo Chhaya",
    duration: "3:42",
    album: "Parineeta",
  },
  {
    title: "Mon Boleche",
    duration: "3:55",
    album: "Game",
  },
  {
    title: "Bojhena Shey Bojhena",
    duration: "4:48",
    album: "Bojhena Shey Bojhena",
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
    <div className="bengalis-container">
      <Sidebar />
      <Navbar />
      <div className="bengalis-main">
        <div className="bengalis-left">
          <div className="bengalis-navigation-header">
            <button className="bengalis-back-button" onClick={handleBackClick}>
              ← Back to Singers
            </button>
            <h2>Arijit Singh - Songs</h2>
          </div>
          <div className="songs-list">
            {arijitSinghBengaliSongs.map((song, index) => (
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
        <div className="bengalis-right">
          <div className="bengalis-artist-info">
            <div className="bengalis-artist-image">
              <img src="/arijit-singh.webp" alt="Arijit Singh" />
            </div>
            <div className="bengalis-artist-details">
              <h3>Arijit Singh</h3>
              <p>Bengali-Singer songwriter</p>
              <p>{arijitSinghBengaliSongs.length} songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}