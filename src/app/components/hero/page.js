import React from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import "./hero.css";

export default function Hero() {
  const featuredAlbums = [
    { id: 1, title: "Midnight Vibes", artist: "Luna Eclipse", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop", plays: "2.1M" },
    { id: 2, title: "Digital Dreams", artist: "Cyber Sounds", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop", plays: "1.8M" },
    { id: 3, title: "Neon Nights", artist: "Synthwave Pro", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop", plays: "3.2M" },
    { id: 4, title: "Bass Drop", artist: "Heavy Beats", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop", plays: "2.7M" }
  ];

  const topArtists = [
    { id: 1, name: "Luna Eclipse", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop", followers: "12.3M" },
    { id: 2, name: "Cyber Sounds", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop", followers: "8.7M" },
    { id: 3, name: "Synthwave Pro", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop", followers: "15.1M" },

  ];

  const recentPlays = [
    { id: 1, title: "Electric Pulse", artist: "Neon Rider", duration: "3:24", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=50&h=50&fit=crop" },
    { id: 2, title: "Midnight Code", artist: "Data Stream", duration: "4:12", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" },
    { id: 3, title: "Binary Beat", artist: "Algo Rhythm", duration: "2:58", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=50&h=50&fit=crop" },
    { id: 4, title: "Debug Mode", artist: "Code Melody", duration: "3:45", image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=50&h=50&fit=crop" }
  ];

  return (
    <div className="main-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="greeting">
          <h1 className="welcome-text">Good evening</h1>
          <p className="subtitle">Ready to discover your next favorite track?</p>
        </div>
        <div className="quick-actions">
          <button className="action-btn">Recently Played</button>
          <button className="action-btn">Your Mix</button>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="quick-access-grid">
        {recentPlays.slice(0, 4).map(track => (
          <div key={track.id} className="quick-access-card">
            <img src={track.image} alt={track.title} className="quick-access-image" />
            <div className="quick-access-info">
              <h3>{track.title}</h3>
              <p>{track.artist}</p>
            </div>
            <button className="play-btn-quick">
              <Play size={16} fill="white" />
            </button>
          </div>
        ))}
      </div>

      {/* Featured Albums Section */}
      <div className="section">
        <div className="section-header">
          <h2>Featured Albums</h2>
          <button className="see-all-btn">See all</button>
        </div>
        <div className="albums-grid">
          {featuredAlbums.map(album => (
            <div key={album.id} className="album-card">
              <div className="album-image-container">
                <img src={album.image} alt={album.title} className="album-image" />
                <button className="play-btn">
                  <Play size={20} fill="white" />
                </button>
              </div>
              <div className="album-info">
                <h3>{album.title}</h3>
                <p>{album.artist}</p>
                <span className="plays">{album.plays} plays</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Artists Section */}
      <div className="section">
        <div className="section-header">
          <h2>Top Artists</h2>
          <button className="see-all-btn">See all</button>
        </div>
        <div className="artists-grid">
          {topArtists.map(artist => (
            <div key={artist.id} className="artist-card">
              <div className="artist-image-container">
                <img src={artist.image} alt={artist.name} className="artist-image" />
                <button className="play-btn">
                  <Play size={20} fill="white" />
                </button>
              </div>
              <div className="artist-info">
                <h3>{artist.name}</h3>
                <p>{artist.followers} followers</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Played Section */}
      <div className="section">
        <div className="section-header">
          <h2>Recently Played</h2>
          <button className="see-all-btn">See all</button>
        </div>
        <div className="recent-tracks">
          {recentPlays.map(track => (
            <div key={track.id} className="track-row">
              <div className="track-left">
                <img src={track.image} alt={track.title} className="track-image" />
                <div className="track-info">
                  <h4>{track.title}</h4>
                  <p>{track.artist}</p>
                </div>
              </div>
              <div className="track-right">
                <Heart size={18} className="heart-icon" />
                <span className="duration">{track.duration}</span>
                <MoreHorizontal size={18} className="more-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}