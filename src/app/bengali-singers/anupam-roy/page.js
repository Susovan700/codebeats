"use client";
import "./anupam.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function anupamRoySongs() {
  const router = useRouter();
  const anupamRoySongs = [
    {
      title: "Amake Amar Moto Thakte Dao",
      duration: "4:48",
      album: "Autograph",
    },
    {
      title: "Benche Thakar Gaan",
      duration: "4:56",
      album: "Autograph",
    },
    {
      title: "Beche Thakar Gaan",
      duration: "4:20",
      album: "Chotushkone",
    },
    {
      title: "Tumi Jake Bhalobasho",
      duration: "4:36",
      album: "Praktan",
    },
    {
      title: "Ekbar Bol",
      duration: "4:12",
      album: "Bedroom",
    },
    {
      title: "Aaro Ekbar",
      duration: "4:45",
      album: "Chalo Paltai",
    },
    {
      title: "Phanka Frame",
      duration: "3:58",
      album: "Jaatishwar",
    },
    {
      title: "Ami Ajkal Bhalo Achhi",
      duration: "4:07",
      album: "Shaheb Bibi Golaam",
    },
    {
      title: "Golpo Kotha",
      duration: "4:10",
      album: "Highway",
    },
    {
      title: "Journey Song",
      duration: "4:21",
      album: "Piku",
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
            <h2>Anupam Roy - Songs</h2>
          </div>
          <div className="songs-list">
            {anupamRoySongs.map((song, index) => (
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
              <img src="/anupam-roy.jpeg" alt="Anupam Roy" />
            </div>
            <div className="bengalis-artist-details">
              <h3>Arijit Singh</h3>
              <p>Bengali-Singer songwriter</p>
              <p>{anupamRoySongs.length} songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
