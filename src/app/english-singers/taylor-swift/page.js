"use client";
import "./taylor.css";
import Sidebar from "../../components/sidebar/page";
import Navbar from "../../components/navbar/page";
import Footer from "../../components/footer/page";
import { useRouter } from "next/navigation";

export default function TaylorSwiftSongs() {
  const router = useRouter();

  const taylorSwiftSongs = [
    {
      title: "Love Story",
      duration: "3:55",
    },
    {
      title: "Blank Space",
      duration: "3:51",
    },
    {
      title: "Shake It Off",
      duration: "3:39",
    },
    {
      title: "You Belong With Me",
      duration: "3:51",
    },
    {
      title: "Cardigan",
      duration: "3:59",
    },
    {
      title: "Anti-Hero",
      duration: "3:20",
    },
    {
      title: "Cruel Summer",
      duration: "2:58",
    },
    {
      title: "All Too Well (10 Minute Version)",
      duration: "10:13",
    },
    {
      title: "Lover",
      duration: "3:41",
    },
    {
      title: "Wildest Dreams",
      duration: "3:40",
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
                <h2>Taylor Swift - Songs</h2>
              </div>
              <div className="songs-list">
                {taylorSwiftSongs.map((song, index) => (
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
                  <img src="/taylor-swift.jpeg" alt="Taylor Swift" />
                </div>
                <div className="eng-artist-details">
                  <h3>Taylor Swift</h3>
                  <p>English singer-songwriter</p>
                  <p>{taylorSwiftSongs.length} songs available</p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
}