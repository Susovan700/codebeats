"use client";
import "./bad.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function LuisFonsiSongs() {
  const router = useRouter();

  const badBunnySongs = [
  {
    title: "Tití Me Preguntó",
    duration: "4:03",
    album: "Un Verano Sin Ti",
  },
  {
    title: "Me Porto Bonito (feat. Chencho Corleone)",
    duration: "2:58",
    album: "Un Verano Sin Ti",
  },
  {
    title: "Dakiti (with Jhay Cortez)",
    duration: "3:25",
    album: "EL ÚLTIMO TOUR DEL MUNDO",
  },
  {
    title: "Yonaguni",
    duration: "3:26",
    album: "Single",
  },
  {
    title: "Callaíta",
    duration: "4:10",
    album: "Single",
  },
  {
    title: "Moscow Mule",
    duration: "4:05",
    album: "Un Verano Sin Ti",
  },
  {
    title: "Ojitos Lindos (with Bomba Estéreo)",
    duration: "4:32",
    album: "Un Verano Sin Ti",
  },
  {
    title: "La Difícil",
    duration: "2:43",
    album: "YHLQMDLG",
  },
  {
    title: "Si Veo a Tu Mamá",
    duration: "2:50",
    album: "YHLQMDLG",
  },
  {
    title: "Booker T",
    duration: "2:38",
    album: "EL ÚLTIMO TOUR DEL MUNDO",
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
            <h2>Bad Bunny - Songs</h2>
          </div>
          <div className="songs-list">
            {badBunnySongs.map((song, index) => (
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
              <img src="/bad-bunny.jpeg" alt=" Bad Bunny" />
            </div>
            <div className="spanishs-artist-details">
              <h3> Bad Bunny</h3>
              <p>Spanish Singer-Songwriter</p>
              <p>{badBunnySongs.lspanishsth}10 songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
