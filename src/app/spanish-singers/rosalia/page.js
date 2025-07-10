"use client";
import "./rosalia.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function RosaliaSongs() {
  const router = useRouter();

  const rosaliaSongs = [
    {
      title: "DESPECHÁ",
      duration: "2:38",
      album: "MOTOMAMI",
    },
    {
      title: "SAOKO",
      duration: "2:17",
      album: "MOTOMAMI",
    },
    {
      title: "LA FAMA (feat. The Weeknd)",
      duration: "3:08",
      album: "MOTOMAMI",
    },
    {
      title: "BIZCOCHITO",
      duration: "1:49",
      album: "MOTOMAMI",
    },
    {
      title: "MALAMENTE",
      duration: "2:30",
      album: "El Mal Querer",
    },
    {
      title: "PIENSO EN TU MIRÁ",
      duration: "3:11",
      album: "El Mal Querer",
    },
    {
      title: "DI MI NOMBRE",
      duration: "2:41",
      album: "El Mal Querer",
    },
    {
      title: "DE AQUÍ NO SALES",
      duration: "2:24",
      album: "El Mal Querer",
    },
    {
      title: "Con Altura (feat. J Balvin)",
      duration: "2:41",
      album: "Single",
    },
    {
      title: "Yo x Ti, Tu x Mi (feat. Ozuna)",
      duration: "3:06",
      album: "Single",
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
            <h2>A Rosalía - Songs</h2>
          </div>
          <div className="songs-list">
            {rosaliaSongs.map((song, index) => (
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
              <img src="/rosalia.jpeg" alt=" Rosalía Vila Tobella" />
            </div>
            <div className="spanishs-artist-details">
              <h3> Rosalía Vila Tobella</h3>
              <p>Spanish Singer-Songwriter</p>
              <p>{rosaliaSongs.lspanishsth}10 songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
