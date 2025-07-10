"use client";
import "./alan.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function AlanWalkerSongs() {
  const router = useRouter();

  const alanWalkerSongs = [
    {
      title: "Faded",
      duration: "3:32",
    },
    {
      title: "Alone",
      duration: "2:41",
    },
    {
      title: "Darkside",
      duration: "3:31",
    },
    {
      title: "On My Way",
      duration: "3:02",
    },
    {
      title: "Sing Me to Sleep",
      duration: "3:09",
    },
    {
      title: "The Spectre",
      duration: "3:13",
    },
    {
      title: "All Falls Down",
      duration: "3:19",
    },
    {
      title: "Lily",
      duration: "3:15",
    },
    {
      title: "Routine",
      duration: "2:46",
    },
    {
      title: "End of Time",
      duration: "2:58",
    }
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
    // Add your add to playlist functionality here
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
                    <h2>Alan Walker - Songs</h2>
                  </div>
                  <div className="songs-list">
                    {alanWalkerSongs.map((song, index) => (
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
                      <img src="/alan-walker.jpeg" alt="Alan Walker" />
                    </div>
                    <div className="eng-artist-details">
                      <h3>Alan Walker</h3>
                      <p>English singer-songwriter</p>
                      <p>{alanWalkerSongs.length} songs available</p>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          );
}