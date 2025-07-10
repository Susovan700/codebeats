"use client";
import "./luis-fonsi.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function LuisFonsiSongs() {
  const router = useRouter();

  const luisFonsiSongs = [
  {
    title: "Despacito (feat. Daddy Yankee)",
    duration: "3:47",
    album: "VIDA",
  },
  {
    title: "Échame la Culpa (with Demi Lovato)",
    duration: "2:53",
    album: "VIDA",
  },
  {
    title: "No Me Doy por Vencido",
    duration: "4:21",
    album: "Palabras del Silencio",
  },
  {
    title: "Date La Vuelta (with Nicky Jam & Sebastián Yatra)",
    duration: "3:36",
    album: "VIDA",
  },
  {
    title: "Imposible (feat. Ozuna)",
    duration: "2:45",
    album: "VIDA",
  },
  {
    title: "Aquí Estoy Yo (feat. Aleks Syntek, David Bisbal & Noel Schajris)",
    duration: "4:00",
    album: "Palabras del Silencio",
  },
  {
    title: "Corazón en la Maleta",
    duration: "3:58",
    album: "8",
  },
  {
    title: "Nada Es Para Siempre",
    duration: "3:37",
    album: "Paso a Paso",
  },
  {
    title: "Respira",
    duration: "4:01",
    album: "Abrazar la Vida",
  },
  {
    title: "Llegaste Tú (feat. Juan Luis Guerra)",
    duration: "3:25",
    album: "VIDA",
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
            <h2>Luis Fonsi - Songs</h2>
          </div>
          <div className="songs-list">
            {luisFonsiSongs.map((song, index) => (
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
              <img src="/luis-fonsi.jpeg" alt=" Luis Fonsi" />
            </div>
            <div className="spanishs-artist-details">
              <h3> Luis Fonsi</h3>
              <p>Spanish Singer-Songwriter</p>
              <p>{luisFonsiSongs.lspanishsth}10 songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
