"use client";
import "./shakira.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function ShakiraSongs() {
  const router = useRouter();

  const shakiraSongs = [
    {
      title: "Hips Don't Lie (feat. Wyclef Jean)",
      duration: "3:38",
      album: "Oral Fixation, Vol. 2",
    },
    {
      title: "Waka Waka (This Time for Africa)",
      duration: "3:22",
      album: "Sale el Sol",
    },
    {
      title: "Whenever, Wherever",
      duration: "3:16",
      album: "Laundry Service",
    },
    {
      title: "La La La (Brazil 2014)",
      duration: "3:07",
      album: "Shakira.",
    },
    {
      title: "She Wolf",
      duration: "3:08",
      album: "She Wolf",
    },
    {
      title: "Beautiful Liar (with Beyoncé)",
      duration: "3:20",
      album: "B'Day (Deluxe Edition)",
    },
    {
      title: "Underneath Your Clothes",
      duration: "3:45",
      album: "Laundry Service",
    },
    {
      title: "Chantaje (feat. Maluma)",
      duration: "3:15",
      album: "El Dorado",
    },
    {
      title: "Loca (feat. El Cata)",
      duration: "3:03",
      album: "Sale el Sol",
    },
    {
      title: "Empire",
      duration: "3:59",
      album: "Shakira.",
    },
  ];

  const handleBackClick = () => {
    router.back();
  };

  const handlePlaySong = (song) => {
    console.log(`Playing: ${song.title}`);
    // Add your play functionality here
  };

  const handleAddSong = (song) => {
    console.log(`Added to playlist: ${song.title}`);
  };

  return (
    <div className="spanishs-container">
      <Sidebar />
      <Navbar />
      <div className="spanishs-main">
        <div className="spanishs-left">
          <div className="spanishs-navigation-header">
            <button className="spanishs-back-button" onClick={handleBackClick}>
              ← Back to Singers
            </button>
            <h2>Shakira - Songs</h2>
          </div>
          <div className="songs-list">
            {shakiraSongs.map((song, index) => (
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
        <div className="spanishs-right">
          <div className="spanishs-artist-info">
            <div className="spanishs-artist-image">
              <img src="/shakira.jpeg" alt=" Shakira" />
            </div>
            <div className="spanishs-artist-details">
              <h3> Shakira</h3>
              <p>Spanish Singer-Songwriter</p>
              <p>{shakiraSongs.lspanishsth}10 songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
