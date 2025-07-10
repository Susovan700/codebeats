"use client";
import "./english.css";
import Sidebar from "../components/sidebar/page";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import { useRouter } from "next/navigation";

export default function EnglishSingers() {
  const router = useRouter();

  const englishSingers = [
    {
      name: "Ed Sheeran",
      image: "/ed-sheeran.jpeg",
      route: "/english-singers/ed-sheeran"
    },
    {
      name: "Taylor Swift",
      image: "/taylor-swift.jpeg",
      route: "/english-singers/taylor-swift"
    },
    {
      name: "Bruno Mars",
      image: "/bruno-mars.jpeg",
      route: "/english-singers/bruno-mars"
    },
    {
      name: "Alan Walker",
      image: "/alan-walker.jpeg",
      route: "/english-singers/alan-walker"
    },
    {
      name: "Justin Biebar",
      image: "/justin-biebar.webp",
      route: "/english-singers/justin-biebar"
    }
  ];

  const handleSingerClick = (singer) => {
    router.push(singer.route);
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="english-container">
      <Sidebar />
      <Navbar />
      <div className="english-main">
        <div className="eng-navigation-header">
          <button className="library-back-button" onClick={handleBackClick}>
            ← Back to Languages
          </button>
          <h2>English Singers</h2>
        </div>
        
        <div className="singers-grid">
          {englishSingers.map((singer, index) => (
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