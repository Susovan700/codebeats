"use client";
import "./spanish.css";
import Sidebar from "../components/sidebar/page";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import { useRouter } from "next/navigation";

export default function SpanishSingers() {
  const router = useRouter();

  const spanishSingers = [
    {
      name: "Rosalía",
      image: "/rosalia.jpeg",
      route: "/spanish-singers/rosalia"
    },
    {
      name: "Enrique Iglesias",
      image: "/enrique-iglesias.jpeg",
      route: "/spanish-singers/enrique-iglesias"
    },
    {
      name: "Shakira",
      image: "/shakira.jpeg",
      route: "/spanish-singers/shakira"
    },
    {
      name: "Bad Bunny",
      image: "/bad-bunny.jpeg",
      route: "/spanish-singers/bad-bunny"
    },
    {
      name: "Luis Fonsi",
      image: "/luis-fonsi.jpeg",
      route: "/spanish-singers/luis-fonsi"
    }
  ];

  const handleSingerClick = (singer) => {
    router.push(singer.route);
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="spanish-container">
      <Sidebar />
      <Navbar />
      <div className="spanish-main">
        <div className="spanish-navigation-header">
          <button className="library-back-button" onClick={handleBackClick}>
            ← Back to Languages
          </button>
          <h2>Spanish Singers</h2>
        </div>
        
        <div className="singers-grid">
          {spanishSingers.map((singer, index) => (
            <div 
              key={index} 
              className="singer-card"
              onClick={() => handleSingerClick(singer)}
            >
              <div 
                className="singer-image"
                style={{
                  backgroundImage: `url(${singer.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="singer-name">{singer.name}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}