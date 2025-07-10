"use client";
import "./library.css";
import Sidebar from "../components/sidebar/page";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Library() {
  const router = useRouter();

  const languages = [
    {
      name: "Hindi",
      image: "/hindi.jpeg",
      route: "/hindi-singers"
    },
    {
      name: "English",
      image: "/english.jpg",
      route: "/english-singers"
    },
    {
      name: "Spanish",
      image: "/spanish.jpeg",
      route: "/spanish-singers"
    },
    {
      name: "Bengali",
      image: "/bengali.webp",
      route: "/bengali-singers"
    },
    {
      name: "Japanese",
      image: "/japanese.jpeg",
      route: "/japanese-singers"
    },
  ];

  const handleLanguageClick = (language) => {
    router.push(language.route);
  };

  return (
    <div className="container">
      <Sidebar />
      <Navbar />
      <div className="library-main">
        <h2>Languages</h2>
        <div className="language-scroll">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="language-card"
              onClick={() => handleLanguageClick(lang)}
              style={{
                backgroundImage: `url(${lang.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="language-name-overlay">{lang.name}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}