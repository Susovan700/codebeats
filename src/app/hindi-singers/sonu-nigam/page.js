"use client";
import "./sonu.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function arijitSinghSongs() {
  const router = useRouter();const sonuNigamSongs = [
  {
    title: "Abhi Mujh Mein Kahin",
    duration: "6:55",
    album: "Agneepath",
  },
  {
    title: "Kal Ho Naa Ho",
    duration: "5:21",
    album: "Kal Ho Naa Ho",
  },
  {
    title: "Saathiya",
    duration: "5:47",
    album: "Saathiya",
  },
  {
    title: "Main Agar Kahoon",
    duration: "5:14",
    album: "Om Shanti Om",
  },
  {
    title: "Do Pal",
    duration: "4:31",
    album: "Veer-Zaara",
  },
  {
    title: "Suraj Hua Maddham",
    duration: "5:40",
    album: "Kabhi Khushi Kabhie Gham",
  },
  {
    title: "Sandese Aate Hain",
    duration: "6:49",
    album: "Border",
  },
  {
    title: "Tanhayee",
    duration: "5:49",
    album: "Dil Chahta Hai",
  },
  {
    title: "Chupke Se",
    duration: "4:55",
    album: "Saathiya",
  },
  {
    title: "Panchhi Nadiya",
    duration: "6:00",
    album: "Refugee",
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
            <h2>Sonu Nigam - Songs</h2>
          </div>
          <div className="songs-list">
            {sonuNigamSongs.map((song, index) => (
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
              <img src="/sonu-nigam.jpeg" alt="KK" />
            </div>
            <div className="hindis-artist-details">
              <h3>Sonu Nigam</h3>
              <p>Hindi-Singer songwriter</p>
              <p>{sonuNigamSongs.length} songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}