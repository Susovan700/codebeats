"use client";
import "./japanese.css"; // You may want to rename this file to "japanese.css"
import Sidebar from "../components/sidebar/page";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import { useRouter } from "next/navigation";

export default function JapaneseSingers() {
  const router = useRouter();

  const japaneseSingers = [
    {
      name: "RADWIMPS",
      image: "/radwimps.jpeg",
      route: "/japanese-singers/radwimps"
    },
    {
      name: "Kenshi Yonezu",
      image: "/kenshi-yonezu.webp",
      route: "/japanese-singers/kenshi-yonezu"
    },
    {
      name: "Rokudenashi",
      image: "/rokudenashi.jpg",
      route: "/japanese-singers/rokudenashi"
    },
    {
      name: "YOASOBI",
      image: "/yoasobi.jpeg",
      route: "/japanese-singers/yoasobi"
    },
    {
      name: "Aimer",
      image: "/aimer.jpeg",
      route: "/japanese-singers/aimer"
    }
  ];

  const handleSingerClick = (singer) => {
    router.push(singer.route);
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="japanese-container"> 
      <Sidebar />
      <Navbar />
      <div className="japanese-main"> 
        <div className="japanese-navigation-header">
          <button className="library-back-button" onClick={handleBackClick}>
            ← Back to Languages
          </button>
          <h2>Japanese Singers</h2>
        </div>

        <div className="singers-grid">
          {japaneseSingers.map((singer, index) => (
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
