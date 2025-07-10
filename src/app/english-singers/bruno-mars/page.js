"use client";
import "./bruno.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function BrunoMarsSongs() {
  const router = useRouter();

  const brunoMarsSongs = [
    {
      title: "Uptown Funk",
      duration: "4:30",
    },
    {
      title: "Just the Way You Are",
      duration: "3:40",
    },
    {
      title: "24K Magic",
      duration: "3:46",
    },
    {
      title: "That's What I Like",
      duration: "3:26",
    },
    {
      title: "Grenade",
      duration: "3:42",
    },
    {
      title: "Locked Out of Heaven",
      duration: "3:53",
    },
    {
      title: "When I Was Your Man",
      duration: "3:33",
    },
    {
      title: "Treasure",
      duration: "2:58",
    },
    {
      title: "Finesse",
      duration: "3:11",
    },
    {
      title: "Leave the Door Open",
      duration: "4:02",
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
                <h2>Bruno Mars - Songs</h2>
              </div>
              <div className="songs-list">
                {brunoMarsSongs.map((song, index) => (
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
                  <img src="/bruno-mars.jpeg" alt="Bruno Mars" />
                </div>
                <div className="eng-artist-details">
                  <h3>Bruno Mars</h3>
                  <p>English singer-songwriter</p>
                  <p>{brunoMarsSongs.length} songs available</p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
}