"use client";
import "./kk.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function arijitSinghSongs() {
  const router = useRouter();

const kkSongs = [
  {
    title: "Pal",
    duration: "5:10",
    album: "Pal",
  },
  {
    title: "Yaaron",
    duration: "4:45",
    album: "Rockford",
  },
  {
    title: "Tadap Tadap",
    duration: "5:37",
    album: "Hum Dil De Chuke Sanam",
  },
  {
    title: "Aankhon Mein Teri",
    duration: "4:44",
    album: "Om Shanti Om",
  },
  {
    title: "Zara Sa",
    duration: "5:16",
    album: "Jannat",
  },
  {
    title: "Khuda Jaane",
    duration: "5:11",
    album: "Bachna Ae Haseeno",
  },
  {
    title: "Dil Ibaadat",
    duration: "5:35",
    album: "Tum Mile",
  },
  {
    title: "Alvida",
    duration: "5:42",
    album: "Life in a... Metro",
  },
  {
    title: "Tu Hi Meri Shab Hai",
    duration: "5:33",
    album: "Gangster",
  },
  {
    title: "Labon Ko",
    duration: "5:15",
    album: "Bhool Bhulaiyaa",
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
            <h2>KK - Songs</h2>
          </div>
          <div className="songs-list">
            {kkSongs.map((song, index) => (
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
              <img src="/kk.jpeg" alt="KK" />
            </div>
            <div className="hindis-artist-details">
              <h3>KK</h3>
              <p>Hindi-Singer songwriter</p>
              <p>{kkSongs.length} songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}