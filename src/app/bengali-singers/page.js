"use client";
import "./bengali.css";
import Sidebar from "../components/sidebar/page";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import { useRouter } from "next/navigation";

export default function BengaliSingers() {
  const router = useRouter();

  const bengaliSingers = [
    {
      name: "Arijit Singh",
      image: "/arijit-singh.webp",
      route: "/bengali-singers/arijit-singh-bengali",
    },
    {
      name: "Anupam Roy",
      image: "/anupam-roy.jpeg",
      route: "/bengali-singers/anupam-roy",
    },
    {
      name: "Shreya Ghosal",
      image: "/shreya-ghosal.webp",
      route: "/bengali-singers/shreya-ghosal",
    },
    {
      name: "Srikanta Acharya",
      image: "/srikanta-acharya.jpeg",
      route: "/bengali-singers/srikanta-acharya",
    },
    {
      name: "Nachiketa Chakraborty",
      image: "/nachiketa.jpeg",
      route: "/bengali-singers/nachiketa",
    },
  ];

  const handleSingerClick = (singer) => {
    router.push(singer.route);
  };

  const handleBackClick = () => {
    router.back();
  };
  return (
    <div className="bengali-container">
      <Sidebar />
      <Navbar />
      <div className="bengali-main">
        <div className="bengali-navigation-header">
          <button className="library-back-button" onClick={handleBackClick}>
            ← Back to Languages
          </button>
          <h2>Bengali Singers</h2>
        </div>

        <div className="singers-grid">
          {bengaliSingers.map((singer, index) => (
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
