"use client";
import "./enrique.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function AlanWalkerSongs() {
  const router = useRouter();

  const enriqueIglesiasSongs = [
  {
    title: "Hero",
    duration: "4:24",
    album: "Escape",
  },
  {
    title: "Bailando (feat. Gente de Zona, Descemer Bueno)",
    duration: "4:03",
    album: "Sex and Love",
  },
  {
    title: "Escape",
    duration: "3:28",
    album: "Escape",
  },
  {
    title: "Tonight (I'm Lovin' You)",
    duration: "3:52",
    album: "Euphoria",
  },
  {
    title: "I Like It (feat. Pitbull)",
    duration: "3:52",
    album: "Euphoria",
  },
  {
    title: "Do You Know? (The Ping Pong Song)",
    duration: "3:38",
    album: "Insomniac",
  },
  {
    title: "Be With You",
    duration: "3:39",
    album: "Enrique",
  },
  {
    title: "Rhythm Divine",
    duration: "3:28",
    album: "Enrique",
  },
  {
    title: "Addicted",
    duration: "3:55",
    album: "7",
  },
  {
    title: "Not In Love (feat. Kelis)",
    duration: "3:42",
    album: "7",
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
            <h2>Enrique Iglesias - Songs</h2>
          </div>
          <div className="songs-list">
            {enriqueIglesiasSongs.map((song, index) => (
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
              <img src="/enrique-iglesias.jpeg" alt=" Enrique Iglesias" />
            </div>
            <div className="spanishs-artist-details">
              <h3> Enrique Iglesias</h3>
              <p>Spanish Singer-Songwriter</p>
              <p>{enriqueIglesiasSongs.lspanishsth}10 songs available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
