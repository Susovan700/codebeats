"use client";
import "./hindi.css";
import Sidebar from "../components/sidebar/page";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import { useRouter } from "next/navigation";

export default function HindiSingers() {
  const router = useRouter();

  const hindiSingers = [
    {
      name: "Arijit Singh",
      image: "/arijit-singh.webp",
      route: "/hindi-singers/arijit-singh"
    },
    {
      name: "KK",
      image: "/kk.jpeg",
      route: "/hindi-singers/kk"
    },
    {
      name: "Armaan Malik",
      image: "/aarman-malik.jpeg",
      route: "/hindi-singers/armaan-malik"
    },
    {
      name: "Atif Aslam",
      image: "/atif-aslam.jpeg",
      route: "/hindi-singers/atif-aslam"
    },
    {
      name: "Sonu Nigam",
      image: "/sonu-nigam.jpeg",
      route: "/hindi-singers/sonu-nigam"
    }
  ];

  const handleSingerClick = (singer) => {
    router.push(singer.route);
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="hindi-container">
      <Sidebar />
      <Navbar />
      <div className="hindi-main">
        <div className="hindi-navigation-header">
          <button className="library-back-button" onClick={handleBackClick}>
            ← Back to Languages
          </button>
          <h2>Hindi Singers</h2>
        </div>
        
        <div className="singers-grid">
          {hindiSingers.map((singer, index) => (
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