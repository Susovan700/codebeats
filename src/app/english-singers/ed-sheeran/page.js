"use client";
import "./sheeran.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function edSheeranSongs() {
  const router = useRouter();

  const edSheeranSongs = [
    {
      title: "Shape of You",
      duration: "3:53",
      album: "÷ (Divide)",
    },
    {
      title: "Perfect",
      duration: "4:23",
      album: "÷ (Divide)",
    },
    {
      title: "Thinking Out Loud",
      duration: "4:41",
      album: "x (Multiply)",
    },
    {
      title: "Photograph",
      duration: "4:18",
      album: "x (Multiply)",
    },
    {
      title: "Castle on the Hill",
      duration: "4:21",
      album: "÷ (Divide)",
    },
    {
      title: "Galway Girl",
      duration: "2:50",
      album: "÷ (Divide)",
    },
    {
      title: "Bad Habits",
      duration: "3:51",
      album: "= (Equals)",
    },
    {
      title: "Shivers",
      duration: "3:28",
      album: "= (Equals)",
    },
    {
      title: "Happier",
      duration: "3:27",
      album: "÷ (Divide)",
    },
    {
      title: "The A Team",
      duration: "4:18",
      album: "+ (Plus)",
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
    <div className="eng-container">
      <Sidebar />
      <Navbar />
      <div className="eng-main">
        <div className="left">
          <div className="eng-navigation-header">
            <button className="eng-back-button" onClick={handleBackClick}>
              ← Back to Singers
            </button>
            <h2>Ed Sheeran - Songs</h2>
          </div>
          <div className="songs-list">
            {edSheeranSongs.map((song, index) => (
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
        <div className="right">
          <div className="eng-artist-info">
            <div className="eng-artist-image">
              <img src="/ed-sheeran.jpeg" alt="Ed Sheeran" />
            </div>
            <div className="eng-artist-details">
              <h3>Ed Sheeran</h3>
              <p>English singer-songwriter</p>
              <p>{edSheeranSongs.length} songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}