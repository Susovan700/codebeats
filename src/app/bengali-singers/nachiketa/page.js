"use client";
import "./nachiketa.css"; // You can rename the CSS file if needed
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function NachiketaSongs() {
  const router = useRouter();

  const nachiketaSongs = [
    {
      title: "Nilanjona",
      duration: "4:42",
      album: "Nilanjona",
    },
    {
      title: "Ei Besh Bhalo Achhi",
      duration: "4:10",
      album: "Ei Besh Bhalo Achhi",
    },
    {
      title: "Briddhashram",
      duration: "5:25",
      album: "Best of Nachiketa",
    },
    {
      title: "Joto Durei Thako",
      duration: "4:33",
      album: "Anirban",
    },
    {
      title: "Hridoyer Ektai Gaan",
      duration: "3:58",
      album: "Ganer Jharnatolay",
    },
    {
      title: "Classroom",
      duration: "4:45",
      album: "Best of Nachiketa",
    },
    {
      title: "Gorbhodharini Maa",
      duration: "5:12",
      album: "Uncut",
    },
    {
      title: "Pother Gaan",
      duration: "4:29",
      album: "Collection",
    },
    {
      title: "Keu Bole Nachiketa",
      duration: "4:40",
      album: "Keu Bole",
    },
    {
      title: "Bhalo Achi Bhalo Theko",
      duration: "4:36",
      album: "Bhalo Achi",
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
            <h2>Nachiketa Chakraborty - Songs</h2>
          </div>
          <div className="songs-list">
            {nachiketaSongs.map((song, index) => (
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
              <img src="/nachiketa.jpeg" alt="Nachiketa Chakraborty" />
            </div>
            <div className="bengalis-artist-details">
              <h3>Nachiketa Chakraborty</h3>
              <p>Bengali singer-songwriter</p>
              <p>{`${nachiketaSongs.length} songs available`}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
