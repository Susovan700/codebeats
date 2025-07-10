"use client";
import "./srikanta.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function srikantaAcharyaSongs() {
  const router = useRouter();
  const srikantaAcharyaSongs = [
  {
    title: "Ei Srabon",
    duration: "4:35",
    album: "Brishti Tomake Dilam",
  },
  {
    title: "Ek Jhank Ichhe Dana",
    duration: "4:50",
    album: "Ek Jhank Ichhe Dana",
  },
  {
    title: "Brishti Tomake Dilam",
    duration: "5:01",
    album: "Brishti Tomake Dilam",
  },
  {
    title: "Jodi Balo Hyan",
    duration: "4:29",
    album: "Jodi Balo Hyan",
  },
  {
    title: "Hoyto Tomari Jonyo",
    duration: "4:45",
    album: "Hoyto Tomari Jonyo",
  },
  {
    title: "Jokhon Porbe Na Mor Payer Chinho",
    duration: "5:12",
    album: "Rabindrasangeet Collection",
  },
  {
    title: "Purano Sei Diner Kotha",
    duration: "5:20",
    album: "Rabindrasangeet Collection",
  },
  {
    title: "Akash Bhora Surjo Tara",
    duration: "4:48",
    album: "Rabindrasangeet Collection",
  },
  {
    title: "Tumi Robe Nirobe",
    duration: "4:55",
    album: "Rabindrasangeet Collection",
  },
  {
    title: "Amaro Porano Jaha Chay",
    duration: "5:06",
    album: "Rabindrasangeet Collection",
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
            <h2>Srikanta Acharya - Songs</h2>
          </div>
          <div className="songs-list">
            {srikantaAcharyaSongs.map((song, index) => (
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
              <img src="/srikanta-acharya.jpeg" alt="Anupam Roy" />
            </div>
            <div className="bengalis-artist-details">
              <h3>Srikanta Acharya</h3>
              <p>Bengali-Singer songwriter</p>
              <p>{srikantaAcharyaSongs.length} songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
