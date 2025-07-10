"use client";
import "./shreya.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function shreyaGhoshalSongs() {
  const router = useRouter();
  const shreyaGhoshalSongs = [
    {
      title: "Teri Ore",
      duration: "5:03",
      album: "Singh Is Kinng",
    },
    {
      title: "Sun Raha Hai (Female)",
      duration: "5:20",
      album: "Aashiqui 2",
    },
    {
      title: "Agar Tum Mil Jao",
      duration: "5:37",
      album: "Zeher",
    },
    {
      title: "Saans",
      duration: "4:40",
      album: "Jab Tak Hai Jaan",
    },
    {
      title: "Manwa Laage",
      duration: "4:25",
      album: "Happy New Year",
    },
    {
      title: "Piyu Bole",
      duration: "5:17",
      album: "Parineeta",
    },
    {
      title: "Bairi Piya",
      duration: "5:02",
      album: "Devdas",
    },
    {
      title: "Silsila Ye Chaahat Ka",
      duration: "4:59",
      album: "Devdas",
    },
    {
      title: "Chikni Chameli",
      duration: "5:03",
      album: "Agneepath",
    },
    {
      title: "Bojhena Se Bojhena",
      duration: "4:42",
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
            <h2>Shreya Ghoshal - Songs</h2>
          </div>
          <div className="songs-list">
            {shreyaGhoshalSongs.map((song, index) => (
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
              <img src="/shreya-ghosal.webp" alt="Anupam Roy" />
            </div>
            <div className="bengalis-artist-details">
              <h3>Shreya Ghoshal</h3>
              <p>Bengali-Singer songwriter</p>
              <p>{shreyaGhoshalSongs.length} songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
