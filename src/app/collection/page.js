"use client"
import React, { useState } from "react";
import Sidebar from "../components/sidebar/page";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";

import "./collection.css"
import {
  Play,
  Heart,
  Download,
  Clock,
  Music,
  Plus,
  MoreHorizontal,
  Filter,
  Search,
  Grid,
  List,
} from "lucide-react";

export default function YourCollection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // User-created playlists (initially empty)
  const [playlists, setPlaylists] = useState([]);

  // All available songs (sample data)
  const [allSongs] = useState([
    {
      id: 1,
      title: "Quantum Leap",
      artist: "Data Stream",
      album: "Matrix",
      duration: "3:56",
      image: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=50&h=50&fit=crop",
      playedAt: "2 hours ago",
    },
    {
      id: 2,
      title: "Pixel Perfect",
      artist: "Retro Wave",
      album: "8-Bit Dreams",
      duration: "4:12",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=50&h=50&fit=crop",
      playedAt: "5 hours ago",
    },
    {
      id: 3,
      title: "Server Room",
      artist: "Tech Noir",
      album: "Backend",
      duration: "3:33",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=50&h=50&fit=crop",
      playedAt: "Yesterday",
    },
    {
      id: 4,
      title: "Digital Dreams",
      artist: "Cyber Sync",
      album: "Virtual Reality",
      duration: "4:28",
      image: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=50&h=50&fit=crop",
    },
    {
      id: 5,
      title: "Code Breaker",
      artist: "Algorithm",
      album: "Binary Code",
      duration: "3:45",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=50&h=50&fit=crop",
    },
    {
      id: 6,
      title: "Neural Network",
      artist: "AI Collective",
      album: "Machine Learning",
      duration: "5:12",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=50&h=50&fit=crop",
    },
    {
      id: 7,
      title: "Cloud Computing",
      artist: "Data Flow",
      album: "Distributed Systems",
      duration: "4:33",
      image: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=50&h=50&fit=crop",
    },
    {
      id: 8,
      title: "Blockchain Beats",
      artist: "Crypto Waves",
      album: "Decentralized",
      duration: "3:58",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=50&h=50&fit=crop",
    },
    {
      id: 9,
      title: "API Gateway",
      artist: "Microservices",
      album: "Service Mesh",
      duration: "4:07",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=50&h=50&fit=crop",
    },
    {
      id: 10,
      title: "Database Query",
      artist: "SQL Symphony",
      album: "Relational",
      duration: "3:21",
      image: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=50&h=50&fit=crop",
    },
    // Add more songs to demonstrate scrolling
    ...Array.from({ length: 90 }, (_, i) => ({
      id: i + 11,
      title: `Tech Track ${i + 1}`,
      artist: `Artist ${i + 1}`,
      album: `Album ${i + 1}`,
      duration: `${Math.floor(Math.random() * 2) + 3}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      image: `https://images.unsplash.com/photo-${571974599782 + i}?w=50&h=50&fit=crop`,
    }))
  ]);

  // Liked songs state - tracks song IDs that are liked
  const [likedSongIds, setLikedSongIds] = useState(new Set([1, 2, 5, 8])); // Initially like some songs

  // Function to create a new playlist
  const createPlaylist = () => {
    const newPlaylist = {
      id: Date.now(),
      name: `My Playlist #${playlists.length + 1}`,
      songs: 0,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      lastPlayed: "Never",
      created: new Date().toLocaleDateString('en-US', { 
        month: 'short', 
        year: 'numeric' 
      }),
    };
    setPlaylists([...playlists, newPlaylist]);
  };

  // Function to toggle like status of a song
  const toggleLike = (songId) => {
    const newLikedSongIds = new Set(likedSongIds);
    if (newLikedSongIds.has(songId)) {
      newLikedSongIds.delete(songId);
    } else {
      newLikedSongIds.add(songId);
    }
    setLikedSongIds(newLikedSongIds);
  };

  // Get liked songs from all songs
  const likedSongs = allSongs.filter(song => likedSongIds.has(song.id));

  const recentlyPlayed = [
    {
      id: 1,
      title: "Quantum Leap",
      artist: "Data Stream",
      album: "Matrix",
      duration: "3:56",
      image: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=50&h=50&fit=crop",
      playedAt: "2 hours ago",
    },
    {
      id: 2,
      title: "Pixel Perfect",
      artist: "Retro Wave",
      album: "8-Bit Dreams",
      duration: "4:12",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=50&h=50&fit=crop",
      playedAt: "5 hours ago",
    },
    {
      id: 3,
      title: "Server Room",
      artist: "Tech Noir",
      album: "Backend",
      duration: "3:33",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=50&h=50&fit=crop",
      playedAt: "Yesterday",
    },
  ];

  const downloadedSongs = [
    {
      id: 1,
      title: "Offline Mode",
      artist: "Cloud Nine",
      album: "Disconnected",
      duration: "4:05",
      image: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=50&h=50&fit=crop",
      size: "8.2 MB",
    },
    {
      id: 2,
      title: "Local Storage",
      artist: "Cache Hit",
      album: "Memory Lane",
      duration: "3:28",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=50&h=50&fit=crop",
      size: "6.8 MB",
    },
  ];

  // Filter options array
  const filterOptions = [
    { id: "all", label: "All", icon: Music },
    { id: "playlists", label: "Playlists", icon: Music },
    { id: "liked", label: "Liked Songs", icon: Heart },
    { id: "downloaded", label: "Downloaded", icon: Download },
  ];

  const filteredContent = () => {
    switch (selectedFilter) {
      case "playlists":
        return { type: "playlists", data: playlists };
      case "liked":
        return { type: "songs", data: likedSongs };
      case "downloaded":
        return { type: "songs", data: downloadedSongs };
      default:
        return {
          type: "all",
          data: { playlists, likedSongs, downloadedSongs },
        };
    }
  };

  const content = filteredContent();

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="collection-container">
          {/* Header */}
          <div className="collection-header">
            <div className="header-left">
              <h1 className="collection-title">Your Collection</h1>
              <p className="collection-subtitle">Your music, your way</p>
            </div>
            <div className="header-actions">
              <button className="create-playlist-btn" onClick={createPlaylist}>
                <Plus size={20} />
                Create Playlist
              </button>
            </div>
          </div>

          {/* Filter and Search Bar */}
          <div className="filter-section">
            <div className="filter-tabs">
              {filterOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <button
                    key={option.id}
                    className={`filter-tab ${
                      selectedFilter === option.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedFilter(option.id)}
                  >
                    <IconComponent size={18} />
                    {option.label}
                  </button>
                );
              })}
            </div>

            <div className="search-and-view">
              <div className="search-bar">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Search in your collection..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="view-toggle">
                <button
                  className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid size={18} />
                </button>
                <button
                  className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => setViewMode("list")}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="content-area">
            {content.type === "all" && (
              <div className="all-content">
                {/* Quick Access Section */}
                <div className="quick-access-section">
                  <h2>Quick Access</h2>
                  <div className="quick-access-grid">
                    {/* Liked Songs Quick Access */}
                    <div className="quick-access-card liked-songs-card">
                      <div className="quick-access-icon">
                        <Heart size={32} />
                      </div>
                      <div className="quick-access-info">
                        <h3>Liked Songs</h3>
                        <p>{likedSongs.length} songs</p>
                      </div>
                      <button className="quick-play-btn">
                        <Play size={16} fill="white" />
                      </button>
                    </div>
                    
                    {/* Downloaded Songs Quick Access */}
                    <div className="quick-access-card downloaded-songs-card">
                      <div className="quick-access-icon">
                        <Download size={32} />
                      </div>
                      <div className="quick-access-info">
                        <h3>Downloaded</h3>
                        <p>{downloadedSongs.length} songs</p>
                      </div>
                      <button className="quick-play-btn">
                        <Play size={16} fill="white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Recent Playlists */}
                {playlists.length > 0 && (
                  <div className="section">
                    <div className="section-header">
                      <h2>Your Playlists</h2>
                      <button className="see-all-btn">View All</button>
                    </div>
                    <div className="playlists-grid">
                      {playlists.slice(0, 4).map((playlist) => (
                        <div key={playlist.id} className="playlist-card">
                          <div className="playlist-image-container">
                            <img src={playlist.image} alt={playlist.name} />
                            <button className="play-btn">
                              <Play size={20} fill="white" />
                            </button>
                          </div>
                          <div className="playlist-info">
                            <h3>{playlist.name}</h3>
                            <p>{playlist.songs} songs</p>
                            <span className="last-played">
                              Last played {playlist.lastPlayed}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Empty state for playlists */}
                {playlists.length === 0 && (
                  <div className="section">
                    <div className="empty-state">
                      <div className="empty-icon">
                        <Music size={48} />
                      </div>
                      <h3>No playlists yet</h3>
                      <p>Create your first playlist to get started</p>
                      <button className="create-playlist-btn" onClick={createPlaylist}>
                        <Plus size={20} />
                        Create Your First Playlist
                      </button>
                    </div>
                  </div>
                )}

                {/* Your Music Library */}
                <div className="section">
                  <div className="section-header">
                    <h2>Your Music Library</h2>
                    <div className="library-stats">
                      <span className="stat-pill">
                        <Music size={14} />
                        {playlists.length} Playlists
                      </span>
                      <span className="stat-pill">
                        <Heart size={14} />
                        {likedSongs.length} Liked
                      </span>
                      <span className="stat-pill">
                        <Download size={14} />
                        {downloadedSongs.length} Downloaded
                      </span>
                    </div>
                  </div>
                  
                  <div className="library-content">
                    {/* Featured Playlists */}
                    {playlists.length > 0 && (
                      <div className="featured-playlists">
                        <h3>Your Playlists</h3>
                        <div className="playlists-grid">
                          {playlists.slice(0, 6).map((playlist) => (
                            <div key={playlist.id} className="playlist-card">
                              <div className="playlist-image-container">
                                <img src={playlist.image} alt={playlist.name} />
                                <button className="play-btn">
                                  <Play size={20} fill="white" />
                                </button>
                              </div>
                              <div className="playlist-info">
                                <h4>{playlist.name}</h4>
                                <p>{playlist.songs} songs</p>
                                <span className="last-played">
                                  Created {playlist.created}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                        {playlists.length > 6 && (
                          <button className="view-more-btn">
                            View All {playlists.length} Playlists
                          </button>
                        )}
                      </div>
                    )}
                    
                    {/* Most Played Songs */}
                    <div className="most-played-section">
                      <h3>Most Played</h3>
                      <div className="songs-grid">
                        {likedSongs.slice(0, 4).map((song) => (
                          <div key={song.id} className="song-card">
                            <div className="song-image-container">
                              <img src={song.image} alt={song.title} />
                              <button className="mini-play-btn">
                                <Play size={16} fill="white" />
                              </button>
                            </div>
                            <div className="song-details">
                              <h4>{song.title}</h4>
                              <p>{song.artist}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {content.type === "playlists" && (
              <div className={`playlists-content ${viewMode}`}>
                {playlists.map((playlist) => (
                  <div key={playlist.id} className="playlist-item">
                    <div className="playlist-image-container">
                      <img src={playlist.image} alt={playlist.name} />
                      <button className="play-btn">
                        <Play size={20} fill="white" />
                      </button>
                    </div>
                    <div className="playlist-details">
                      <h3>{playlist.name}</h3>
                      <p>{playlist.songs} songs</p>
                      <div className="playlist-meta">
                        <span>Created {playlist.created}</span>
                        <span>Last played {playlist.lastPlayed}</span>
                      </div>
                    </div>
                    <button className="more-btn">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {content.type === "songs" && (
              <div className="songs-content">
                <div className="songs-header">
                  <h2>
                    {selectedFilter === "liked" && "Liked Songs"}
                    {selectedFilter === "downloaded" && "Downloaded Music"}
                  </h2>
                  <p>{content.data.length} songs</p>
                </div>
                <div className="songs-list" style={{ 
                  maxHeight: '600px', 
                  overflowY: 'auto',
                  paddingRight: '10px',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}>
                  <style jsx>{`
                    .songs-list::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  {content.data.map((song) => (
                    <div key={song.id} className="song-row">
                      <div className="song-left">
                        <img src={song.image} alt={song.title} />
                        <div className="song-info">
                          <h4>{song.title}</h4>
                          <p>
                            {song.artist} • {song.album}
                          </p>
                        </div>
                      </div>
                      <div className="song-right">
                        {selectedFilter === "liked" && (
                          <button 
                            onClick={() => toggleLike(song.id)}
                            className="heart-button"
                            style={{ 
                              background: 'none', 
                              border: 'none', 
                              cursor: 'pointer',
                              padding: '4px'
                            }}
                          >
                            <Heart 
                              size={18} 
                              className={`heart-icon ${likedSongIds.has(song.id) ? 'filled' : ''}`}
                              fill={likedSongIds.has(song.id) ? '#ff6b6b' : 'none'}
                              color={likedSongIds.has(song.id) ? '#ff6b6b' : '#666'}
                            />
                          </button>
                        )}
                        {selectedFilter === "downloaded" && (
                          <span className="file-size">{song.size}</span>
                        )}
                        <span className="duration">{song.duration}</span>
                        <button className="more-btn">
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}