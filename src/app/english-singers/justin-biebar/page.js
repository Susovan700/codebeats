"use client";
import "./biebar.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function justinBieberSongs() {
  const router = useRouter();

 const justinBieberSongs = [
    {
      title: "Sorry",
      duration: "3:20",
    },
    {
      title: "Love Yourself",
      duration: "3:53",
    },
    {
      title: "Baby",
      duration: "3:34",
    },
    {
      title: "What Do You Mean?",
      duration: "3:25",
    },
    {
      title: "Intentions",
      duration: "3:32",
    },
    {
      title: "Yummy",
      duration: "3:28",
    },
    {
      title: "Stay",
      duration: "2:21",
    },
    {
      title: "Peaches",
      duration: "3:18",
    },
    {
      title: "Boyfriend",
      duration: "2:51",
    },
    {
      title: "As Long As You Love Me",
      duration: "3:49",
    }
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
    <div className="eng-container">
          <Sidebar />
          <Navbar />
          <div className="eng-main">
            <div className="left">
              <div className="eng-navigation-header">
                <button className="eng-back-button" onClick={handleBackClick}>
                  ← Back to Singers
                </button>
                <h2>Justin Biebar - Songs</h2>
              </div>
              <div className="songs-list">
                {justinBieberSongs.map((song, index) => (
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
            <div className="right">
              <div className="eng-artist-info">
                <div className="eng-artist-image">
                  <img src="/justin.jpeg" alt="Justin Bieber" />
                </div>
                <div className="eng-artist-details">
                  <h3>Justin Biebar</h3>
                  <p>English singer-songwriter</p>
                  <p>{justinBieberSongs.length} songs available</p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
  );
}